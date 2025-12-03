export async function fetchDashboardSummary() {
  await delay(400);
  return {
    revenue: 520000,
    grossMarginPct: 38,
    fixedCosts: 120000,
    variableCosts: 180000,
    netProfit: 220000,
    runwayMonths: 8,
    deltas: { revenue: 5, margin: 2, profit: 3 },
  };
}

export async function fetchMonthlyRevenue() {
  await delay(400);
  return [
    { month: "Jan", revenue: 38000 },
    { month: "Feb", revenue: 42000 },
    { month: "Mar", revenue: 46000 },
    { month: "Apr", revenue: 48000 },
    { month: "May", revenue: 53000 },
    { month: "Jun", revenue: 56000 },
  ];
}

export async function fetchChargesBreakdown() {
  await delay(300);
  return [
    { name: "Fixes", value: 120000 },
    { name: "Variables", value: 180000 },
    { name: "Marketing", value: 30000 },
    { name: "Opex", value: 20000 },
  ];
}

export async function fetchTopProducts() {
  await delay(300);
  return [
    { name: "Produit A", value: 22000 },
    { name: "Produit B", value: 18000 },
    { name: "Produit C", value: 15000 },
    { name: "Produit D", value: 12000 },
    { name: "Produit E", value: 9000 },
  ];
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}