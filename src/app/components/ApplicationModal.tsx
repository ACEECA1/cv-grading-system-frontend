import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { candidateApi } from "../api";

type ApplyModalState = "upload" | "processing" | "success";

interface ApplicationModalProps {
  jobId: number | string | null;
  isOpen: boolean;
  onClose: () => void;
}

function normalizeFile(file: File | null): File | null {
  if (!file) return null;
  const name = file.name.toLowerCase();
  if (file.type === "application/pdf" || name.endsWith(".pdf")) {
    return file;
  }
  return null;
}

export function ApplicationModal({ jobId, isOpen, onClose }: ApplicationModalProps) {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<ApplyModalState>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [applicationError, setApplicationError] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setModalState("upload");
      setFile(null);
      setDragActive(false);
      setApplicationError("");
      setActiveStep(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || modalState !== "processing") return;
    const intervalId = window.setInterval(() => {
      setActiveStep((prev) => (prev < 2 ? prev + 1 : prev));
    }, 1100);
    return () => window.clearInterval(intervalId);
  }, [isOpen, modalState]);

  const submitApplication = async () => {
    if (!jobId) return;
    const validFile = normalizeFile(file);
    if (!validFile) {
      setApplicationError("Please upload a valid PDF file.");
      return;
    }

    setApplicationError("");
    setModalState("processing");
    setActiveStep(0);
    try {
      await candidateApi.applyForJob(String(jobId), validFile);
      setModalState("success");
    } catch (err) {
      setModalState("upload");
      setApplicationError(err instanceof Error ? err.message : "Application failed.");
    }
  };

  if (!isOpen) return null;

  const steps = ["Uploading Document", "Extracting text", "Evaluating skills"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div
        className="relative w-full max-w-[560px] bg-white rounded-lg border border-gray-200 shadow-xl p-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute right-3 top-3 text-gray-500 hover:text-gray-800">
          <X className="w-4 h-4" />
        </button>

        {modalState === "upload" && (
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900">Apply for this job</h3>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragActive(false);
                const dropped = normalizeFile(e.dataTransfer.files?.[0] ?? null);
                setFile(dropped);
                if (!dropped) {
                  setApplicationError("Only PDF files are allowed.");
                } else {
                  setApplicationError("");
                }
              }}
              className={`rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
                dragActive ? "border-[#ED1C24] bg-red-50" : "border-gray-300 bg-gray-50"
              }`}
            >
              <p className="text-base font-semibold text-gray-900 mb-2">Upload your CV (PDF only)</p>
              <p className="text-sm text-gray-600 mb-4">Drag and drop your file here, or browse from your device.</p>
              <label className="inline-block bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium">
                Browse Files
                <input
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    const selected = normalizeFile(e.target.files?.[0] ?? null);
                    setFile(selected);
                    if (!selected) {
                      setApplicationError("Only PDF files are allowed.");
                    } else {
                      setApplicationError("");
                    }
                  }}
                />
              </label>
              {file && (
                <p className="mt-3 text-sm text-gray-700">
                  Selected: <span className="font-medium">{file.name}</span>
                </p>
              )}
            </div>

            {applicationError && (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-3">
                {applicationError}
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => void submitApplication()} className="bg-[#ED1C24] hover:bg-[#c81820] text-white">
                Submit Application
              </Button>
            </div>
          </div>
        )}

        {modalState === "processing" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Analyzing CV with AI...</h3>
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isDone = index < activeStep;
                const isActive = index === activeStep;
                return (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-semibold ${
                        isDone
                          ? "bg-green-50 border-green-200 text-green-700"
                          : isActive
                            ? "bg-amber-50 border-amber-200 text-amber-700"
                            : "bg-gray-100 border-gray-200 text-gray-500"
                      }`}
                    >
                      {isDone ? "✓" : index + 1}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span>{step}</span>
                      {isActive && <Loader2 className="w-4 h-4 animate-spin text-gray-500" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {modalState === "success" && (
          <div className="space-y-5 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Application Submitted Successfully!</h3>
              <p className="text-sm text-gray-600 mt-1">Your CV was uploaded and sent for AI evaluation.</p>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => navigate("/candidate/applications")}
                className="bg-[#ED1C24] hover:bg-[#c81820] text-white"
              >
                Go to My Applications
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
