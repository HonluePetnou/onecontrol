import { AlertTriangle, CheckCircle, Activity } from "lucide-react";

const alerts = [
  { type: "warning", title: "Marge faible", desc: "La marge brute est sous 35% ce mois." },
  { type: "critical", title: "Stock critique", desc: "2 produits en stock critique." },
  { type: "info", title: "Clients inactifs", desc: "5 clients sans achat depuis 60 jours." },
];

export default function AlertsPage() {
  return (
    <div className="space-y-3">
      {alerts.map((a, i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-sm flex items-start gap-3">
          {a.type === "critical" ? (
            <AlertTriangle className="h-5 w-5 text-destructive" />
          ) : a.type === "warning" ? (
            <Activity className="h-5 w-5 text-primary" />
          ) : (
            <CheckCircle className="h-5 w-5 text-success" />
          )}
          <div>
            <div className="font-medium">{a.title}</div>
            <div className="text-sm text-muted-foreground">{a.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}