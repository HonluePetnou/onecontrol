import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

export default function SimulatorPage() {
  const [priceIncreasePct, setPriceIncreasePct] = useState(5);
  const [newHires, setNewHires] = useState(1);
  const [newProduct, setNewProduct] = useState(false);

  const result = useMemo(() => {
    const baseRevenue = 52000;
    const baseMargin = 0.38;
    const baseBurn = 18000;
    const revenue = baseRevenue * (1 + priceIncreasePct / 100) + (newProduct ? 5000 : 0);
    const margin = baseMargin + priceIncreasePct / 1000 - newHires * 0.005;
    const burn = baseBurn + newHires * 3000 - (newProduct ? 1500 : 0);
    return { revenue: Math.round(revenue), marginPct: Math.round(margin * 100), burn };
  }, [priceIncreasePct, newHires, newProduct]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Augmentation prix (%)</label>
            <input
              type="number"
              value={priceIncreasePct}
              onChange={(e) => setPriceIncreasePct(Number(e.target.value))}
              className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Nouvelle embauche</label>
            <input
              type="number"
              value={newHires}
              onChange={(e) => setNewHires(Number(e.target.value))}
              className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2"
            />
          </div>
          <div className="flex items-end">
            <label className="mr-2 text-sm text-muted-foreground">Ajout produit</label>
            <input type="checkbox" checked={newProduct} onChange={(e) => setNewProduct(e.target.checked)} />
          </div>
        </div>
        <div className="mt-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Simuler</Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="text-sm text-muted-foreground">CA prévisionnel</div>
          <div className="mt-1 text-2xl font-semibold">{result.revenue}</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="text-sm text-muted-foreground">Marge (%)</div>
          <div className="mt-1 text-2xl font-semibold">{result.marginPct}%</div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="text-sm text-muted-foreground">Burn rate</div>
          <div className="mt-1 text-2xl font-semibold">{result.burn}</div>
        </div>
      </div>
    </div>
  );
}