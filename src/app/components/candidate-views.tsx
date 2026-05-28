import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { JobOffersPaginationFooter } from "./JobOffersPaginationFooter";
import { Search, MapPin, Briefcase, CheckCircle2, Loader2, AlertTriangle, SortAsc, Trash2, RefreshCw } from "lucide-react";
import { MatchRing } from "./match-ring";
import { ApplicationModal } from "./ApplicationModal";
import { api, candidateApi, formatDate, formatScoreOutOfTen, type CandidateSubmissionDTO, type JobOfferDTO, loadStoredAuth, buildApiUrl } from "../api";
import { toast } from "sonner";

function SseProgressBadge({ evaluationId, status, t, onComplete }: { evaluationId?: number; status: string; t: any; onComplete?: () => void }) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (status !== "WAITING" || evaluationId == null) {
      setProgress(0);
      return;
    }

    const auth = loadStoredAuth();
    const token = auth?.accessToken || "";
    const url = buildApiUrl(`/api/v1/evaluations/${evaluationId}/progress?token=${token}`);
    
    const eventSource = new EventSource(url);

    eventSource.addEventListener("progress", (event) => {
      try {
        const data = JSON.parse(event.data);
        if (typeof data.progress === "number") {
          setProgress(data.progress);
          if (data.progress >= 100 && onComplete) {
            onComplete();
          }
        }
      } catch (e) {
        console.error("Failed to parse SSE progress", e);
      }
    });

    eventSource.addEventListener("error", () => {
      eventSource.close();
    });

    return () => {
      eventSource.close();
    };
  }, [evaluationId, status, onComplete]);

  if (status === "FAILED") return <AlertTriangle className="w-3.5 h-3.5" />;
  if (status === "SCORED" || status === "EVALUATED") return <CheckCircle2 className="w-3.5 h-3.5" />;
  
  if (status === "WAITING" && progress > 0 && progress < 100) {
    return (
      <div className="flex items-center gap-1.5">
        <div className="relative w-3.5 h-3.5 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-amber-200"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-amber-600 transition-all duration-500 ease-out"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray={`${progress}, 100`}
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <span>{progress}%</span>
      </div>
    );
  }

  return <Loader2 className="w-3.5 h-3.5 animate-spin" />;
}

function statusBadge(status: string) {
  if (status === "SCORED" || status === "EVALUATED") {
    return "bg-green-50 text-green-700";
  }
  if (status === "FAILED") {
    return "bg-red-50 text-red-700";
  }
  return "bg-amber-50 text-amber-700";
}

function postedLabel(dateIso: string, t: (key: string, options?: Record<string, unknown>) => string): string {
  const date = new Date(dateIso);
  if (Number.isNaN(date.getTime())) return t("common.messages.unknown");
  const diffHours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  if (diffHours < 24) return t("jobOffers.board.postedHoursAgo", { count: Math.max(1, diffHours) });
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return t("jobOffers.board.postedDaysAgo", { count: diffDays });
  return formatDate(dateIso);
}

type CandidateSortBy = "createdAt" | "title";
type CandidateSortDir = "asc" | "desc";

type SortConfig = {
  sortBy: CandidateSortBy;
  sortDir: CandidateSortDir;
};

const SORT_OPTIONS: Array<{ value: string; labelKey: string; config: SortConfig }> = [
  { value: "createdAt-desc", labelKey: "jobOffers.board.sort.newest", config: { sortBy: "createdAt", sortDir: "desc" } },
  { value: "createdAt-asc", labelKey: "jobOffers.board.sort.oldest", config: { sortBy: "createdAt", sortDir: "asc" } },
  { value: "title-asc", labelKey: "jobOffers.board.sort.titleAsc", config: { sortBy: "title", sortDir: "asc" } },
  { value: "title-desc", labelKey: "jobOffers.board.sort.titleDesc", config: { sortBy: "title", sortDir: "desc" } },
];

