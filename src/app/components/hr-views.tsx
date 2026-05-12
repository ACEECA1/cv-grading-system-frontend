import { useEffect, useMemo, useState } from "react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Briefcase, ChevronLeft, ChevronRight, FileText, Loader2, MapPin, Search, Sparkles, Trash2, TrendingUp, Users } from "lucide-react";
import { MatchRing } from "./match-ring";
import { formatDate, formatScoreOutOfTen, hrApi, loadStoredAuth, type HrEvaluationSummaryDTO, type JobOfferDTO, type PageResponse } from "../api";
import { toast } from "sonner";

function statusClass(status: string): string {
  if (status === "SCORED" || status === "PUBLISHED") return "bg-green-50 text-green-700";
  if (status === "FAILED") return "bg-red-50 text-red-700";
  return "bg-amber-50 text-amber-700";
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
    location: value.structuredJd?.workLocation || "Not specified",
    createdAt: value.createdAt,
  };
}

function mapCandidate(value: HrEvaluationSummaryDTO): Candidate {
  return {
    evaluationId: value.evaluationId,
    status: value.status,
    overallScore: value.overallScore,
    candidateName: value.candidateFullName || "Unknown candidate",
    jobTitle: value.jobOfferTitle || "Unknown job",
    cvUploadDate: value.cvUploadDate,
    cvId: value.cvId,
  };
}

