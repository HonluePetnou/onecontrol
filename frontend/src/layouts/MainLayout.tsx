import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  TrendingUp,
  Upload,
  BarChart3,
  Bell,
  User,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";
import { NotificationsPanel } from "@/components/custom/NotificationsPanel";

export default function MainLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
  } = useNotifications();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/dashboard/simulation", icon: TrendingUp, label: "Simulation" },
    { path: "/dashboard/import", icon: Upload, label: "Import" },
    { path: "/dashboard/market", icon: BarChart3, label: "Marché" },
    { path: "/dashboard/chat", icon: MessageSquare, label: "Chat" },
    { path: "/dashboard/settings", icon: Settings, label: "Paramètres" },
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-sm flex flex-col transform transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-[#111827] font-bold text-lg">
              OneControl
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 hover:bg-[#F3F4F6] rounded-lg"
          >
            <X className="h-5 w-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-[#1E3A8A] text-white shadow-md"
                    : "text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-[#E5E7EB]">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827] w-full transition-all">
            <LogOut className="h-5 w-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-[#F3F4F6] rounded-lg"
            >
              <Menu className="h-6 w-6 text-[#111827]" />
            </button>

            {/* Title - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <h2 className="text-2xl font-bold text-[#111827]">
                Bienvenue
              </h2>
              <p className="text-sm text-[#6B7280] mt-0.5">
                Ravi de vous revoir, Jean
              </p>
            </div>

            {/* Right Side - Theme, Notifications & Profile */}
            <div className="flex items-center gap-2 lg:gap-4 ml-auto">
              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="relative p-2.5 hover:bg-[#F3F4F6] rounded-lg transition-colors"
                >
                  <Bell className="h-5 w-5 text-[#6B7280]" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-[#EF4444] text-white text-xs flex items-center justify-center rounded-full font-semibold">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Panel */}
                {isNotificationsOpen && (
                  <NotificationsPanel
                    notifications={notifications}
                    unreadCount={unreadCount}
                    onMarkAsRead={markAsRead}
                    onMarkAllAsRead={markAllAsRead}
                    onRemove={removeNotification}
                    onClearAll={clearAll}
                    onClose={() => setIsNotificationsOpen(false)}
                  />
                )}
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-4 border-l border-[#E5E7EB]">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-semibold text-[#111827]">
                    Jean Dupont
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    Gérant
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center shadow-md">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto px-4 lg:px-8 py-6 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
