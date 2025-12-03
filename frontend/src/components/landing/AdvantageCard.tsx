import type { ReactNode } from "react";

export interface AdvantageCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
}

export function AdvantageCard({ icon, title, desc, className }: AdvantageCardProps) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow ${className ?? ""}`}>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-3 font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}