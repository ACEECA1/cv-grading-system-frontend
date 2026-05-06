import * as React from "react";
import { useState } from "react";
import {
  Activity,
  Briefcase,
  ClipboardList,
  FileText,
  LayoutDashboard,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { AuthPage } from "./components/auth-page";
import { SidebarShell, type Role } from "./components/sidebar-shell";
import { AdminDashboard, HRApprovals, SystemHealth } from "./components/admin-views";
import { CandidateEvaluationDetail } from "./components/CandidateEvaluationDetail";
import { JobBoard, MyApplications } from "./components/candidate-views";
import { CandidatePipeline, HRDashboard, JobOfferCreate, JobOffersList } from "./components/hr-views";
import {
  authApi,
  clearStoredAuth,
  loadStoredAuth,
  saveStoredAuth,
  type AuthTokensDTO,
  type UserDTO,
} from "./api";

interface Session {
  role: Role;
  name: string;
  user: UserDTO;
  accessToken: string;
  refreshToken: string;
}

function toRole(role: UserDTO["role"]): Role {
  if (role === "ADMIN") return "admin";
  if (role === "HR") return "hr";
  return "candidate";
}

function displayName(user: UserDTO): string {
  const full = `${user.firstName || ""} ${user.lastName || ""}`.trim();
  return full || user.username || user.email;
}

function toSession(tokens: AuthTokensDTO): Session {
  return {
    role: toRole(tokens.user.role),
    name: displayName(tokens.user),
    user: tokens.user,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
  };
}

const defaultPathByRole: Record<Role, string> = {
  admin: "/admin/dashboard",
  hr: "/hr/dashboard",
  candidate: "/candidate/jobs",
};

const navByRole: Record<Role, { to: string; label: string; icon: React.ReactNode }[]> = {
  admin: [
    { to: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
    { to: "/admin/approvals", label: "HR Approvals", icon: <UserCheck className="w-[18px] h-[18px]" /> },
    { to: "/admin/submissions", label: "Job Offers", icon: <Briefcase className="w-[18px] h-[18px]" /> },
    { to: "/admin/create-job", label: "Create Job", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { to: "/admin/health", label: "System Health", icon: <Activity className="w-[18px] h-[18px]" /> },
  ],
  hr: [
    { to: "/hr/dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
    { to: "/hr/submissions", label: "Job Offers", icon: <Briefcase className="w-[18px] h-[18px]" /> },
    { to: "/hr/create-job", label: "Create Job", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { to: "/hr/pipeline", label: "Candidate Pipeline", icon: <UsersRound className="w-[18px] h-[18px]" /> },
  ],
  candidate: [
    { to: "/candidate/jobs", label: "Job Board", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { to: "/candidate/applications", label: "My Applications", icon: <FileText className="w-[18px] h-[18px]" /> },
  ],
};

function initSession(): Session | null {
  const stored = loadStoredAuth();
  if (!stored) return null;
  return {
    role: toRole(stored.user.role),
    name: displayName(stored.user),
    user: stored.user,
    accessToken: stored.accessToken,
    refreshToken: stored.refreshToken,
  };
}

function parseId(value: string | undefined): number | null {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function RoleLayout({
  role,
  session,
  onLogout,
}: {
  role: Role;
  session: Session;
  onLogout: () => void;
}) {
  if (session.role !== role) {
    return <Navigate to={defaultPathByRole[session.role]} replace />;
  }

  const initials = session.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <SidebarShell
      role={role}
      initials={initials}
      fullName={session.name}
      items={navByRole[role]}
      onLogout={onLogout}
    >
      <Outlet />
    </SidebarShell>
  );
}

function SubmissionsPipelineRoute({ role }: { role: "admin" | "hr" }) {
  const params = useParams<{ jobId: string }>();
  const jobId = parseId(params.jobId);
  if (jobId == null) {
    return <Navigate to={`/${role}/submissions`} replace />;
  }
  const evaluationRoutePrefix = `/${role}/submissions/jobs/${jobId}/evaluations`;
  return (
    <CandidatePipeline
      jobId={jobId}
      backTo={`/${role}/submissions`}
      evaluationRoutePrefix={evaluationRoutePrefix}
    />
  );
}

function SubmissionEvaluationRoute({ role }: { role: "admin" | "hr" }) {
  const params = useParams<{ jobId: string }>();
  const jobId = parseId(params.jobId);
  if (jobId == null) {
    return <Navigate to={`/${role}/submissions`} replace />;
  }
  return <CandidateEvaluationDetail backTo={`/${role}/submissions/jobs/${jobId}`} />;
}

export default function App() {
  const [session, setSession] = useState<Session | null>(() => initSession());
  const navigate = useNavigate();

  const handleAuthenticated = (tokens: AuthTokensDTO) => {
    const nextSession = toSession(tokens);
    setSession(nextSession);
    saveStoredAuth({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: tokens.user,
    });
    navigate(defaultPathByRole[nextSession.role], { replace: true });
  };

  const handleLogout = async () => {
    if (!session) return;
    try {
      await authApi.logout({ refreshToken: session.refreshToken });
    } catch {
      // local logout still proceeds if backend token was already invalid
    } finally {
      clearStoredAuth();
      setSession(null);
      navigate("/auth/login", { replace: true });
    }
  };

  if (!session) {
    return (
      <Routes>
        <Route path="/auth/*" element={<AuthPage onAuthenticated={handleAuthenticated} />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={defaultPathByRole[session.role]} replace />} />
      <Route path="/auth/*" element={<Navigate to={defaultPathByRole[session.role]} replace />} />

      <Route path="/admin" element={<RoleLayout role="admin" session={session} onLogout={() => void handleLogout()} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="approvals" element={<HRApprovals />} />
        <Route path="health" element={<SystemHealth />} />
        <Route path="create-job" element={<JobOfferCreate backTo="/admin/dashboard" />} />
        <Route path="submissions" element={<JobOffersList onSelectJobPath={(job) => `/admin/submissions/jobs/${job.id}`} />} />
        <Route path="submissions/jobs/:jobId" element={<SubmissionsPipelineRoute role="admin" />} />
        <Route path="submissions/jobs/:jobId/evaluations/:evaluationId" element={<SubmissionEvaluationRoute role="admin" />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>

      <Route path="/hr" element={<RoleLayout role="hr" session={session} onLogout={() => void handleLogout()} />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<HRDashboard createJobPath="/hr/create-job" />} />
        <Route path="create-job" element={<JobOfferCreate backTo="/hr/dashboard" />} />
        <Route path="submissions" element={<JobOffersList onSelectJobPath={(job) => `/hr/submissions/jobs/${job.id}`} />} />
        <Route path="submissions/jobs/:jobId" element={<SubmissionsPipelineRoute role="hr" />} />
        <Route path="submissions/jobs/:jobId/evaluations/:evaluationId" element={<SubmissionEvaluationRoute role="hr" />} />
        <Route
          path="pipeline"
          element={<CandidatePipeline evaluationRoutePrefix="/hr/pipeline/evaluations" />}
        />
        <Route
          path="pipeline/evaluations/:evaluationId"
          element={<CandidateEvaluationDetail backTo="/hr/pipeline" />}
        />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>

      <Route path="/candidate" element={<RoleLayout role="candidate" session={session} onLogout={() => void handleLogout()} />}>
        <Route index element={<Navigate to="jobs" replace />} />
        <Route path="jobs" element={<JobBoard />} />
        <Route path="applications" element={<MyApplications />} />
        <Route path="*" element={<Navigate to="jobs" replace />} />
      </Route>

      <Route path="*" element={<Navigate to={defaultPathByRole[session.role]} replace />} />
    </Routes>
  );
}
