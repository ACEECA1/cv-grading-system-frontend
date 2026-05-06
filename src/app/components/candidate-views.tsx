import { useEffect, useMemo, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { Search, MapPin, Briefcase, Upload, FileText, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { MatchRing } from "./match-ring";
import { candidateApi, formatDate, formatScoreOutOfTen, type CandidateSubmissionDTO, type JobOfferDTO, type PageResponse } from "../api";

function statusBadge(status: string) {
  if (status === "SCORED" || status === "EVALUATED") {
    return "bg-green-50 text-green-700";
  }
  if (status === "FAILED") {
    return "bg-red-50 text-red-700";
  }
  return "bg-amber-50 text-amber-700";
}

function postedLabel(dateIso: string): string {
  const date = new Date(dateIso);
  if (Number.isNaN(date.getTime())) return "Unknown";
  const diffHours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
  if (diffHours < 24) return `${Math.max(1, diffHours)}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateIso);
}

export function JobBoard() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [jobsPage, setJobsPage] = useState<PageResponse<JobOfferDTO> | null>(null);
  const [uploadFor, setUploadFor] = useState<JobOfferDTO | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await candidateApi.listJobOffers({
          page: page - 1,
          size: 6,
          location: location.trim() || undefined,
        });
        if (!cancelled) setJobsPage(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load job offers.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [page, location]);

  const visible = useMemo(() => {
    const content = jobsPage?.content ?? [];
    if (!search.trim()) return content;
    const lowered = search.toLowerCase();
    return content.filter((job) => job.title.toLowerCase().includes(lowered));
  }, [jobsPage, search]);

  const totalPages = Math.max(1, jobsPage?.totalPages ?? 1);

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>Job Board</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Browse open roles and submit your CV.
        </p>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search in current page..."
            className="pl-9 h-11"
          />
        </div>
        <div className="relative w-64">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setPage(1);
            }}
            placeholder="Filter by location"
            className="pl-9 h-11"
          />
        </div>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      {loading ? (
        <Card className="p-8 text-center text-gray-500">Loading job offers...</Card>
      ) : visible.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">No job offers found for this filter.</Card>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {visible.map((job) => (
            <Card key={job.id} className="p-6 flex flex-col gap-4 group hover:border-[#ED1C24]/30 transition-all">
              <div className="flex items-start justify-between">
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded" style={{ fontSize: 11, fontWeight: 600 }}>
                  {job.status}
                </span>
                <span className="text-gray-500" style={{ fontSize: 12 }}>
                  {postedLabel(job.createdAt)}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 600 }} className="mb-1">{job.title}</h3>
                <div className="flex items-center gap-4 text-gray-600" style={{ fontSize: 13 }}>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {job.structuredJd?.workLocation || "Not specified"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> {job.structuredJd?.employmentType || "Not specified"}
                  </span>
                </div>
              </div>

              <Button onClick={() => setUploadFor(job)} className="bg-[#ED1C24] hover:bg-[#c81820] text-white mt-auto w-full">
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      )}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />
          </PaginationItem>
          {Array.from({ length: totalPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <UploadModal job={uploadFor} onClose={() => setUploadFor(null)} />
    </div>
  );
}

function UploadModal({ job, onClose }: { job: JobOfferDTO | null; onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!job) {
      setFile(null);
      setDrag(false);
      setSubmitting(false);
      setError("");
      setSuccess("");
    }
  }, [job]);

  const submit = async () => {
    if (!job || !file) return;
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const response = await candidateApi.uploadCv(job.id, file);
      setSuccess(`Submitted. CV #${response.cvId}, evaluation #${response.evaluationId} is ${response.evaluationStatus}.`);
      setFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={!!job} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Apply for {job?.title}</DialogTitle>
        </DialogHeader>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            const f = e.dataTransfer.files?.[0];
            if (f) setFile(f);
          }}
          className={`rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
            drag ? "border-[#ED1C24] bg-red-50" : "border-gray-300 bg-gray-50"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-red-50 text-[#ED1C24] flex items-center justify-center mx-auto mb-4">
            <Upload className="w-6 h-6" />
          </div>
          <div style={{ fontSize: 16, fontWeight: 600 }} className="mb-1">
            Upload your CV (PDF only)
          </div>
          <div className="text-gray-600 mb-4" style={{ fontSize: 13 }}>
            Drag and drop your file here, or click to browse.
          </div>
          <label>
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              disabled={submitting}
            />
            <span className="inline-block bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg cursor-pointer" style={{ fontSize: 13, fontWeight: 600 }}>
              Browse Files
            </span>
          </label>
          {file && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2" style={{ fontSize: 13 }}>
              <FileText className="w-4 h-4 text-[#ED1C24]" /> {file.name}
            </div>
          )}
        </div>

        {error && <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">{error}</div>}
        {success && <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">{success}</div>}

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={submitting}>
            Close
          </Button>
          <Button disabled={!file || submitting} onClick={() => void submit()} className="bg-[#ED1C24] hover:bg-[#c81820] text-white disabled:opacity-50">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Application"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function MyApplications() {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<CandidateSubmissionDTO[]>([]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await candidateApi.listSubmissions();
        if (!cancelled) setSubmissions(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load submissions.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  const processing = submissions.filter((s) => s.evaluation?.status !== "SCORED");
  const completed = submissions.filter((s) => s.evaluation?.status === "SCORED");

  return (
    <div className="space-y-6 max-w-[1100px]">
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>My Applications</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Track your submissions and evaluation results.
        </p>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      {loading ? (
        <Card className="p-8 text-center text-gray-500">Loading submissions...</Card>
      ) : (
        <>
          {processing.length > 0 && (
            <div className="space-y-4">
              <h2 style={{ fontSize: 16, fontWeight: 600 }} className="text-gray-700">
                Processing
              </h2>
              {processing.map((submission) => (
                <Card key={submission.cvId} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 600 }}>{submission.jobOffer.title}</div>
                      <div className="text-gray-500" style={{ fontSize: 12 }}>
                        Submitted {formatDate(submission.uploadDate)}
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 ${statusBadge(submission.evaluation?.status || submission.cvStatus)}`} style={{ fontSize: 12, fontWeight: 600 }}>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> {submission.evaluation?.status || submission.cvStatus}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <h2 style={{ fontSize: 16, fontWeight: 600 }} className="text-gray-700">
              Completed Evaluations
            </h2>

            {completed.length === 0 ? (
              <Card className="p-8 text-center text-gray-500">No completed evaluations yet.</Card>
            ) : (
              completed.map((submission) => {
                const evaluation = submission.evaluation;
                const score = evaluation?.overallScore;
                const alignment = evaluation?.experienceAlignment?.matchPercentage ?? null;
                const scoreValue = score == null || Number.isNaN(score) ? null : Math.max(0, Math.min(score, 10));
                const alignmentValue = alignment == null || Number.isNaN(alignment) ? null : Math.max(0, Math.min(alignment, 100));

                return (
                  <Card key={submission.cvId} className={`p-6 transition-all border-l-4 ${selectedApp === submission.cvId ? "border-l-[#ED1C24] ring-1 ring-gray-200 shadow-sm" : "border-l-transparent"}`}>
                    <div className="flex gap-6">
                      {scoreValue == null ? (
                        <div className="w-[88px] h-[88px] rounded-full bg-gray-100 text-gray-500 flex items-center justify-center" style={{ fontSize: 12, fontWeight: 700 }}>
                          N/A
                        </div>
                      ) : (
                        <MatchRing score={scoreValue} size={88} />
                      )}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div style={{ fontSize: 18, fontWeight: 600 }}>{submission.jobOffer.title}</div>
                            <div className="text-gray-500" style={{ fontSize: 12 }}>
                              Submitted {formatDate(submission.uploadDate)} · Score {formatScoreOutOfTen(score)}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md" style={{ fontSize: 12, fontWeight: 600 }}>
                              {evaluation?.status || "SCORED"}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedApp(selectedApp === submission.cvId ? null : submission.cvId)}
                              className="text-gray-500"
                            >
                              {selectedApp === submission.cvId ? "Hide Details" : "Show Details"}
                            </Button>
                          </div>
                        </div>

                        {selectedApp === submission.cvId && (
                          <div className="pt-4 mt-4 border-t border-gray-100 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm italic text-gray-700">
                              "{evaluation?.reasoning || evaluation?.recommendation || "No detailed summary available."}"
                            </div>

                            {alignmentValue != null && (
                              <div>
                                <div className="flex justify-between mb-1.5" style={{ fontSize: 13 }}>
                                  <span className="text-gray-700 font-medium">Experience Alignment</span>
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

                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <div className="text-gray-700 mb-2 flex items-center gap-1.5" style={{ fontSize: 12, fontWeight: 700 }}>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> MATCHED SKILLS
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
                                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> MISSING SKILLS
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
    </div>
  );
}