export function HRDashboard({ createJobPath }: { createJobPath: string }) {
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
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load dashboard.");
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
          <h1 className="text-2xl font-bold md:text-3xl">HR Dashboard</h1>
          <p className="text-gray-600" style={{ fontSize: 14 }}>
            Live recruitment stats from backend data.
          </p>
        </div>
        <Button onClick={() => navigate(createJobPath)} className="bg-[#ED1C24] hover:bg-[#c81820] text-white">
          + New Job Offer
        </Button>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MetricCard label="CVs Processed" value={String(totalCvsProcessed)} icon={<FileText className="w-4 h-4" />} />
        <MetricCard label="Average Match Score" value={formatScoreOutOfTen(averageScore)} icon={<TrendingUp className="w-4 h-4" />} />
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>Recent Job Offers</h3>
        </div>
        {loading ? (
          <div className="p-6 text-gray-500">Loading jobs...</div>
        ) : recentJobs.length === 0 ? (
          <div className="p-6 text-gray-500">No job offers found.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Created</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell style={{ fontWeight: 500 }}>{job.title}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded ${statusClass(job.status)}`} style={{ fontSize: 11, fontWeight: 600 }}>
                      {job.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600">{job.location}</TableCell>
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
      setError("Title and raw description are required.");
      return;
    }
    setLoading(true);
    try {
      const created = await hrApi.createJobOffer({
        title: title.trim(),
        rawText: rawText.trim(),
      });
      setSuccess(`Job offer #${created.id} created with status ${created.status}.`);
      setTitle("");
      setRawText("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create job offer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[900px] space-y-6">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Create Job Offer</h1>
          <p className="text-gray-600" style={{ fontSize: 14 }}>
            Submit a title and raw description. Backend will process and publish when parsing succeeds.
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(backTo)}>
          Cancel
        </Button>
      </div>
      <Card className="space-y-5 p-4 md:p-8">
        <div className="space-y-1.5">
          <Label>Job Title</Label>
          <Input placeholder="e.g. Senior Java Developer" value={title} onChange={(e) => setTitle(e.target.value)} disabled={loading} />
        </div>
        <div className="space-y-1.5">
          <Label>Raw Job Description</Label>
          <Textarea
            placeholder="Paste the hiring manager's unstructured text block here..."
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
            {loading ? "Submitting..." : "Create Job Offer"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

type JobStatusFilter = "all" | "published" | "draft";
type JobSortBy = "createdAt" | "title";
type JobSortDir = "asc" | "desc";
type VisiblePage = number | "...";

interface UseJobOfferManagementResult {
  page: number;
  size: number;
  isLoading: boolean;
  errorMessage: string;
  jobs: JobOffer[];
  totalElements: number;
  safeTotalPages: number;
  visiblePages: VisiblePage[];
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

function buildVisiblePages(page: number, totalPages: number): VisiblePage[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  const lastPage = totalPages - 1;
  if (page <= 2) {
    return [0, 1, 2, "...", lastPage];
  }

  if (page >= lastPage - 2) {
    return [0, "...", lastPage - 2, lastPage - 1, lastPage];
  }

  return [0, "...", page - 1, page, page + 1, "...", lastPage];
}

function useJobOfferManagement(): UseJobOfferManagementResult {
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
          setErrorMessage(err instanceof Error ? err.message : "Failed to load job offers.");
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
  const visiblePages = useMemo(() => buildVisiblePages(page, safeTotalPages), [page, safeTotalPages]);

  const handleDeleteConfirm = async () => {
    if (jobToDelete == null) return;
    const deletingJobId = jobToDelete;

    try {
      setIsDeleting(true);
      await hrApi.deleteJobOffer(deletingJobId);
      toast.success("Job offer deleted successfully");
      setJobOffers((prev) => prev.filter((job) => job.id !== deletingJobId));
      setTotalElements((prev) => Math.max(0, prev - 1));
      setJobToDelete(null);
    } catch {
      toast.error("Failed to delete job offer");
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
    visiblePages,
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
  return (
    <Card className="p-4 md:p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1.5">
          <Label htmlFor="search-title">Search Title</Label>
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
              placeholder="e.g. Backend Engineer"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="search-location">Search Location</Label>
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
              placeholder="e.g. Paris, Remote"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label>Status</Label>
          <Select value={statusInput} onValueChange={(value) => onStatusChange(value as JobStatusFilter)}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label>Sort By</Label>
          <div className="grid grid-cols-2 gap-2">
            <Select value={sortBy} onValueChange={(value) => onSortByChange(value as JobSortBy)}>
              <SelectTrigger>
                <SelectValue placeholder="Date Created" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="createdAt">Date Created</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortDir} onValueChange={(value) => onSortDirChange(value as JobSortDir)}>
              <SelectTrigger>
                <SelectValue placeholder="Desc" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Desc</SelectItem>
                <SelectItem value="asc">Asc</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onApply} disabled={isLoading}>
          Apply Filters
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
              {job.status}
            </span>
          </div>
          <h3 style={{ fontSize: 17, fontWeight: 600 }} className="mb-1">{job.title}</h3>
          <div className="text-gray-500 mb-4" style={{ fontSize: 12 }}>
            {job.location} · Created {formatDate(job.createdAt)}
          </div>
          <div className="flex flex-col items-start justify-between gap-2 border-t border-gray-100 pt-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 13 }}>
              <Users className="w-4 h-4 text-gray-500" />
              Click to see evaluations
            </div>
            {hasDeletePermission && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onRequestDelete(job.id);
                }}
                className="text-red-600 hover:bg-red-50 p-2 rounded-md transition-colors"
                aria-label="Delete job offer"
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

function JobOfferPaginationFooter({
  page,
  size,
  totalElements,
  safeTotalPages,
  visiblePages,
  onPageChange,
  onSizeChange,
}: {
  page: number;
  size: number;
  totalElements: number;
  safeTotalPages: number;
  visiblePages: VisiblePage[];
  onPageChange: (nextPage: number) => void;
  onSizeChange: (nextSize: number) => void;
}) {
  return (
    <div className="flex items-center justify-between w-full pt-4 border-t border-gray-200">
      <div className="flex items-center gap-2 text-gray-700" style={{ fontSize: 13 }}>
        <span>Rows per page:</span>
        <select
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span className="text-gray-500">{`${totalElements} total`}</span>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          disabled={page === 0}
          onClick={() => onPageChange(Math.max(0, page - 1))}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {visiblePages.map((pageItem, index) => {
          if (pageItem === "...") {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            );
          }

          const isActive = pageItem === page;
          return (
            <button
              key={pageItem}
              onClick={() => onPageChange(pageItem)}
              className={`h-9 min-w-9 rounded-md border px-3 text-sm font-medium transition ${
                isActive
                  ? "bg-[#ED1C24] text-white border-[#ED1C24]"
                  : "text-gray-700 hover:bg-gray-50 border-gray-300"
              }`}
            >
              {pageItem + 1}
            </button>
          );
        })}

        <Button
          variant="outline"
          size="icon"
          disabled={page >= safeTotalPages - 1}
          onClick={() => onPageChange(Math.min(safeTotalPages - 1, page + 1))}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
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
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Job Offer?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to permanently delete this job offer? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel} disabled={isDeleting}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={(event) => {
              event.preventDefault();
              onConfirm();
            }}
            className="bg-red-600 hover:bg-red-700 text-white"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Confirm Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function JobOffersList({ onSelectJobPath }: { onSelectJobPath: (job: JobOffer) => string }) {
  const navigate = useNavigate();
  const {
    page,
    size,
    isLoading,
    errorMessage,
    jobs,
    totalElements,
    safeTotalPages,
    visiblePages,
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
  } = useJobOfferManagement();

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Available Job Offers</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Select a job offer to inspect submitted evaluations.
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
        <Card className="p-4 text-center text-gray-500 md:p-8">Loading job offers...</Card>
      ) : jobs.length ? (
        <JobOfferGrid
          jobs={jobs}
          hasDeletePermission={hasDeletePermission}
          onSelect={(job) => navigate(onSelectJobPath(job))}
          onRequestDelete={setJobToDelete}
        />
      ) : (
        <Card className="p-4 text-center text-gray-500 md:p-8">No job offers found.</Card>
      )}

      <JobOfferPaginationFooter
        page={page}
        size={size}
        totalElements={totalElements}
        safeTotalPages={safeTotalPages}
        visiblePages={visiblePages}
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
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [minScore, setMinScore] = useState("");
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
        });
        if (!cancelled) setEvaluations(data);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load evaluations.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [jobId, minScore, page]);

  const rows = useMemo(() => (evaluations?.content ?? []).map(mapCandidate), [evaluations]);
  const totalPages = Math.max(1, evaluations?.totalPages ?? 1);
  const title = jobId ? `Job #${jobId} · Evaluations` : "Candidate Pipeline";

  return (
    <div className="space-y-6 max-w-[1200px]">
      {backTo && (
        <button onClick={() => navigate(backTo)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors" style={{ fontSize: 13 }}>
          <ArrowLeft className="w-4 h-4" /> Back to job offers
        </button>
      )}
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Backend evaluations list. Scores are displayed as /10.
        </p>
      </div>

      <div className="w-full md:max-w-[220px]">
        <Label>Minimum score (/10)</Label>
        <Input value={minScore} onChange={(e) => setMinScore(e.target.value)} placeholder="e.g. 7.5" />
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      <Card className="overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading evaluations...</div>
        ) : rows.length === 0 ? (
          <div className="p-6 text-gray-500">No evaluations found.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Job</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((candidate) => (
                <TableRow key={candidate.evaluationId}>
                  <TableCell style={{ fontWeight: 500 }}>{candidate.candidateName}</TableCell>
                  <TableCell className="text-gray-600">{candidate.jobTitle}</TableCell>
                  <TableCell className="text-gray-600">{formatDate(candidate.cvUploadDate)}</TableCell>
                  <TableCell>
                    {candidate.overallScore == null ? (
                      <span className="text-gray-500 text-sm">N/A</span>
                    ) : (
                      <MatchRing score={candidate.overallScore} size={48} />
                    )}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-0.5 rounded ${statusClass(candidate.status)}`} style={{ fontSize: 11, fontWeight: 600 }}>
                      {candidate.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={() => navigate(`${evaluationRoutePrefix}/${candidate.evaluationId}`)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outline" disabled={page <= 1} onClick={() => setPage((v) => Math.max(1, v - 1))}>
          Previous
        </Button>
        <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage((v) => Math.min(totalPages, v + 1))}>
          Next
        </Button>
      </div>
    </div>
  );
}
