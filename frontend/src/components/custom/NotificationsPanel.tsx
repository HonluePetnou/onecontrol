import { CheckCheck, Trash2 } from "lucide-react";
import { useMemo, useEffect, useRef } from "react";
import type { Notification } from "@/hooks/useNotifications";

interface NotificationsPanelProps {
  notifications: Notification[];
  unreadCount: number;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export function NotificationsPanel({
  notifications,
  unreadCount,
  onMarkAsRead,
  onMarkAllAsRead,
  onRemove,
  onClearAll,
  onClose,
}: NotificationsPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        onClose();
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const formatRelativeFr = (date: Date) => {
    const diffMs = Date.now() - date.getTime();
    const minutes = Math.floor(diffMs / 60000);
    if (minutes < 1) return "à l'instant";
    if (minutes < 60) return `il y a ${minutes} minute${minutes > 1 ? "s" : ""}`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `il y a ${hours} heure${hours > 1 ? "s" : ""}`;
    const days = Math.floor(hours / 24);
    return `il y a ${days} jour${days > 1 ? "s" : ""}`;
  };

  const dateGroupLabelFr = (date: Date) => {
    const d = new Date(date);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (d.toDateString() === today.toDateString()) return "Aujourd'hui";
    if (d.toDateString() === yesterday.toDateString()) return "Hier";
    return d.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filtered = useMemo(() => {
    return [...notifications].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }, [notifications]);

  const groups = useMemo(() => {
    const result: Record<string, Notification[]> = {};
    for (const n of filtered) {
      const key = dateGroupLabelFr(n.timestamp);
      if (!result[key]) result[key] = [];
      result[key].push(n);
    }
    return result;
  }, [filtered]);

  return (
    <div
      className="absolute right-0 top-full mt-2 w-[24rem] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-[#E5E7EB] z-50 animate-in fade-in zoom-in-95"
      role="dialog"
      aria-labelledby="notifications-title"
      ref={panelRef}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <div>
          <h3 id="notifications-title" className="font-semibold text-[#111827]">
            Notifications
          </h3>
          {unreadCount > 0 && (
            <p className="text-sm text-[#6B7280]">
              {unreadCount} non lue{unreadCount > 1 ? "s" : ""}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={onMarkAllAsRead}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
              title="Tout marquer comme lu"
            >
              <CheckCheck className="h-4 w-4 text-[#6B7280]" />
            </button>
          )}
        </div>
      </div>
      <div className="border-b border-[#E5E7EB]" />

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-[#6B7280]">
              Aucune notification
            </p>
          </div>
        ) : (
          <div>
            {Object.entries(groups).map(([day, items]) => (
              <div key={day} className="">
                <div className="px-4 py-2 text-xs font-semibold text-[#6B7280]">
                  {day}
                </div>
                <div className="divide-y divide-[#E5E7EB]">
                  {items.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-[#F3F4F6] transition-colors border-l-2 ${
                        !notification.read ? "border-[#1E3A8A]" : "border-transparent"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1 h-2 w-2 rounded-full ${
                            notification.type === "error"
                              ? "bg-[#EF4444]"
                              : notification.type === "warning"
                              ? "bg-[#F59E0B]"
                              : notification.type === "success"
                              ? "bg-[#10B981]"
                              : "bg-[#6366F1]"
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#111827]">
                            {notification.title}
                          </p>
                          <p className="text-sm text-[#6B7280]">
                            {notification.message}
                          </p>
                          <p className="mt-1 text-xs text-[#9CA3AF]">
                            {formatRelativeFr(notification.timestamp)}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemove(notification.id)}
                          className="p-1 hover:bg-[#E5E7EB] rounded transition-colors"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="h-4 w-4 text-[#6B7280]" />
                        </button>
                      </div>
                      {!notification.read && (
                        <button
                          onClick={() => onMarkAsRead(notification.id)}
                          className="mt-2 text-xs text-[#1E3A8A] hover:underline"
                        >
                          Marquer comme lu
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t border-[#E5E7EB]">
          <button
            onClick={onClearAll}
            className="w-full text-sm text-[#EF4444] hover:underline font-medium"
          >
            Tout effacer
          </button>
        </div>
      )}
    </div>
  );
}
