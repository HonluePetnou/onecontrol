import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  type: "error" | "warning" | "success";
  title: string;
  description: string;
  className?: string;
}

const alertConfig = {
  error: {
    icon: AlertCircle,
    bgColor: "bg-[#FEE2E2] border border-red-100",
    iconColor: "text-[#EF4444]",
    titleColor: "text-[#991B1B]",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-[#FEF3C7] border border-amber-100",
    iconColor: "text-[#F59E0B]",
    titleColor: "text-[#92400E]",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-[#D1FAE5] border border-emerald-100",
    iconColor: "text-[#10B981]",
    titleColor: "text-[#065F46]",
  },
};

export function AlertCard({
  type,
  title,
  description,
  className,
}: AlertCardProps) {
  const config = alertConfig[type];
  const Icon = config.icon;

  return (
    <div className={cn("rounded-2xl p-5 shadow-sm", config.bgColor, className)}>
      <div className="flex items-start gap-4">
        <div className={cn("p-2 rounded-lg bg-white/50")}>
          <Icon className={cn("h-5 w-5", config.iconColor)} />
        </div>
        <div className="flex-1">
          <h4 className={cn("font-semibold mb-1.5", config.titleColor)}>
            {title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
