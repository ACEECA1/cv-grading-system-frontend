import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api";

type Step = "request" | "reset";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("request");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRequestCode = async () => {
    setError("");
    setSuccess(false);
    const trimmedEmail = email.trim();
    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setBusy(true);
    try {
      await authApi.requestPasswordReset(trimmedEmail);
      setEmail(trimmedEmail);
      setStep("reset");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send reset code.");
    } finally {
      setBusy(false);
    }
  };

  const handleResetPassword = async () => {
    setError("");
    setSuccess(false);
    const trimmedEmail = email.trim();
    const trimmedCode = code.trim();
    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!trimmedCode) {
      setError("Please enter the verification code.");
      return;
    }
    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }

    setBusy(true);
    try {
      await authApi.resetPassword(trimmedEmail, trimmedCode, newPassword);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reset password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 border border-gray-200">
        {step === "request" ? (
          <>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Reset your password</h1>
            <p className="text-sm text-gray-600 mb-6">
              Enter your email address and we will send you a verification code.
            </p>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

            <div className="space-y-2 mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={busy}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED1C24] focus:border-[#ED1C24] disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="button"
              onClick={() => void handleRequestCode()}
              disabled={busy}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#ED1C24] hover:bg-[#c81820] text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
            >
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Reset Code"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="mt-4 text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Login
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create new password</h1>
            <p className="text-sm text-gray-600 mb-6">
              Enter the verification code sent to your email and your new password.
            </p>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
            {success && (
              <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                Password reset successful.
              </div>
            )}

            <div className="space-y-4 mb-5">
              <div className="space-y-2">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input
                  id="otp"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={busy || success}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED1C24] focus:border-[#ED1C24] disabled:opacity-50"
                  placeholder="Enter code"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={busy || success}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED1C24] focus:border-[#ED1C24] disabled:opacity-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!success ? (
              <button
                type="button"
                onClick={() => void handleResetPassword()}
                disabled={busy}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[#ED1C24] hover:bg-[#c81820] text-white px-4 py-2 text-sm font-medium disabled:opacity-50"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reset Password"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full inline-flex items-center justify-center rounded-md bg-[#ED1C24] hover:bg-[#c81820] text-white px-4 py-2 text-sm font-medium"
              >
                Return to Login
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
