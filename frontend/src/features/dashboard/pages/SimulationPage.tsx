import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, DollarSign, Percent } from "lucide-react";

export default function SimulationPage() {
  const [scenarioName, setScenarioName] = useState(
    "Augmentation des prix de 15%"
  );
  const [percentage, setPercentage] = useState(15);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Simulation Financière
        </h1>
        <p className="text-gray-600 mt-1">
          Créez des scénarios pour estimer l'impact financier de vos décisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Simulation Parameters */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm space-y-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Paramètres de Simulation
            </h3>

            {/* Scenario Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Nom du scénario
              </label>
              <input
                type="text"
                value={scenarioName}
                onChange={(e) => setScenarioName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              />
            </div>

            {/* Simulation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Type de simulation
              </label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent">
                <option>Augmentation de prix</option>
                <option>Réduction des coûts</option>
                <option>Nouveau produit</option>
                <option>Expansion marché</option>
              </select>
            </div>

            {/* Percentage */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Pourcentage d'augmentation
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="flex-1 accent-[#1E3A8A]"
                />
                <span className="text-lg font-semibold text-[#1E3A8A] w-12">
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Date de début
                </label>
                <input
                  type="date"
                  defaultValue="2024-01-08"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Date de fin
                </label>
                <input
                  type="date"
                  defaultValue="2025-07-31"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <Button className="w-full h-12 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Calculer la simulation
            </Button>
          </div>
        </div>

        {/* Results */}
          <div className="lg:col-span-2 space-y-6">
          {/* Result Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Chiffre d'Affaires Estimé
                </p>
                <div className="h-12 w-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-[#10B981]" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                1 725 000 FCFA
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#10B981]/10 text-[#10B981]">
                ↑ +15.0%
                <span className="text-gray-600 font-normal">
                  vs. 1 500 000 FCFA
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Marge Brute
                </p>
                <div className="h-12 w-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#10B981]" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                690 000 FCFA
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#10B981]/10 text-[#10B981]">
                ↑ +8.3%
                <span className="text-gray-600 font-normal">
                  vs. 637 500 FCFA
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Burn Rate Mensuel
                </p>
                <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Percent className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                -450 000 FCFA
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600">
                Aucun changement
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Impact sur le Stock
                </p>
                <div className="h-12 w-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#EF4444]" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                -5% / mois
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold bg-[#EF4444]/10 text-[#EF4444]">
                ↓ Écoulement plus rapide
              </div>
            </div>
          </div>

          {/* Impact Chart Placeholder */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Impact sur le Chiffre d'Affaires Mensuel
            </h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-2">
                  Graphique de simulation
                </p>
                <p className="text-sm text-gray-400">
                  Comparaison avant/après simulation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
