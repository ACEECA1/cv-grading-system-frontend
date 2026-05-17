import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { JobOffersPaginationFooter } from "./JobOffersPaginationFooter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Briefcase, FileText, Loader2, MapPin, Search, Sparkles, Trash2, TrendingUp, Users } from "lucide-react";
import { MatchRing } from "./match-ring";
import { formatDate, formatScoreOutOfTen, hrApi, loadStoredAuth, type HrEvaluationSummaryDTO, type JobOfferDTO, type PageResponse } from "../api";
import { toast } from "sonner";

function statusClass(status: string): string {
  if (status === "SCORED" || status === "PUBLISHED") return "bg-green-50 text-green-700";
  if (status === "FAILED") return "bg-red-50 text-red-700";
  return "bg-amber-50 text-amber-700";
}

function localizeStatus(status: string, t: (key: string) => string): string {
  const key = `common.status.${status.toLowerCase()}`;
  const translated = t(key);
  return translated === key ? status : translated;
}

function MetricCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="p-4 md:p-6">
      <div className="mb-3 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
        <span className="text-gray-600" style={{ fontSize: 13 }}>
          {label}
        </span>
        <div className="w-9 h-9 rounded-lg bg-red-50 text-[#ED1C24] flex items-center justify-center">{icon}</div>
      </div>
      <div className="text-2xl font-bold md:text-3xl">{value}</div>
    </Card>
  );
}

export interface JobOffer {
  id: number;
  title: string;
  status: JobOfferDTO["status"];
  location: string;
  createdAt: string;
}

export interface Candidate {
  evaluationId: number;
  status: HrEvaluationSummaryDTO["status"];
  overallScore: number | null;
  candidateName: string;
  jobTitle: string;
  cvUploadDate: string | null;
  cvId: number | null;
}

function mapJobOffer(value: JobOfferDTO): JobOffer {
  return {
    id: value.id,
    title: value.title,
    status: value.status,
    location: value.structuredJd?.workLocation || "",
    createdAt: value.createdAt,
  };
}

function mapCandidate(value: HrEvaluationSummaryDTO): Candidate {
  return {
    evaluationId: value.evaluationId,
    status: value.status,
    overallScore: value.overallScore,
    candidateName: value.candidateFullName || "",
    jobTitle: value.jobOfferTitle || "",
    cvUploadDate: value.cvUploadDate,
    cvId: value.cvId,
  };
}

