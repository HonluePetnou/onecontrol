import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export interface KpiCardProps {
  label: string;
  value: string | number;
  delta?: number; // positive or negative percentage
}

export function KpiCard({ label, value, delta }: KpiCardProps) {
  const isUp = (delta ?? 0) >= 0;
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        {delta !== undefined && (
          <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs ${isUp ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
            {isUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            <span className="ml-1">{Math.abs(delta)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}