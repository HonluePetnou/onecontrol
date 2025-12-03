import { NavLink, Outlet } from "react-router-dom";
import { Menu, X, Gauge, Calculator, AlertTriangle, Settings, User, ChevronRight, Calendar, Upload, Store } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
     ${isActive ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shadow-sm">
              <span className="text-primary font-bold">O</span>
            </div>
            <span className="font-semibold">OneControl</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Mon Entreprise</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle sidebar"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            {/* Filter button and user badge */}
            <button className="hidden md:inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-muted">
              <Calendar className="h-4 w-4" />
              Filtrer par date
            </button>
            <div className="hidden md:flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm">Jean Dupont</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 px-4 sm:px-6 py-6">
        {/* Sidebar */}
        <aside className={`rounded-xl border border-border bg-card p-3 shadow-sm ${open ? "" : "hidden md:block"}`}>
          <nav className="space-y-1">
            <NavLink to="." end className={linkClasses}>
              <Gauge className="h-4 w-4" /> Dashboard
            </NavLink>
            <NavLink to="simulator" className={linkClasses}>
              <Calculator className="h-4 w-4" /> Simulation
            </NavLink>
            <NavLink to="import" className={linkClasses}>
              <Upload className="h-4 w-4" /> Import
            </NavLink>
            <NavLink to="market" className={linkClasses}>
              <Store className="h-4 w-4" /> Marché
            </NavLink>
            <NavLink to="alerts" className={linkClasses}>
              <AlertTriangle className="h-4 w-4" /> Alertes
            </NavLink>
            <NavLink to="settings" className={linkClasses}>
              <Settings className="h-4 w-4" /> Paramètres
            </NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-h-[60vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}