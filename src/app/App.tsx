import * as React from "react";
import { useState } from "react";
import {
  LayoutDashboard,
  Activity,
  UsersRound,
  Briefcase,
  ClipboardList,
  FileText,
  UserCheck,
} from "lucide-react";
import { AuthPage } from "./components/auth-page";
import { SidebarShell, type Role } from "./components/sidebar-shell";
import { AdminDashboard, SystemHealth, HRApprovals } from "./components/admin-views";
import {
  HRDashboard,
  JobOfferCreate,
  CandidatePipeline,
  EvaluationDetails,
  JobOffersList,
  type Candidate,
  type JobOffer,
} from "./components/hr-views";
import { JobBoard, MyApplications } from "./components/candidate-views";
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

const navByRole: Record<Role, { key: string; label: string; icon: React.ReactNode }[]> = {
  admin: [
    { key: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
    { key: "approvals", label: "HR Approvals", icon: <UserCheck className="w-[18px] h-[18px]" /> },
    { key: "submissions", label: "Job Offers", icon: <Briefcase className="w-[18px] h-[18px]" /> },
    { key: "create-job", label: "Create Job", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { key: "health", label: "System Health", icon: <Activity className="w-[18px] h-[18px]" /> },
  ],
  hr: [
    { key: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
    { key: "submissions", label: "Job Offers", icon: <Briefcase className="w-[18px] h-[18px]" /> },
    { key: "create-job", label: "Create Job", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { key: "pipeline", label: "Candidate Pipeline", icon: <UsersRound className="w-[18px] h-[18px]" /> },
  ],
  candidate: [
    { key: "jobs", label: "Job Board", icon: <ClipboardList className="w-[18px] h-[18px]" /> },
    { key: "applications", label: "My Applications", icon: <FileText className="w-[18px] h-[18px]" /> },
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

export default function App() {
  const [session, setSession] = useState<Session | null>(() => initSession());
  const [view, setView] = useState("dashboard");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);

  if (!session) {
    return (
      <AuthPage
        onAuthenticated={(tokens) => {
          const nextSession = toSession(tokens);
          setSession(nextSession);
          saveStoredAuth({
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            user: tokens.user,
          });
          setView(nextSession.role === "candidate" ? "jobs" : "dashboard");
          setSelectedCandidate(null);
          setSelectedJob(null);
        }}
      />
    );
  }

  const initials = session.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const renderJobSubmissionsFlow = () => {
    if (selectedCandidate) {
      return (
        <EvaluationDetails
          candidate={selectedCandidate}
          onBack={() => setSelectedCandidate(null)}
        />
      );
    }
    if (selectedJob) {
      return (
        <CandidatePipeline
          job={selectedJob}
          onSelect={setSelectedCandidate}
          onBack={() => setSelectedJob(null)}
        />
      );
    }
    return <JobOffersList onSelectJob={setSelectedJob} />;
  };

  const renderContent = () => {
    if (session.role === "admin") {
      if (view === "health") return <SystemHealth />;
      if (view === "approvals") return <HRApprovals />;
      if (view === "submissions") return renderJobSubmissionsFlow();
      if (view === "create-job") return <JobOfferCreate onBack={() => setView("dashboard")} />;
      return <AdminDashboard />;
    }
    if (session.role === "hr") {
      if (view === "create-job") return <JobOfferCreate onBack={() => setView("dashboard")} />;
      if (view === "submissions") return renderJobSubmissionsFlow();
      if (view === "pipeline") {
        if (selectedCandidate) {
          return (
            <EvaluationDetails
              candidate={selectedCandidate}
              onBack={() => setSelectedCandidate(null)}
            />
          );
        }
        return <CandidatePipeline onSelect={setSelectedCandidate} />;
      }
      return <HRDashboard onOpenJob={() => setView("create-job")} />;
    }
    if (view === "applications") return <MyApplications />;
    return <JobBoard />;
  };

  const handleLogout = async () => {
    try {
      await authApi.logout({ refreshToken: session.refreshToken });
    } catch {
      // local logout still proceeds if backend token was already invalid
    } finally {
      clearStoredAuth();
      setSession(null);
      setView("dashboard");
      setSelectedCandidate(null);
      setSelectedJob(null);
    }
  };

  return (
    <SidebarShell
      role={session.role}
      initials={initials}
      fullName={session.name}
      items={navByRole[session.role]}
      active={view}
      onNavigate={(k) => {
        setView(k);
        setSelectedCandidate(null);
        setSelectedJob(null);
      }}
      onLogout={() => void handleLogout()}
    >
      {renderContent()}
    </SidebarShell>
  );
}
