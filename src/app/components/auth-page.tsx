import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { authApi, type AuthTokensDTO } from "../api";
const logoUrl = new URL("../../imports/image.png", import.meta.url).href;

type AuthMode = "login" | "register-candidate" | "register-hr" | "verify";

const authPathByMode: Record<AuthMode, string> = {
  login: "/auth/login",
  "register-candidate": "/auth/register/candidate",
  "register-hr": "/auth/register/hr",
  verify: "/auth/verify",
};

function resolveMode(pathname: string): AuthMode | null {
  if (pathname === "/auth/login") return "login";
  if (pathname === "/auth/register/candidate") return "register-candidate";
  if (pathname === "/auth/register/hr") return "register-hr";
  if (pathname === "/auth/verify") return "verify";
  return null;
}

interface AuthPageProps {
  onAuthenticated: (tokens: AuthTokensDTO) => void;
}

export function AuthPage({ onAuthenticated }: AuthPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = useMemo(() => resolveMode(location.pathname), [location.pathname]);
  const activeMode = mode ?? "login";
  const [otp, setOtp] = useState("");
  const [name, setName] = useState({ first: "", last: "" });
  const [username, setUsername] = useState("");
  const [identity, setIdentity] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationEmail, setVerificationEmail] = useState("");
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const activeEmail = useMemo(() => verificationEmail || email, [verificationEmail, email]);

  useEffect(() => {
    if (!mode) {
      navigate(authPathByMode.login, { replace: true });
    }
  }, [mode, navigate]);

  const clearMessages = () => {
    setError("");
    setInfo("");
  };

  const handleLogin = async () => {
    clearMessages();
    if (!identity.trim() || !password) {
      setError("Please enter your username/email and password.");
      return;
    }
    setBusy(true);
    try {
      const tokens = await authApi.login({
        usernameOrEmail: identity.trim(),
        password,
      });
      onAuthenticated(tokens);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setBusy(false);
    }
  };

  const handleRegister = () => {
    clearMessages();
    const trimmedUsername = username.trim();
    const trimmedFirstName = name.first.trim();
    const trimmedLastName = name.last.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUsername || !trimmedFirstName || !trimmedLastName || !trimmedEmail || !password) {
      setError("Please complete all fields.");
      return;
    }
    if (trimmedUsername.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (trimmedFirstName.length < 2 || trimmedLastName.length < 2) {
      setError("First and last name must be at least 2 characters.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(password)) {
      setError("Password must contain letters and numbers.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const registerMode: AuthMode = activeMode === "register-hr" ? "register-hr" : "register-candidate";
    const payload = {
      username: trimmedUsername,
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      email: trimmedEmail,
      password,
    };

    setBusy(true);
    setVerificationEmail(trimmedEmail);
    setInfo("Verification code sent!");
    navigate(authPathByMode.verify);
    setBusy(false);

    const request = registerMode === "register-hr" ? authApi.registerHr(payload) : authApi.registerCandidate(payload);
    void request.catch((err) => {
      setInfo("");
      setError(err instanceof Error ? err.message : "Registration failed.");
      navigate(authPathByMode[registerMode]);
    });
  };

  const handleVerify = async () => {
    clearMessages();
    if (!activeEmail.trim() || otp.trim().length < 4) {
      setError("Enter your email and verification code.");
      return;
    }
    setBusy(true);
    try {
      await authApi.verify({ email: activeEmail.trim(), code: otp.trim() });
      navigate(authPathByMode.login);
      setIdentity(username || email);
      setInfo("Email verified. You can now sign in.");
      setOtp("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setBusy(false);
    }
  };

  const handleResend = async () => {
    clearMessages();
    if (!activeEmail.trim()) {
      setError("Enter your email first.");
      return;
    }
    setBusy(true);
    try {
      await authApi.resendVerification({ email: activeEmail.trim() });
      setInfo("A new verification code was sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend verification code.");
    } finally {
      setBusy(false);
    }
  };

  const switchMode = (next: AuthMode) => {
    clearMessages();
    navigate(authPathByMode[next]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex flex-col items-center gap-3 mb-6">
          <img src={logoUrl} alt="Djezzy" className="w-20 h-20 object-contain" />
          <div style={{ fontSize: 20, fontWeight: 600 }}>Djezzy Talent Portal</div>
          <div className="text-gray-500 text-center" style={{ fontSize: 13 }}>
            {activeMode === "verify" ? "Verify your email" : activeMode.startsWith("register") ? "Create an account" : "Sign in to continue"}
          </div>
        </div>

        {info && (
          <div className="bg-green-50 border border-green-200 rounded-md p-2.5 text-green-700 mb-4" style={{ fontSize: 12 }}>
            {info}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-2.5 text-red-700 flex items-start gap-2 mb-4" style={{ fontSize: 12 }}>
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> {error}
          </div>
        )}

        {activeMode === "login" && (
          <>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="identity">Username or Email</Label>
                <Input
                  id="identity"
                  placeholder="username or you@djezzy.com"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  disabled={busy}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={busy}
                />
              </div>
              <Button onClick={() => void handleLogin()} disabled={busy} className="w-full bg-[#ED1C24] hover:bg-[#c81820] text-white">
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
              </Button>
              <div className="text-right">
                <button
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-[#ED1C24] hover:underline"
                  disabled={busy}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="text-center mt-5 text-gray-600" style={{ fontSize: 13 }}>
              Don't have an account?{" "}
              <button onClick={() => switchMode("register-candidate")} className="text-[#ED1C24]" style={{ fontWeight: 600 }}>
                Register
              </button>
            </div>
          </>
        )}

        {(activeMode === "register-candidate" || activeMode === "register-hr") && (
          <>
            <div className="bg-gray-100 rounded-lg p-1 flex gap-1 mb-5">
              <button
                onClick={() => switchMode("register-candidate")}
                className={`flex-1 py-2 rounded-md ${activeMode === "register-candidate" ? "bg-white shadow-sm text-[#ED1C24]" : "text-gray-600"}`}
                style={{ fontSize: 12, fontWeight: 600 }}
                disabled={busy}
              >
                Candidate
              </button>
              <button
                onClick={() => switchMode("register-hr")}
                className={`flex-1 py-2 rounded-md ${activeMode === "register-hr" ? "bg-white shadow-sm text-[#ED1C24]" : "text-gray-600"}`}
                style={{ fontSize: 12, fontWeight: 600 }}
                disabled={busy}
              >
                HR
              </button>
            </div>

            {activeMode === "register-hr" && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-amber-800" style={{ fontSize: 12 }}>
                  HR accounts require administrator approval after email verification.
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>First Name</Label>
                  <Input value={name.first} onChange={(e) => setName({ ...name, first: e.target.value })} disabled={busy} />
                </div>
                <div className="space-y-1.5">
                  <Label>Last Name</Label>
                  <Input value={name.last} onChange={(e) => setName({ ...name, last: e.target.value })} disabled={busy} />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Username</Label>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} disabled={busy} />
              </div>
              <div className="space-y-1.5">
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />
              </div>
              <div className="space-y-1.5">
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={busy} />
              </div>
              <div className="space-y-1.5">
                <Label>Confirm Password</Label>
                <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={busy} />
              </div>
              <Button onClick={() => void handleRegister()} disabled={busy} className="w-full bg-[#ED1C24] hover:bg-[#c81820] text-white">
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Account"}
              </Button>
            </div>

            <div className="text-center mt-5 text-gray-600" style={{ fontSize: 13 }}>
              Already have an account?{" "}
              <button onClick={() => switchMode("login")} className="text-[#ED1C24]" style={{ fontWeight: 600 }}>
                Sign In
              </button>
            </div>
          </>
        )}

        {activeMode === "verify" && (
          <div className="flex flex-col items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-green-600" />
            </div>
            <div className="text-center text-gray-600" style={{ fontSize: 13 }}>
              Enter the verification code sent to {activeEmail || "your email"}.
            </div>
            <div className="w-full space-y-1.5">
              <Label>Email</Label>
              <Input type="email" value={activeEmail} onChange={(e) => setVerificationEmail(e.target.value)} disabled={busy} />
            </div>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button onClick={() => void handleVerify()} disabled={busy} className="w-full bg-[#ED1C24] hover:bg-[#c81820] text-white">
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify Email"}
            </Button>
            <button onClick={() => void handleResend()} disabled={busy} className="text-[#ED1C24]" style={{ fontSize: 12, fontWeight: 600 }}>
              Resend code
            </button>
            <button onClick={() => switchMode("login")} className="text-gray-500" style={{ fontSize: 12 }}>
              Back to sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
