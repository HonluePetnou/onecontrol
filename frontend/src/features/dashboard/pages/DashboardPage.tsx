import { KPICard } from "@/components/custom/KPICard";
import { AlertCard } from "@/components/custom/AlertCard";
import {
  TrendingUp,
  DollarSign,
  CreditCard,
  Clock,
  Package,
  Users,
  Calendar,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  // Sample data for charts
  const revenueData = [
    { month: "Jan", revenue: 45000, burnRate: 38000 },
    { month: "Fév", revenue: 52000, burnRate: 39000 },
    { month: "Mar", revenue: 48000, burnRate: 41000 },
    { month: "Avr", revenue: 61000, burnRate: 42000 },
    { month: "Mai", revenue: 55000, burnRate: 40000 },
    { month: "Juin", revenue: 67000, burnRate: 43000 },
  ];

  const topProductsData = [
    { name: "Produit A", value: 45200 },
    { name: "Produit B", value: 38100 },
    { name: "Produit C", value: 29800 },
    { name: "Produit D", value: 25400 },
    { name: "Produit E", value: 18900 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Principal
          </h1>
          <p className="text-gray-600 mt-1">
            Aperçu de la performance de votre entreprise.
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <Calendar className="h-4 w-4" />
          Filtrer par date
        </Button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Chiffre d'Affaires"
          value="€125,780"
          change="+5.2%"
          trend="up"
          icon={DollarSign}
        />
        <KPICard
          title="Marge"
          value="€45,200"
          change="+2.1%"
          trend="up"
          icon={TrendingUp}
        />
        <KPICard
          title="Charges"
          value="€15,300"
          change="-1.5%"
          trend="down"
          icon={CreditCard}
        />
        <KPICard
          title="Runway"
          value="18 mois"
          change="+0.5 mois"
          trend="up"
          icon={Clock}
        />
        <KPICard
          title="Valeur du Stock"
          value="€89,500"
          change="-3.0%"
          trend="down"
          icon={Package}
        />
        <KPICard
          title="Clients Actifs"
          value="1,204"
          change="+12"
          trend="up"
          icon={Users}
        />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue and Burn Rate Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Évolution du CA et Burn Rate
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                strokeOpacity={0.2}
              />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "#E5E7EB",
                  borderRadius: "8px",
                  color: "#111827",
                }}
                itemStyle={{ color: "#111827" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#1E3A8A"
                strokeWidth={2}
                name="Chiffre d'Affaires"
                dot={{ fill: "#1E3A8A" }}
              />
              <Line
                type="monotone"
                dataKey="burnRate"
                stroke="#EF4444"
                strokeWidth={2}
                name="Burn Rate"
                dot={{ fill: "#EF4444" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products Chart */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Top 5 Produits
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topProductsData} layout="vertical">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                strokeOpacity={0.2}
              />
              <XAxis type="number" stroke="#9CA3AF" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#9CA3AF"
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "#E5E7EB",
                  borderRadius: "8px",
                  color: "#111827",
                }}
                itemStyle={{ color: "#111827" }}
              />
              <Bar dataKey="value" fill="#22D3EE" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alerts and Recommendations */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Alertes et Recommandations
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <AlertCard
            type="error"
            title="Stock bas"
            description='Le stock pour le "Produit A" est critiquement bas. Pensez à réapprovisionner.'
          />
          <AlertCard
            type="warning"
            title="Charges en hausse"
            description="Vos charges opérationnelles ont augmenté de 15% ce mois-ci par rapport au précédent."
          />
          <AlertCard
            type="success"
            title="Opportunité"
            description="Le client KOFCOM SARL n'a pas commandé depuis 60 jours. Proposez une promotion."
          />
        </div>
      </div>
    </div>
  );
}