export function JobBoard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({ sortBy: "createdAt", sortDir: "desc" });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [jobOffers, setJobOffers] = useState<JobOfferDTO[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedSortValue =
    SORT_OPTIONS.find((option) => option.config.sortBy === sortConfig.sortBy && option.config.sortDir === sortConfig.sortDir)?.value ??
    SORT_OPTIONS[0].value;

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await api.getCandidateJobs({
          page,
          size,
          title: title.trim() || undefined,
          location: location.trim() || undefined,
          sortBy: sortConfig.sortBy,
          sortDir: sortConfig.sortDir,
        });
        if (!cancelled) {
          setJobOffers(data?.content || []);
          setTotalPages(data?.page?.totalPages ?? 1);
          setTotalElements(data?.page?.totalElements ?? 0);
        }
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : t("jobOffers.board.errors.load"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [location, page, size, sortConfig.sortBy, sortConfig.sortDir, title]);

  const localizeStatus = (status: string) => {
    const key = `common.status.${status.toLowerCase()}`;
    const translated = t(key);
    return translated === key ? status : translated;
  };

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{t("jobOffers.board.title")}</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          {t("jobOffers.board.subtitle")}
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setPage(0);
            }}
            placeholder={t("jobOffers.board.searchByTitle")}
            className="pl-9 h-11"
          />
        </div>
        <div className="relative w-full md:w-64">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(0);
            }}
            placeholder={t("jobOffers.board.filterByLocation")}
            className="pl-9 h-11"
          />
        </div>
        <div className="relative w-full md:w-64">
          <SortAsc className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Select
            value={selectedSortValue}
            onValueChange={(value) => {
              const option = SORT_OPTIONS.find((item) => item.value === value);
              if (!option) return;
              setSortConfig({ ...option.config });
              setPage(0);
            }}
          >
            <SelectTrigger className="h-11 pl-9">
              <SelectValue placeholder={t("jobOffers.board.sortBy")} />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {t(option.labelKey)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      {loading ? (
        <Card className="p-4 text-center text-gray-500 md:p-8">{t("jobOffers.board.loading")}</Card>
      ) : jobOffers.length === 0 ? (
        <Card className="p-4 text-center text-gray-500 md:p-8">{t("jobOffers.board.noOffers")}</Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobOffers.map((job) => (
            <Card
              key={job.id}
              onClick={() => navigate(`/candidate/jobs/${job.id}`)}
              className="p-6 flex flex-col gap-4 group hover:border-[#ED1C24]/30 transition-all cursor-pointer"
            >
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row">
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded" style={{ fontSize: 11, fontWeight: 600 }}>
                  {localizeStatus(job.status)}
                </span>
                <span className="text-gray-500" style={{ fontSize: 12 }}>
                  {postedLabel(job.createdAt, t)}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-1">{job.title}</h3>
                <div className="flex flex-col items-start gap-2 text-gray-600 sm:flex-row sm:items-center sm:gap-4" style={{ fontSize: 13 }}>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {job.structuredJd?.workLocation || t("common.messages.notSpecified")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> {job.structuredJd?.employmentType || t("common.messages.notSpecified")}
                  </span>
                </div>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJobId(job.id);
                  setIsModalOpen(true);
                }}
                className="bg-[#ED1C24] hover:bg-[#c81820] text-white mt-auto w-full"
              >
                {t("common.actions.applyNow")}
              </Button>
            </Card>
          ))}
        </div>
      )}

      <JobOffersPaginationFooter
        page={page}
        size={size}
        totalElements={totalElements}
        totalPages={totalPages}
        onPageChange={setPage}
        onSizeChange={(nextSize) => {
          setSize(nextSize);
          setPage(0);
        }}
      />

      <ApplicationModal
        jobId={selectedJobId}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedJobId(null);
        }}
      />
    </div>
  );
}

