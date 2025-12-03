import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export default function MarketAnalysisPage() {
  const performanceData = [
    {
      metric: "Chiffre d'Affaires",
      you: "12 580 €",
      market: "12 273 €",
      difference: "+2.5%",
      trend: "up",
    },
    {
      metric: "Marge Brute",
      you: "4 150 €",
      market: "4 200 €",
      difference: "-1.2%",
      trend: "down",
    },
    {
      metric: "Panier Moyen",
      you: "85.40 €",
      market: "80.72 €",
      difference: "+5.8%",
      trend: "up",
    },
  ];

  const marketAlerts = [
    {
      type: "warning",
      title: "Hausse du prix des matières premières",
      description:
        "Le coût du coton a augmenté de 5% ce mois-ci. Cela pourrait impacter vos marges.",
    },
    {
      type: "info",
      title: "Nouvelle tendance : produit X",
      description:
        "La demande pour les produits écologiques est en forte croissance. Opportunité à saisir.",
    },
    {
      type: "success",
      title: "Rotation des stocks accélérée",
      description:
        "Vos concurrents écoulent leurs stocks 15% plus vite. Envisagez des promotions.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analyse du Marché
          </h1>
          <p className="text-gray-600 mt-1">
            Comparez vos performances avec les tendances actuelles du marché.
          </p>
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-sm">
            <option>30 derniers jours</option>
            <option>3 mois</option>
            <option>6 mois</option>
            <option>Année en cours</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm font-medium">
            Exporter les données
          </button>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Vos performances face au marché
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {performanceData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50"
            >
              <p className="text-sm font-medium text-gray-600 mb-4">
                {item.metric}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Vous
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {item.you}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">
                    Marché
                  </p>
                  <p className="text-2xl font-bold text-gray-600">
                    {item.market}
                  </p>
                </div>
              </div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                  item.trend === "up"
                    ? "bg-[#10B981]/10 text-[#10B981]"
                    : "bg-[#EF4444]/10 text-[#EF4444]"
                }`}
              >
                {item.trend === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {item.difference}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Trends and Alerts */}
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Tendances et Alertes du Marché
        </h3>
        <div className="space-y-4">
          {marketAlerts.map((alert, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl ${
                alert.type === "warning"
                  ? "bg-amber-50 border border-amber-100"
                  : alert.type === "info"
                  ? "bg-blue-50 border border-blue-100"
                  : "bg-emerald-50 border border-emerald-100"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 rounded-lg bg-white/50 ${
                    alert.type === "warning"
                      ? "text-amber-600"
                      : alert.type === "info"
                      ? "text-blue-600"
                      : "text-emerald-600"
                  }`}
                >
                  {alert.type === "warning" && (
                    <AlertTriangle className="h-5 w-5" />
                  )}
                  {alert.type === "info" && <Lightbulb className="h-5 w-5" />}
                  {alert.type === "success" && (
                    <TrendingUp className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1.5 ${
                      alert.type === "warning"
                        ? "text-amber-800"
                        : alert.type === "info"
                        ? "text-blue-800"
                        : "text-emerald-800"
                    }`}
                  >
                    {alert.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {alert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Points forts
          </h3>
          <ul className="space-y-3">
            {[
              "Votre CA est supérieur à la moyenne du marché",
              "Excellent panier moyen comparé aux concurrents",
              "Fidélisation client au-dessus de la norme",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="h-4 w-4 text-[#10B981]" />
                </div>
                <span className="text-gray-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Points d'amélioration
          </h3>
          <ul className="space-y-3">
            {[
              "Marge brute légèrement en dessous du marché",
              "Temps de rotation des stocks à optimiser",
              "Taux de conversion à améliorer",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="h-4 w-4 text-[#F59E0B]" />
                </div>
                <span className="text-gray-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
