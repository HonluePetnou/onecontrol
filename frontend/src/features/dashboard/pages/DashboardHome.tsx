import { useEffect } from "react";
import { KpiCard } from "@/features/dashboard/components/KpiCard";
import { RevenueLineChart } from "@/features/dashboard/components/RevenueLineChart";
import { ChargesPieChart } from "@/features/dashboard/components/ChargesPieChart";
import { useDashboardStore } from "@/app/store/dashboardStore";

export default function DashboardHome() {
  const { loading, summary, monthlyRevenue, charges, load } = useDashboardStore();

  useEffect(() => {
    load();
  }, [load]);

  const fmtCurrency = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  const fmtNumber = new Intl.NumberFormat("fr-FR");
  const toCurrency = (n: number | undefined) => (typeof n === "number" ? fmtCurrency.format(n) : "—");
  const toNumber = (n: number | undefined) => (typeof n === "number" ? fmtNumber.format(n) : "—");

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard Principal</h1>
        <p className="mt-1 text-sm text-muted-foreground">Aperçu de la performance de votre entreprise.</p>
      </div>
      {/* KPI grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard label="Chiffre d'Affaires" value={summary ? toCurrency(summary.revenue) : "—"} delta={summary?.deltas.revenue} />
        <KpiCard label="Marge brute (%)" value={summary ? `${summary.grossMarginPct}%` : "—"} delta={summary?.deltas.margin} />
        <KpiCard label="Charges fixes" value={summary ? toCurrency(summary.fixedCosts) : "—"} />
        <KpiCard label="Charges variables" value={summary ? toCurrency(summary.variableCosts) : "—"} />
        <KpiCard label="Bénéfice net" value={summary ? toCurrency(summary.netProfit) : "—"} delta={summary?.deltas.profit} />
        <KpiCard label="Runway (mois)" value={summary ? toNumber(summary.runwayMonths) : "—"} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-4">
        <RevenueLineChart data={monthlyRevenue} />
        <ChargesPieChart data={charges} />
      </div>

      {/* Alertes et Recommandations */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Alertes et Recommandations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-destructive/10 text-destructive">!</span>
              <div>
                <div className="font-medium">Stock bas</div>
                <div className="text-sm text-muted-foreground">Le stock pour le “Produit A” est critique. Pensez à réapprovisionner.</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">⚠️</span>
              <div>
                <div className="font-medium">Charges en hausse</div>
                <div className="text-sm text-muted-foreground">Les charges opérationnelles ont augmenté de 15% ce mois.</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-success/10 text-success">✓</span>
              <div>
                <div className="font-medium">Opportunité</div>
                <div className="text-sm text-muted-foreground">Le client “KOFKOM SARL” n’a pas commandé depuis 60 jours.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}