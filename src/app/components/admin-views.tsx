import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Activity, CheckCircle2, Circle, Loader2, Mail, RefreshCw, UserCheck, Users } from "lucide-react";
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

type HealthLevel = "operational" | "degraded" | "critical";

function normalizeServiceName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findServiceByAlias(
  services: ExternalServiceStatusDTO[],
  aliases: string[],
): ExternalServiceStatusDTO | null {
  return (
    services.find((service) => {
      const normalized = normalizeServiceName(service.name);
      return aliases.some((alias) => normalized.includes(alias));
    }) ?? null
  );
}

function latencyFromMessage(message: string | null, fallback: number | null): number | null {
  if (message) {
    const match = message.match(/(\d+)\s*ms/i);
    if (match) return Number.parseInt(match[1], 10);
  }
  return fallback;
}

function formatRelativeTime(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const diffMs = Math.max(Date.now() - date.getTime(), 0);
  if (diffMs < 60_000) return "Just now";
  const minutes = Math.floor(diffMs / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function resolveHealthLevel(reachable: boolean, latencyMs: number | null): HealthLevel {
  if (!reachable) return "critical";
  if (latencyMs != null && latencyMs > 1000) return "degraded";
  return "operational";
}

function StatusBadge({ checking, level }: { checking: boolean; level: HealthLevel }) {
  if (checking) {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
        <Circle className="h-2.5 w-2.5 fill-current text-gray-500" />
        Checking...
      </span>
    );
  }

  if (level === "critical") {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
        <Circle className="h-2.5 w-2.5 animate-pulse fill-current text-red-600" />
        Critical
      </span>
    );
  }

  if (level === "degraded") {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
        <Circle className="h-2.5 w-2.5 fill-current text-amber-500" />
        Degraded
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
      <Circle className="h-2.5 w-2.5 fill-current text-green-600" />
      Operational
    </span>
  );
}

export function SystemHealth() {
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");
  const [apiStatus, setApiStatus] = useState("");
  const [services, setServices] = useState<ExternalServiceStatusDTO[]>([]);
  const [timestamp, setTimestamp] = useState<string>(new Date().toISOString());
  const [requestLatencyMs, setRequestLatencyMs] = useState<number | null>(null);

  const loadHealth = useCallback(async () => {
    const startedAt = performance.now();
    setChecking(true);
    setError("");
    try {
      const data = await systemApi.health();
      const elapsed = Math.round(performance.now() - startedAt);
      setApiStatus(data.apiStatus ?? "");
      setServices(data.externalServices ?? []);
      setTimestamp(data.timestamp || new Date().toISOString());
      setRequestLatencyMs(elapsed);
    } catch (err) {
      setApiStatus("DOWN");
      setServices([]);
      setTimestamp(new Date().toISOString());
      setRequestLatencyMs(null);
      setError(err instanceof Error ? err.message : "Failed to load system health.");
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    void loadHealth();
  }, [loadHealth]);

  const ocrService = findServiceByAlias(services, ["ocrservice", "ocr", "pdf"]);
  const aiService = findServiceByAlias(services, ["aiengine", "n8n", "evaluation", "llm"]);
  const databaseService = findServiceByAlias(services, ["database", "postgres", "postgresql", "mysql", "db"]);
  const mainApiReachable = apiStatus.toUpperCase() === "UP" && !error;

  const cards = [
    {
      name: "Main API",
      latencyMs: requestLatencyMs,
      reachable: mainApiReachable,
      lastChecked: timestamp,
    },
    {
      name: "Database",
      latencyMs: latencyFromMessage(databaseService?.message ?? null, requestLatencyMs),
      reachable: databaseService ? databaseService.reachable : mainApiReachable,
      lastChecked: timestamp,
    },
    {
      name: "OCR Service",
      latencyMs: latencyFromMessage(ocrService?.message ?? null, requestLatencyMs),
      reachable: ocrService?.reachable ?? false,
      lastChecked: timestamp,
    },
    {
      name: "AI Engine",
      latencyMs: latencyFromMessage(aiService?.message ?? null, requestLatencyMs),
      reachable: aiService?.reachable ?? false,
      lastChecked: timestamp,
    },
  ];

  return (
    <div className="max-w-[1200px] space-y-6 bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700 }}>System Health</h1>
          <p className="text-gray-600" style={{ fontSize: 14 }}>
            Real-time status of critical platform services.
          </p>
        </div>
        <Button
          onClick={() => void loadHealth()}
          disabled={checking}
          className="bg-[#ED1C24] text-white hover:bg-[#c81820]"
        >
          <RefreshCw className={`h-4 w-4 ${checking ? "animate-spin" : ""}`} />
          {checking ? "Checking..." : "Refresh"}
        </Button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700" style={{ fontSize: 13 }}>
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((service) => {
          const level = resolveHealthLevel(service.reachable, service.latencyMs);
          return (
            <div key={service.name} className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                <StatusBadge checking={checking} level={level} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Latency</span>
                  <span className="font-semibold text-gray-900">
                    {checking ? "Checking..." : service.latencyMs != null ? `${service.latencyMs}ms` : "—"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Last Checked</span>
                  <span className="font-semibold text-gray-900">{formatRelativeTime(service.lastChecked)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
