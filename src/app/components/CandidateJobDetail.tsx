import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ApplicationModal } from "./ApplicationModal";
import { candidateApi, type JobOfferDetailDTO } from "../api";

function experienceLabel(job: JobOfferDetailDTO | null): string {
  const min = job?.structuredJd?.experienceRange?.minYears;
  const max = job?.structuredJd?.experienceRange?.maxYears;
  if (!min && !max) return "Experience not specified";
  if (min && max) return `${min} - ${max} years`;
  if (min) return `${min}+ years`;
  return `Up to ${max} years`;
}

export function CandidateJobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();

  const [job, setJob] = useState<JobOfferDetailDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setError("Job ID is missing.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await candidateApi.getCandidateJobOffer(jobId);
        if (!cancelled) setJob(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load job details.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void run();
    return () => {
      cancelled = true;
    };
  }, [jobId]);

  const description = useMemo(() => {
    const explicitDescription = job?.structuredJd?.description?.trim();
    if (explicitDescription) return explicitDescription;
    const rows = job?.structuredJd?.responsibilities ?? [];
    if (rows.length === 0) return "No detailed description available for this role yet.";
    return rows.join("\n");
  }, [job?.structuredJd?.description, job?.structuredJd?.responsibilities]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-full p-4 md:p-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-center shadow-sm md:p-10">
          <Loader2 className="w-6 h-6 animate-spin text-gray-500" />
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="bg-gray-50 min-h-full p-4 md:p-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-lg border border-red-200 p-6 text-red-700 shadow-sm">
          {error || "Job not found."}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-full p-4 md:p-6">
      <div className="max-w-[1100px] mx-auto space-y-6">
        <button type="button" onClick={() => navigate("/candidate/jobs")} className="text-sm text-gray-600 hover:text-gray-900">
          ← Back to Job Board
        </button>

        <Card className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{job.title}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {job.structuredJd?.workLocation || "Location not specified"}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {job.structuredJd?.employmentType || "Employment type not specified"}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {experienceLabel(job)}
                </span>
              </div>
            </div>

            <Button onClick={() => setIsModalOpen(true)} className="bg-[#ED1C24] hover:bg-[#c81820] text-white">
              Apply Now
            </Button>
          </div>
        </Card>

        {error && (
          <Card className="bg-white rounded-lg border border-red-200 shadow-sm p-4 text-red-700 text-sm">
            {error}
          </Card>
        )}

        <Card className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 text-sm leading-7 whitespace-pre-line">{description}</p>
        </Card>
      </div>

      <ApplicationModal jobId={jobId ?? null} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
