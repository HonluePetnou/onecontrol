import { create } from "zustand";
import { fetchDashboardSummary, fetchMonthlyRevenue, fetchChargesBreakdown, fetchTopProducts } from "@/lib/api/mock";

interface Summary {
  revenue: number;
  grossMarginPct: number;
  fixedCosts: number;
  variableCosts: number;
  netProfit: number;
  runwayMonths: number;
  deltas: { revenue: number; margin: number; profit: number };
}

interface TopItem { name: string; value: number; }

interface DashboardState {
  loading: boolean;
  summary: Summary | null;
  monthlyRevenue: { month: string; revenue: number }[];
  charges: { name: string; value: number }[];
  topProducts: TopItem[];
  load(): Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  loading: false,
  summary: null,
  monthlyRevenue: [],
  charges: [],
  topProducts: [],
  async load() {
    set({ loading: true });
    const [summary, monthlyRevenue, charges, topProducts] = await Promise.all([
      fetchDashboardSummary(),
      fetchMonthlyRevenue(),
      fetchChargesBreakdown(),
      fetchTopProducts(),
    ]);
    set({ summary, monthlyRevenue, charges, topProducts, loading: false });
  },
}));