import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Activity, CheckCircle2, Loader2, Mail, UserCheck, Users } from "lucide-react";
import { adminApi, formatDate, formatScoreOutOfTen, hrApi, systemApi, type ExternalServiceStatusDTO, type UserDTO } from "../api";

function MetricCard({
  label,
  value,
  icon,
  highlight,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <Card className={`p-6 ${highlight ? "border-[#ED1C24] border-2" : ""}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-600" style={{ fontSize: 13 }}>
          {label}
        </span>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${highlight ? "bg-red-50 text-[#ED1C24]" : "bg-gray-100 text-gray-600"}`}>
          {icon}
        </div>
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: highlight ? "#ED1C24" : "#191c1e" }}>{value}</div>
    </Card>
  );
}

export function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pending, setPending] = useState<UserDTO[]>([]);
  const [totalCvsProcessed, setTotalCvsProcessed] = useState(0);
  const [averageScore, setAverageScore] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const [pendingHr, stats] = await Promise.all([adminApi.listPendingHr(), hrApi.dashboardStats()]);
        if (cancelled) return;
        setPending(pendingHr);
        setTotalCvsProcessed(stats.totalCvsProcessed);
        setAverageScore(stats.averageMatchScore);
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
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>Admin Dashboard</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Overview based on live backend data.
        </p>
      </div>
      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}
      <div className="grid grid-cols-3 gap-6">
        <MetricCard label="Total CVs Processed" value={String(totalCvsProcessed)} icon={<Users className="w-4 h-4" />} />
        <MetricCard label="Average Match Score" value={formatScoreOutOfTen(averageScore)} icon={<Activity className="w-4 h-4" />} />
        <MetricCard label="Pending HR Approvals" value={String(pending.length)} icon={<UserCheck className="w-4 h-4" />} highlight />
      </div>
      <Card className="p-6">
        <h3 style={{ fontSize: 16, fontWeight: 600 }} className="mb-4">
          Recently Registered HR Accounts
        </h3>
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : pending.length === 0 ? (
          <div className="text-gray-500">No pending HR accounts.</div>
        ) : (
          <div className="space-y-3">
            {pending.slice(0, 5).map((user) => (
              <div key={user.id} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                <div style={{ fontSize: 14 }}>
                  <span style={{ fontWeight: 600 }}>{user.firstName} {user.lastName}</span>{" "}
                  <span className="text-gray-600">({user.email})</span>
                </div>
                <span className="text-gray-500" style={{ fontSize: 12 }}>
                  {formatDate(user.createdAt)}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function serviceStatusBadge(service: ExternalServiceStatusDTO): { className: string; label: string } {
  if (service.reachable) return { className: "bg-green-50 text-green-700", label: "Reachable" };
  return { className: "bg-red-50 text-red-700", label: "Unavailable" };
}

export function SystemHealth() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [services, setServices] = useState<ExternalServiceStatusDTO[]>([]);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await systemApi.health();
        if (cancelled) return;
        setServices(data.externalServices ?? []);
        setTimestamp(data.timestamp);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load system health.");
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
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>System Health Monitor</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          External service checks from backend probing.
        </p>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      {loading ? (
        <Card className="p-6 text-gray-500">Loading health status...</Card>
      ) : (
        <>
          {timestamp && (
            <div className="text-sm text-gray-500">
              Last check: {formatDate(timestamp)}
            </div>
          )}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service) => {
              const badge = serviceStatusBadge(service);
              return (
                <Card key={service.name} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${service.reachable ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>{service.name}</div>
                        <div className="text-gray-500" style={{ fontSize: 12 }}>
                          {service.url || "No URL configured"}
                        </div>
                      </div>
                    </div>
                    <span className={`${badge.className} px-2.5 py-1 rounded-md flex items-center gap-1.5`} style={{ fontSize: 12, fontWeight: 600 }}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> {badge.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-gray-600" style={{ fontSize: 13 }}>
                    <div>
                      <div className="text-gray-500" style={{ fontSize: 11 }}>
                        STATUS CODE
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#191c1e" }}>{service.statusCode ?? "—"}</div>
                    </div>
                    <div>
                      <div className="text-gray-500" style={{ fontSize: 11 }}>
                        MESSAGE
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#191c1e" }}>{service.message || "—"}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export function HRApprovals() {
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState<UserDTO[]>([]);

  const loadPending = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await adminApi.listPendingHr();
      setPending(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load pending HR users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadPending();
  }, []);

  const approve = async (userId: number) => {
    setBusyId(userId);
    setError("");
    try {
      await adminApi.approveHr(userId);
      setPending((prev) => prev.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Approval failed.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6 max-w-[1200px]">
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>HR Approvals</h1>
        <p className="text-gray-600" style={{ fontSize: 14 }}>
          Review and approve pending HR registrations.
        </p>
      </div>

      {error && (
        <Card className="p-4 border-red-200 bg-red-50 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </Card>
      )}

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 border-[#ED1C24] border-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600" style={{ fontSize: 13 }}>Pending Approvals</span>
            <div className="w-9 h-9 rounded-lg bg-red-50 text-[#ED1C24] flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#ED1C24" }}>{pending.length}</div>
        </Card>
      </div>

      {loading ? (
        <Card className="p-6 text-gray-500">Loading pending approvals...</Card>
      ) : pending.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 600 }}>All caught up</h3>
          <p className="text-gray-600 mt-1" style={{ fontSize: 14 }}>
            There are no pending HR registrations to review.
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {pending.map((user) => {
            const initials = `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase();
            return (
              <Card key={user.id} className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center shrink-0" style={{ fontSize: 16, fontWeight: 700 }}>
                  {initials || "HR"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 style={{ fontSize: 16, fontWeight: 600 }}>{user.firstName} {user.lastName}</h3>
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700" style={{ fontSize: 11, fontWeight: 600 }}>
                      {user.hrApprovalStatus}
                    </span>
                  </div>
                  <div className="flex items-center gap-5 text-gray-600" style={{ fontSize: 13 }}>
                    <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {user.email}</span>
                    <span>Registered {formatDate(user.createdAt)}</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => void approve(user.id)}
                    disabled={busyId === user.id}
                    className="bg-[#ED1C24] hover:bg-[#c81820] text-white"
                  >
                    {busyId === user.id ? <Loader2 className="w-4 h-4 animate-spin" /> : "Approve"}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
