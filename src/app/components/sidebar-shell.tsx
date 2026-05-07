import { LogOut, Menu, Settings, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
const logoUrl = new URL("../../imports/image.png", import.meta.url).href;

export type Role = "admin" | "hr" | "candidate";

interface NavItem {
  to: string;
  label: string;
  icon: ReactNode;
}

interface SidebarShellProps {
  role: Role;
  fullName: string;
  items: NavItem[];
  onLogout: () => void;
  children: ReactNode;
}

const roleSubtitle: Record<Role, string> = {
  admin: "Admin Console",
  hr: "HR Portal",
  candidate: "Candidate Portal",
};

const roleBadgeColor: Record<Role, string> = {
  admin: "bg-[#ED1C24] text-white",
  hr: "bg-amber-500 text-white",
  candidate: "bg-slate-700 text-white",
};

export function SidebarShell({
  role,
  fullName,
  items,
  onLogout,
  children,
}: SidebarShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className={`fixed top-1/2 left-0 z-50 -translate-y-1/2 bg-[#556880] text-white p-2 rounded-r-md shadow-md md:hidden ${
          isMobileOpen ? "hidden" : ""
        }`}
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#556880] text-white flex flex-col p-4 transition-transform duration-150 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:sticky md:top-0 md:h-screen`}
      >
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-md p-2 text-[#bcc7de] hover:bg-white/5"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="pb-8">
          <div className="w-20 h-20 flex items-center justify-center mb-3 mx-auto">
            <img src={logoUrl} alt="Djezzy" className="w-full h-full object-contain" />
          </div>
          <div className="text-white text-center" style={{ fontSize: 15, fontWeight: 600, lineHeight: "20px" }}>
            Talent Portal
          </div>
          <div className="text-[#bcc7de] text-center" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.6px" }}>
            {roleSubtitle[role]}
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {items.map((item) => {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) => `flex items-center gap-4 px-4 py-2 rounded-lg text-left transition-colors ${
                  isActive ? "bg-[#ED1C24] text-white" : "text-[#bcc7de] hover:bg-white/5"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
                <span style={{ fontSize: 14 }}>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 pt-4 space-y-3">
          <div className="px-4">
            <span
              className={`inline-block px-2.5 py-1 rounded-md ${roleBadgeColor[role]}`}
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.5px" }}
            >
              {role.toUpperCase()}
            </span>
            <p className="mt-2 text-[#bcc7de]" style={{ fontSize: 13 }}>
              {fullName}
            </p>
          </div>
          <NavLink
            to="/settings"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive ? "bg-white/10 text-white" : "text-[#bcc7de] hover:bg-white/5"
              }`
            }
            aria-label="Settings"
          >
            <Settings className="w-[18px] h-[18px]" />
            <span style={{ fontSize: 14 }}>Settings</span>
          </NavLink>
          <button
            onClick={() => {
              setIsMobileOpen(false);
              onLogout();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg w-full text-[#bcc7de] hover:bg-white/5"
          >
            <LogOut className="w-[18px] h-[18px]" />
            <span style={{ fontSize: 14 }}>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0 min-h-screen">
        <main className="h-full overflow-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
