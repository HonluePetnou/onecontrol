import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  className?: string;
}

export function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  className,
}: KPICardProps) {
  const getTrendColor = () => {
    if (!trend || trend === "neutral")
      return "text-gray-600";
    return trend === "up" ? "text-emerald-600" : "text-red-600";
  };

  const getTrendBg = () => {
    if (!trend || trend === "neutral") return "bg-gray-100";
    return trend === "up" ? "bg-emerald-50" : "bg-red-50";
  };

  const getIconBg = () => {
    if (!trend || trend === "neutral") return "bg-gray-100";
    return trend === "up" ? "bg-emerald-50" : "bg-red-50";
  };

  const getIconColor = () => {
    if (!trend || trend === "neutral") return "text-gray-600";
    return trend === "up" ? "text-emerald-600" : "text-red-600";
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all border border-transparent",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-medium text-gray-600">
          {title}
        </p>
        {Icon && (
          <div
            className={cn(
              "h-12 w-12 rounded-xl flex items-center justify-center",
              getIconBg()
            )}
          >
            <Icon className={cn("h-6 w-6", getIconColor())} />
          </div>
        )}
      </div>
      <div className="space-y-3">
        <p className="text-3xl font-bold text-gray-900">
          {value}
        </p>
        {change && (
          <div
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold",
              getTrendBg(),
              getTrendColor()
            )}
          >
            {trend === "up" && "↑"}
            {trend === "down" && "↓"}
            {change}
          </div>
        )}
      </div>
    </div>
  );
}
