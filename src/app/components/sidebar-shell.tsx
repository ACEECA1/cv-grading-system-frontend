import { LogOut, Settings } from "lucide-react";
import type { ReactNode } from "react";
import logoUrl from "../../imports/image.png";

export type Role = "admin" | "hr" | "candidate";

interface NavItem {
  key: string;
  label: string;
  icon: ReactNode;
}

interface SidebarShellProps {
  role: Role;
  initials: string;
  fullName: string;
  items: NavItem[];
  active: string;
  onNavigate: (key: string) => void;
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
  initials,
  fullName,
  items,
  active,
  onNavigate,
  onLogout,
  children,
}: SidebarShellProps) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-[260px] bg-[#556880] text-white flex flex-col p-4 sticky top-0 h-screen">
        <div className="pb-8">
          <div className="bg-white rounded-lg w-20 h-20 flex items-center justify-center mb-3 shadow-sm mx-auto p-2">
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
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`flex items-center gap-4 px-4 py-2 rounded-lg text-left transition-colors ${
                  isActive ? "bg-[#ED1C24] text-white" : "text-[#bcc7de] hover:bg-white/5"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
                <span style={{ fontSize: 14 }}>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 pt-4">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg w-full text-[#bcc7de] hover:bg-white/5"
          >
            <LogOut className="w-[18px] h-[18px]" />
            <span style={{ fontSize: 14 }}>Log Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span
              className={`px-2.5 py-1 rounded-md ${roleBadgeColor[role]}`}
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.5px" }}
            >
              {role.toUpperCase()}
            </span>
            <span className="text-gray-600" style={{ fontSize: 14 }}>
              {fullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
              <Settings className="w-[18px] h-[18px]" />
            </button>
            <div
              className="w-8 h-8 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center"
              style={{ fontSize: 12, fontWeight: 600 }}
            >
              {initials}
            </div>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