export function HRDashboard({ createJobPath }: { createJobPath: string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalCvsProcessed, setTotalCvsProcessed] = useState(0);
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [recentJobs, setRecentJobs] = useState<JobOffer[]>([]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const [stats, offers] = await Promise.all([
          hrApi.dashboardStats(),
          hrApi.listJobOffers({ page: 0, size: 5 }),
        ]);
        if (cancelled) return;
        setTotalCvsProcessed(stats.totalCvsProcessed);
        setAverageScore(stats.averageMatchScore);
        setRecentJobs(offers.content.map(mapJobOffer));
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : t("dashboard.hr.errors.load"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">{t("dashboard.hr.title")}</h1>
          <p className="text-gray-600" style={{ fontSize: 14 }}>
            {t("dashboard.hr.subtitle")}
          </p>
        </div>
        <Button onClick={() => navigate(createJobPath)} className="bg-[#ED1C24] hover:bg-[#c81820] text-white">
          {t("dashboard.hr.newJobOffer")}
        </Button>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MetricCard label={t("dashboard.hr.ctsProcessed")} value={String(totalCvsProcessed)} icon={<FileText className="w-4 h-4" />} />
        <MetricCard label={t("dashboard.hr.averageMatchScore")} value={formatScoreOutOfTen(averageScore)} icon={<TrendingUp className="w-4 h-4" />} />
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>{t("dashboard.hr.recentJobOffers")}</h3>
        </div>
        {loading ? (
          <div className="p-6 text-gray-500">{t("dashboard.hr.loadingJobs")}</div>
        ) : recentJobs.length === 0 ? (
          <div className="p-6 text-gray-500">{t("dashboard.hr.noJobs")}</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("common.labels.title")}</TableHead>
                <TableHead>{t("common.labels.status")}</TableHead>
                <TableHead>{t("common.labels.location")}</TableHead>
                <TableHead>{t("common.labels.created")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell style={{ fontWeight: 500 }}>{job.title}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded ${statusClass(job.status)}`} style={{ fontSize: 11, fontWeight: 600 }}>
                      {localizeStatus(job.status, t)}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600">{job.location || t("common.messages.notSpecified")}</TableCell>
                  <TableCell className="text-gray-500">{formatDate(job.createdAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}

export function JobOfferCreate({ backTo }: { backTo: string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [rawText, setRawText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const publish = async () => {
    setError("");
    setSuccess("");
    if (!title.trim() || !rawText.trim()) {
      setError(t("jobOffers.create.errors.required"));
      return;
    }
    setLoading(true);
    try {
      const created = await hrApi.createJobOffer({
        title: title.trim(),
        rawText: rawText.trim(),
      });
      setSuccess(t("jobOffers.create.success", { id: created.id, status: localizeStatus(created.status, t) }));
      setTitle("");
      setRawText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : t("jobOffers.create.errors.create"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] space-y-6">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">{t("jobOffers.create.title")}</h1>
          <p className="text-gray-600" style={{ fontSize: 14 }}>
            {t("jobOffers.create.subtitle")}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(backTo)}>
          {t("jobOffers.create.cancel")}
        </Button>
      </div>
      <Card className="space-y-5 p-4 md:p-8">
        <div className="space-y-1.5">
          <Label>{t("jobOffers.create.jobTitle")}</Label>
          <Input placeholder={t("jobOffers.create.titlePlaceholder")} value={title} onChange={(e) => setTitle(e.target.value)} disabled={loading} />
        </div>
        <div className="space-y-1.5">
          <Label>{t("jobOffers.create.rawDescription")}</Label>
          <Textarea
            placeholder={t("jobOffers.create.descriptionPlaceholder")}
            className="min-h-[220px]"
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            disabled={loading}
          />
        </div>
        {error && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">{error}</div>}
        {success && <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">{success}</div>}
        <div className="flex justify-stretch md:justify-end">
          <Button onClick={() => void publish()} disabled={loading} className="bg-[#ED1C24] hover:bg-[#c81820] text-white gap-2">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {loading ? t("jobOffers.create.submitting") : t("jobOffers.create.createBtn")}
          </Button>
        </div>
      </Card>
    </div>
  );
}

type JobStatusFilter = "all" | "published" | "draft";
type JobSortBy = "createdAt" | "title";
type JobSortDir = "asc" | "desc";

interface UseJobOfferManagementResult {
  page: number;
  size: number;
  isLoading: boolean;
  errorMessage: string;
  jobs: JobOffer[];
  totalElements: number;
  safeTotalPages: number;
  titleInput: string;
  locationInput: string;
  statusInput: JobStatusFilter;
  sortBy: JobSortBy;
  sortDir: JobSortDir;
  hasDeletePermission: boolean;
  jobToDelete: number | null;
  isDeleting: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  setTitleInput: React.Dispatch<React.SetStateAction<string>>;
  setLocationInput: React.Dispatch<React.SetStateAction<string>>;
  setStatusInput: React.Dispatch<React.SetStateAction<JobStatusFilter>>;
  setSortBy: React.Dispatch<React.SetStateAction<JobSortBy>>;
  setSortDir: React.Dispatch<React.SetStateAction<JobSortDir>>;
  setJobToDelete: React.Dispatch<React.SetStateAction<number | null>>;
  handleApplyFilters: () => void;
  handleDeleteConfirm: () => Promise<void>;
}

function useJobOfferManagement(t: (key: string, options?: Record<string, unknown>) => string): UseJobOfferManagementResult {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [jobOffers, setJobOffers] = useState<JobOfferDTO[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [statusInput, setStatusInput] = useState<JobStatusFilter>("all");

  const [appliedTitle, setAppliedTitle] = useState("");
  const [appliedLocation, setAppliedLocation] = useState("");
  const [appliedStatus, setAppliedStatus] = useState<JobStatusFilter>("all");

  const [sortBy, setSortBy] = useState<JobSortBy>("createdAt");
  const [sortDir, setSortDir] = useState<JobSortDir>("desc");

  const hasDeletePermission = useMemo(() => loadStoredAuth()?.user.role === "ADMIN", []);

  const handleApplyFilters = () => {
    setAppliedTitle(titleInput.trim());
    setAppliedLocation(locationInput.trim());
    setAppliedStatus(statusInput);
    setPage(0);
  };

  useEffect(() => {
    let isCancelled = false;

    const fetchJobOffers = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const isPublished = appliedStatus === "all" ? undefined : appliedStatus === "published";
        const data = await hrApi.listJobOffers({
          page,
          size,
          title: appliedTitle || undefined,
          location: appliedLocation || undefined,
          isPublished,
          sortBy,
          sortDir,
        });

        if (!isCancelled) {
          setJobOffers(data?.content || []);
          setTotalPages(data?.page?.totalPages ?? 1);
          setTotalElements(data?.page?.totalElements ?? 0);
        }
      } catch (err) {
        if (!isCancelled) {
          setErrorMessage(err instanceof Error ? err.message : t("jobOffers.list.errors.load"));
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    void fetchJobOffers();
    return () => {
      isCancelled = true;
    };
  }, [appliedLocation, appliedStatus, appliedTitle, page, size, sortBy, sortDir]);

  const safeTotalPages = Math.max(1, totalPages);
  const jobs = useMemo(() => jobOffers.map(mapJobOffer), [jobOffers]);

  const handleDeleteConfirm = async () => {
    if (jobToDelete == null) return;
    const deletingJobId = jobToDelete;

    try {
      setIsDeleting(true);
      await hrApi.deleteJobOffer(deletingJobId);
      toast.success(t("jobOffers.list.toasts.deleteSuccess"));
      setJobOffers((prev) => prev.filter((job) => job.id !== deletingJobId));
      setTotalElements((prev) => Math.max(0, prev - 1));
      setJobToDelete(null);
    } catch {
      toast.error(t("jobOffers.list.toasts.deleteFailed"));
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    page,
    size,
    isLoading,
    errorMessage,
    jobs,
    totalElements,
    safeTotalPages,
    titleInput,
    locationInput,
    statusInput,
    sortBy,
    sortDir,
    hasDeletePermission,
    jobToDelete,
    isDeleting,
    setPage,
    setSize,
    setTitleInput,
    setLocationInput,
    setStatusInput,
    setSortBy,
    setSortDir,
    setJobToDelete,
    handleApplyFilters,
    handleDeleteConfirm,
  };
}

function JobOfferFiltersCard({
  titleInput,
  locationInput,
  statusInput,
  sortBy,
  sortDir,
  isLoading,
  onTitleChange,
  onLocationChange,
  onStatusChange,
  onSortByChange,
  onSortDirChange,
  onApply,
}: {
  titleInput: string;
  locationInput: string;
  statusInput: JobStatusFilter;
  sortBy: JobSortBy;
  sortDir: JobSortDir;
  isLoading: boolean;
  onTitleChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onStatusChange: (value: JobStatusFilter) => void;
  onSortByChange: (value: JobSortBy) => void;
  onSortDirChange: (value: JobSortDir) => void;
  onApply: () => void;
}) {
  const { t } = useTranslation();
  return (
    <Card className="p-4 md:p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1.5">
          <Label htmlFor="search-title">{t("jobOffers.list.filters.searchTitle")}</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="search-title"
              className="pl-9"
              value={titleInput}
              onChange={(e) => onTitleChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onApply();
              }}
              placeholder={t("jobOffers.list.filters.titlePlaceholder")}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="search-location">{t("jobOffers.list.filters.searchLocation")}</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="search-location"
              className="pl-9"
              value={locationInput}
              onChange={(e) => onLocationChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onApply();
              }}
              placeholder={t("jobOffers.list.filters.locationPlaceholder")}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>{t("jobOffers.list.filters.status")}</Label>
          <Select value={statusInput} onValueChange={(value) => onStatusChange(value as JobStatusFilter)}>
            <SelectTrigger>
              <SelectValue placeholder={t("jobOffers.list.filters.all")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("jobOffers.list.filters.all")}</SelectItem>
              <SelectItem value="published">{t("jobOffers.list.filters.published")}</SelectItem>
              <SelectItem value="draft">{t("jobOffers.list.filters.draft")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>{t("jobOffers.list.filters.sortBy")}</Label>
          <div className="grid grid-cols-2 gap-2">
            <Select value={sortBy} onValueChange={(value) => onSortByChange(value as JobSortBy)}>
              <SelectTrigger>
                <SelectValue placeholder={t("jobOffers.list.filters.dateCreated")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="createdAt">{t("jobOffers.list.filters.dateCreated")}</SelectItem>
                <SelectItem value="title">{t("common.labels.title")}</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortDir} onValueChange={(value) => onSortDirChange(value as JobSortDir)}>
              <SelectTrigger>
                <SelectValue placeholder={t("jobOffers.list.filters.desc")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">{t("jobOffers.list.filters.desc")}</SelectItem>
                <SelectItem value="asc">{t("jobOffers.list.filters.asc")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onApply} disabled={isLoading}>
          {t("jobOffers.list.filters.apply")}
        </Button>
      </div>
    </Card>
  );
}

function JobOfferGrid({
  jobs,
  hasDeletePermission,
  onSelect,
  onRequestDelete,
}: {
  jobs: JobOffer[];
  hasDeletePermission: boolean;
  onSelect: (job: JobOffer) => void;
  onRequestDelete: (jobId: number) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {jobs.map((job) => (
        <Card
          key={job.id}
          onClick={() => onSelect(job)}
          className="cursor-pointer p-4 transition-all hover:border-[#ED1C24] hover:shadow-md md:p-6"
        >
          <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row">
            <div className="w-11 h-11 rounded-lg bg-red-50 text-[#ED1C24] flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className={`px-2 py-0.5 rounded ${statusClass(job.status)}`} style={{ fontSize: 11, fontWeight: 700 }}>
              {localizeStatus(job.status, t)}
            </span>
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 600 }} className="mb-1">{job.title}</h3>
          <div className="text-gray-500 mb-4" style={{ fontSize: 12 }}>
            {(job.location || t("common.messages.notSpecified"))} · {t("jobOffers.list.createdOn", { date: formatDate(job.createdAt) })}
          </div>
          <div className="flex flex-col items-start justify-between gap-2 border-t border-gray-100 pt-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 13 }}>
              <Users className="w-4 h-4 text-gray-500" />
              {t("jobOffers.list.clickToSeeEvaluations")}
            </div>
            {hasDeletePermission && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onRequestDelete(job.id);
                }}
                className="text-red-600 hover:bg-red-50 p-2 rounded-md transition-colors"
                aria-label={t("jobOffers.list.a11y.deleteJobOffer")}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

function JobOfferDeleteDialog({
  open,
  isDeleting,
  onOpenChange,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  isDeleting: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const { t } = useTranslation();
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("jobOffers.list.deleteDialog.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("jobOffers.list.deleteDialog.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel} disabled={isDeleting}>
            {t("common.actions.cancel")}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(event) => {
              event.preventDefault();
              onConfirm();
            }}
            className="bg-red-600 hover:bg-red-700 text-white"
            disabled={isDeleting}
          >
            {isDeleting ? t("jobOffers.list.deleteDialog.deleting") : t("jobOffers.list.deleteDialog.confirmDelete")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function JobOffersList({ onSelectJobPath }: { onSelectJobPath: (job: JobOffer) => string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    page,
    size,
    isLoading,
    errorMessage,
    jobs,
    totalElements,
    safeTotalPages,
    titleInput,
    locationInput,
    statusInput,
    sortBy,
    sortDir,
    hasDeletePermission,
    jobToDelete,
    isDeleting,
    setPage,
    setSize,
    setTitleInput,
    setLocationInput,
    setStatusInput,
    setSortBy,
    setSortDir,
    setJobToDelete,
    handleApplyFilters,
    handleDeleteConfirm,
  } = useJobOfferManagement(t);

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{t("jobOffers.list.title")}</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          {t("jobOffers.list.subtitle")}
        </p>
      </div>

      {errorMessage && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {errorMessage}
        </Card>
      )}

      <JobOfferFiltersCard
        titleInput={titleInput}
        locationInput={locationInput}
        statusInput={statusInput}
        sortBy={sortBy}
        sortDir={sortDir}
        isLoading={isLoading}
        onTitleChange={setTitleInput}
        onLocationChange={setLocationInput}
        onStatusChange={setStatusInput}
        onSortByChange={(value) => {
          setSortBy(value);
          setPage(0);
        }}
        onSortDirChange={(value) => {
          setSortDir(value);
          setPage(0);
        }}
        onApply={handleApplyFilters}
      />

      {isLoading ? (
        <Card className="p-4 text-center text-gray-500 md:p-8">{t("jobOffers.list.loading")}</Card>
      ) : jobs.length ? (
        <JobOfferGrid
          jobs={jobs}
          hasDeletePermission={hasDeletePermission}
          onSelect={(job) => navigate(onSelectJobPath(job))}
          onRequestDelete={setJobToDelete}
        />
      ) : (
        <Card className="p-4 text-center text-gray-500 md:p-8">{t("jobOffers.list.noOffers")}</Card>
      )}

      <JobOffersPaginationFooter
        page={page}
        size={size}
        totalElements={totalElements}
        totalPages={safeTotalPages}
        onPageChange={setPage}
        onSizeChange={(nextSize) => {
          setSize(nextSize);
          setPage(0);
        }}
      />

      <JobOfferDeleteDialog
        open={jobToDelete !== null}
        isDeleting={isDeleting}
        onOpenChange={(open) => {
          if (!open && !isDeleting) {
            setJobToDelete(null);
          }
        }}
        onCancel={() => setJobToDelete(null)}
        onConfirm={() => {
          void handleDeleteConfirm();
        }}
      />
    </div>
  );
}

export function CandidatePipeline({
  jobId,
  evaluationRoutePrefix,
  backTo,
}: {
  jobId?: number;
  evaluationRoutePrefix: string;
  backTo?: string;
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [minScore, setMinScore] = useState("");
  const [sortBy, setSortBy] = useState<"score" | "date">("score");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [evaluations, setEvaluations] = useState<PageResponse<HrEvaluationSummaryDTO> | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const minScoreNumber = minScore.trim() ? Number(minScore) : undefined;
        const data = await hrApi.listEvaluations({
          page: page - 1,
          size: 10,
          jobId,
          minScore: Number.isFinite(minScoreNumber) ? minScoreNumber : undefined,
          sortBy,
          direction: sortDirection,
        });
        if (!cancelled) setEvaluations(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : t("jobOffers.pipeline.errors.load"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [jobId, minScore, page, sortBy, sortDirection]);

  const rows = useMemo(() => (evaluations?.content ?? []).map(mapCandidate), [evaluations]);
  const totalPages = Math.max(1, evaluations?.totalPages ?? 1);
  const totalCandidates = evaluations?.totalElements ?? rows.length;
  const sortOption = `${sortBy}-${sortDirection}`;
  const isInitialLoading = loading && evaluations === null;
  const showLoadingOverlay = loading && evaluations !== null;
  const title = jobId ? t("jobOffers.pipeline.titleWithId", { id: jobId }) : t("jobOffers.pipeline.title");

  return (
    <div className="space-y-6 max-w-[1200px]">
      {backTo && (
        <button onClick={() => navigate(backTo)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors" style={{ fontSize: 13 }}>
          <ArrowLeft className="w-4 h-4" /> {t("jobOffers.pipeline.backToJobOffers")}
        </button>
      )}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          {t("jobOffers.pipeline.subtitle")}
        </p>
      </div>

      <div className="w-full md:max-w-[220px]">
        <Label>{t("common.labels.minimumScore")}</Label>
        <Input value={minScore} onChange={(e) => setMinScore(e.target.value)} placeholder="e.g. 7.5" />
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg mb-4">
        <p className="text-sm font-medium text-gray-700">
          {t("jobOffers.pipeline.candidatesApplied", { count: totalCandidates })}
        </p>
        <div className="w-full max-w-[280px]">
          <Select
            value={sortOption}
            onValueChange={(value) => {
              if (value === "score-desc") {
                setSortBy("score");
                setSortDirection("desc");
                return;
              }
              if (value === "score-asc") {
                setSortBy("score");
                setSortDirection("asc");
                return;
              }
              if (value === "date-desc") {
                setSortBy("date");
                setSortDirection("desc");
                return;
              }
              setSortBy("date");
              setSortDirection("asc");
            }}
          >
            <SelectTrigger className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score-desc">{t("jobOffers.pipeline.sort.scoreDesc")}</SelectItem>
              <SelectItem value="score-asc">{t("jobOffers.pipeline.sort.scoreAsc")}</SelectItem>
              <SelectItem value="date-desc">{t("jobOffers.pipeline.sort.dateDesc")}</SelectItem>
              <SelectItem value="date-asc">{t("jobOffers.pipeline.sort.dateAsc")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="overflow-hidden relative">
        {isInitialLoading ? (
          <div className="p-6 text-gray-500">{t("jobOffers.pipeline.loading")}</div>
        ) : rows.length === 0 ? (
          <div className="p-6 text-gray-500">{t("jobOffers.pipeline.noEvaluations")}</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("jobOffers.pipeline.table.candidate")}</TableHead>
                <TableHead>{t("jobOffers.pipeline.table.job")}</TableHead>
                <TableHead>{t("jobOffers.pipeline.table.uploaded")}</TableHead>
                <TableHead>{t("jobOffers.pipeline.table.score")}</TableHead>
                <TableHead>{t("jobOffers.pipeline.table.status")}</TableHead>
                <TableHead className="text-right">{t("jobOffers.pipeline.table.action")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((candidate) => (
                <TableRow key={candidate.evaluationId}>
                  <TableCell style={{ fontWeight: 500 }}>{candidate.candidateName || t("common.messages.unknown")}</TableCell>
                  <TableCell className="text-gray-600">{candidate.jobTitle || t("common.messages.unknown")}</TableCell>
                  <TableCell className="text-gray-600">{formatDate(candidate.cvUploadDate)}</TableCell>
                  <TableCell>
                    {candidate.overallScore == null ? (
                      <span className="text-gray-500 text-sm">{t("jobOffers.pipeline.noScore")}</span>
                    ) : (
                      <MatchRing score={candidate.overallScore} size={48} />
                    )}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded ${statusClass(candidate.status)}`} style={{ fontSize: 11, fontWeight: 600 }}>
                      {localizeStatus(candidate.status, t)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => navigate(`${evaluationRoutePrefix}/${candidate.evaluationId}`)}>
                      {t("jobOffers.pipeline.view")}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {showLoadingOverlay && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
          </div>
        )}
      </Card>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" disabled={page <= 1} onClick={() => setPage((v) => Math.max(1, v - 1))}>
          {t("common.actions.previous")}
        </Button>
        <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage((v) => Math.min(totalPages, v + 1))}>
          {t("common.actions.next")}
        </Button>
      </div>
    </div>
  );
}