export function MyApplications() {
  const { t } = useTranslation();
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<CandidateSubmissionDTO[]>([]);
  const [withdrawTarget, setWithdrawTarget] = useState<CandidateSubmissionDTO | null>(null);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [retryingEvaluationId, setRetryingEvaluationId] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await candidateApi.listSubmissions();
        if (!cancelled) setSubmissions(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : t("candidates.applications.errors.load"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  const refreshSubmissions = async () => {
    try {
      const refreshed = await candidateApi.listSubmissions();
      setSubmissions(refreshed);
    } catch (e) {
      console.error("Failed to refresh submissions", e);
    }
  };

  const processing = submissions.filter((s) => s.evaluation?.status !== "SCORED");
  const completed = submissions.filter((s) => s.evaluation?.status === "SCORED");

  const handleWithdraw = async (evaluationId: number) => {
    setIsWithdrawing(true);
    try {
      await api.withdrawSubmission(evaluationId);
      toast.success(t("candidates.applications.toasts.withdrawn"));
      setSubmissions((prev) => prev.filter((item) => item.evaluation?.id !== evaluationId));
      setSelectedApp((prev) => {
        const selectedSubmission = submissions.find((item) => item.cvId === prev);
        return selectedSubmission?.evaluation?.id === evaluationId ? null : prev;
      });
      setWithdrawTarget(null);
    } catch {
      toast.error(t("candidates.applications.toasts.withdrawFailed"));
    } finally {
      setIsWithdrawing(false);
    }
  };

  const handleRetry = async (evaluationId: number) => {
    setRetryingEvaluationId(evaluationId);
    try {
      await candidateApi.retryEvaluation(evaluationId);
      const refreshed = await candidateApi.listSubmissions();
      setSubmissions(refreshed);
      toast.success(t("candidates.applications.toasts.retryStarted"));
    } catch {
      toast.error(t("candidates.applications.toasts.retryFailed"));
    } finally {
      setRetryingEvaluationId(null);
    }
  };

  return (
    <div className="space-y-6 max-w-[1100px]">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{t("candidates.applications.title")}</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          {t("candidates.applications.subtitle")}
        </p>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      {loading ? (
        <Card className="p-4 text-center text-gray-500 md:p-8">{t("candidates.applications.loading")}</Card>
      ) : (
        <>
          {processing.length > 0 && (
            <div className="space-y-4">
              <h2 style={{ fontSize: 16, fontWeight: 600 }} className="text-gray-700">
                {t("candidates.applications.processing")}
              </h2>
              {processing.map((submission) => {
                const status = String(submission.evaluation?.status || submission.cvStatus);
                const evaluationId = submission.evaluation?.id;
                const canWithdraw = status === "WAITING" || status === "PROCESSING";
                const canRetry = status === "FAILED" && evaluationId != null;
                const isRetrying = retryingEvaluationId === evaluationId;

                return (
                  <Card key={submission.cvId} className="p-4 md:p-6">
                    <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{submission.jobOffer.title}</div>
                        <div className="text-gray-500" style={{ fontSize: 12 }}>
                          {t("candidates.applications.submittedOn", { date: formatDate(submission.uploadDate) })}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 ${statusBadge(status)}`} style={{ fontSize: 12, fontWeight: 600 }}>
                          <SseProgressBadge evaluationId={evaluationId} status={status} t={t} onComplete={refreshSubmissions} />
                          {t(`common.status.${status.toLowerCase()}`)}
                        </span>
                        {canRetry && (
                          <button
                            type="button"
                            onClick={() => {
                              if (evaluationId != null) {
                                void handleRetry(evaluationId);
                              }
                            }}
                            disabled={isRetrying}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            <RefreshCw className={`w-4 h-4 ${isRetrying ? "animate-spin" : ""}`} />
                            {t("candidates.applications.retryEvaluation")}
                          </button>
                        )}
                        {canWithdraw && (
                          <button
                            type="button"
                            onClick={() => setWithdrawTarget(submission)}
                            className="text-gray-400 hover:text-red-600 transition-colors p-2"
                            aria-label={t("candidates.applications.a11y.withdrawForTitle", { title: submission.jobOffer.title })}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="space-y-4">
            <h2 style={{ fontSize: 16, fontWeight: 600 }} className="text-gray-700">
              {t("candidates.applications.completedEvaluations")}
            </h2>

            {completed.length === 0 ? (
            <Card className="p-4 text-center text-gray-500 md:p-8">{t("candidates.applications.noCompleted")}</Card>
            ) : (
              completed.map((submission) => {
                const evaluation = submission.evaluation;
                const score = evaluation?.overallScore;
                const alignment = evaluation?.experienceAlignment?.matchPercentage ?? null;
                const scoreValue = score == null || Number.isNaN(score) ? null : Math.max(0, Math.min(score, 10));
                const alignmentValue = alignment == null || Number.isNaN(alignment) ? null : Math.max(0, Math.min(alignment, 100));

                return (
                  <Card key={submission.cvId} className={`p-4 transition-all border-l-4 md:p-6 ${selectedApp === submission.cvId ? "border-l-[#ED1C24] ring-1 ring-gray-200 shadow-sm" : "border-l-transparent"}`}>
                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                      {scoreValue == null ? (
                        <div className="w-[88px] h-[88px] rounded-full bg-gray-100 text-gray-500 flex items-center justify-center" style={{ fontSize: 12, fontWeight: 700 }}>
                          {t("common.messages.na")}
                        </div>
                      ) : (
                        <MatchRing score={scoreValue} size={88} />
                      )}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                          <div>
                            <div style={{ fontSize: 18, fontWeight: 600 }}>{submission.jobOffer.title}</div>
                            <div className="text-gray-500" style={{ fontSize: 12 }}>
                              {t("candidates.applications.scoreOnDate", {
                                date: formatDate(submission.uploadDate),
                                score: formatScoreOutOfTen(score),
                              })}
                            </div>
                          </div>
                          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
                            <div className="flex items-center gap-1.5">
                              <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md" style={{ fontSize: 12, fontWeight: 600 }}>
                                {t(`common.status.${String(evaluation?.status || "SCORED").toLowerCase()}`)}
                              </span>
                              <button
                                type="button"
                                onClick={() => setWithdrawTarget(submission)}
                                className="text-gray-400 hover:text-red-600 transition-colors p-2"
                                aria-label={t("candidates.applications.a11y.withdrawForTitle", { title: submission.jobOffer.title })}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedApp(selectedApp === submission.cvId ? null : submission.cvId)}
                              className="text-gray-500"
                            >
                              {selectedApp === submission.cvId ? t("common.actions.hideDetails") : t("common.actions.showDetails")}
                            </Button>
                          </div>
                        </div>

                        {selectedApp === submission.cvId && (
                          <div className="pt-4 mt-4 border-t border-gray-100 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm italic text-gray-700">
                              "{evaluation?.reasoning || evaluation?.recommendation || t("common.messages.noSummary")}"
                            </div>

                            {alignmentValue != null && (
                              <div>
                                <div className="flex justify-between mb-1.5" style={{ fontSize: 13 }}>
                                  <span className="text-gray-700 font-medium">{t("candidates.applications.experienceAlignment")}</span>
                                  <span style={{ fontWeight: 600 }}>{Math.round(alignmentValue)}%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div
                                    className={alignmentValue >= 80 ? "bg-green-500 h-full" : alignmentValue >= 50 ? "bg-amber-500 h-full" : "bg-red-500 h-full"}
                                    style={{ width: `${alignmentValue}%` }}
                                  />
                                </div>
                              </div>
                            )}

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div>
                                <div className="text-gray-700 mb-2 flex items-center gap-1.5" style={{ fontSize: 12, fontWeight: 700 }}>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> {t("candidates.applications.matchedSkills").toUpperCase()}
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {(evaluation?.matchedSkills || []).map((skill) => (
                                    <span key={skill} className="bg-green-50 text-green-700 px-2 py-0.5 rounded border border-green-100" style={{ fontSize: 11, fontWeight: 600 }}>
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-700 mb-2 flex items-center gap-1.5" style={{ fontSize: 12, fontWeight: 700 }}>
                                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> {t("candidates.applications.missingSkills").toUpperCase()}
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {(evaluation?.missingSkills || []).map((skill) => (
                                    <span key={`${submission.cvId}-${skill.skillName}`} className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100" style={{ fontSize: 11, fontWeight: 600 }}>
                                      {skill.skillName}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
          </div>
        </>
      )}

      <AlertDialog
        open={withdrawTarget !== null}
        onOpenChange={(open) => {
          if (!open && !isWithdrawing) {
            setWithdrawTarget(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("candidates.applications.withdrawDialogTitle")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("candidates.applications.withdrawDialogDescription")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setWithdrawTarget(null)} disabled={isWithdrawing}>
              {t("candidates.applications.keepApplication")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (withdrawTarget && withdrawTarget.evaluation?.id != null) {
                  void handleWithdraw(withdrawTarget.evaluation.id);
                } else {
                  toast.error(t("candidates.applications.toasts.withdrawFailed"));
                  setWithdrawTarget(null);
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white"
              disabled={isWithdrawing}
            >
              {isWithdrawing ? t("candidates.applications.withdrawing") : t("common.actions.withdraw")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
