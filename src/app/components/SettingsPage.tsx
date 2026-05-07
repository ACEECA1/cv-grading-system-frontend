import { FormEvent, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { loadStoredAuth, saveStoredAuth, type UpdateUserDTO, userApi } from "../api";

const inputClassName =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED1C24] focus:border-[#ED1C24]";

export function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError("");
      try {
        const user = await userApi.getCurrentUser();
        setFirstName(user.firstName ?? "");
        setLastName(user.lastName ?? "");
        setEmail(user.email ?? "");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    void loadProfile();
  }, []);

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!firstName.trim() || !lastName.trim()) {
      setError("First name and last name are required.");
      return;
    }

    const hasPasswordChangeInput = Boolean(currentPassword || newPassword || confirmNewPassword);
    if (hasPasswordChangeInput) {
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        setError("Please complete all password fields.");
        return;
      }
      if (newPassword.length < 8) {
        setError("New password must be at least 8 characters.");
        return;
      }
      if (newPassword !== confirmNewPassword) {
        setError("New password and confirmation do not match.");
        return;
      }
    }

    const payload: UpdateUserDTO = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
    };

    if (hasPasswordChangeInput) {
      payload.currentPassword = currentPassword;
      payload.newPassword = newPassword;
    }

    setSaving(true);
    try {
      const updatedUser = await userApi.updateUserProfile(payload);
      setFirstName(updatedUser?.firstName ?? payload.firstName);
      setLastName(updatedUser?.lastName ?? payload.lastName);
      setEmail(updatedUser?.email ?? payload.email ?? email);

      const stored = loadStoredAuth();
      if (stored?.accessToken && stored.refreshToken && stored.user) {
        saveStoredAuth({
          ...stored,
          user: {
            ...stored.user,
            firstName: updatedUser?.firstName ?? payload.firstName,
            lastName: updatedUser?.lastName ?? payload.lastName,
            email: updatedUser?.email ?? payload.email ?? email,
          },
        });
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setSuccessMessage("Profile updated successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="-m-4 p-4 min-h-[calc(100vh-4rem)] bg-gray-50 md:-m-8 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-4 md:p-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl font-semibold text-gray-900 md:text-2xl">Account Settings</h1>
          <p className="mt-1 text-sm text-gray-600">Manage your personal information and account security.</p>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 text-gray-600">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Loading your profile...</span>
          </div>
        ) : (
          <form onSubmit={(event) => void handleSave(event)} className="space-y-6 md:space-y-8">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {successMessage && (
              <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                {successMessage}
              </div>
            )}

            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="settings-first-name">
                    First Name
                  </label>
                  <input
                    id="settings-first-name"
                    className={inputClassName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={saving}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="settings-last-name">
                    Last Name
                  </label>
                  <input
                    id="settings-last-name"
                    className={inputClassName}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={saving}
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="settings-email">
                  Email Address
                </label>
                <input
                  id="settings-email"
                  type="email"
                  className={`${inputClassName} bg-gray-50 text-gray-600`}
                  value={email}
                  readOnly
                  disabled
                />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="settings-current-password">
                    Current Password
                  </label>
                  <input
                    id="settings-current-password"
                    type="password"
                    className={inputClassName}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    disabled={saving}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="settings-new-password">
                    New Password
                  </label>
                  <input
                    id="settings-new-password"
                    type="password"
                    className={inputClassName}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled={saving}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="settings-confirm-new-password">
                    Confirm New Password
                  </label>
                  <input
                    id="settings-confirm-new-password"
                    type="password"
                    className={inputClassName}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    disabled={saving}
                  />
                </div>
              </div>
            </section>

            <div>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ED1C24] hover:bg-[#c81820] text-white px-5 py-2.5 text-sm font-medium disabled:opacity-50"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
