import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Building, Bell, Globe } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profil", icon: User },
    { id: "business", label: "Business", icon: Building },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "integrations", label: "Intégrations", icon: Globe },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Paramètres
        </h1>
        <p className="text-gray-600 mt-1">
          Gérez vos préférences et paramètres de compte
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-[#1E3A8A] text-[#1E3A8A]"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="rounded-2xl bg-white p-8 shadow-sm space-y-8 border border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Informations personnelles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  defaultValue="Moussa Diop"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  defaultValue="moussa.diop@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                />
          </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#111827] mb-6">
              Préférences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#111827]">Langue</p>
                  <p className="text-sm text-[#6B7280]">
                    Choisissez votre langue préférée
                  </p>
                </div>
                <select className="px-4 py-2 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent">
                  <option>Français</option>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-[#E5E7EB]">
                <div>
                  <p className="font-medium text-[#111827]">
                    Notifications par e-mail
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Recevez des notifications sur votre email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1E3A8A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#E5E7EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A8A]"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Annuler</Button>
            <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
              Enregistrer les modifications
            </Button>
          </div>
        </div>
      )}

      {/* Business Tab */}
      {activeTab === "business" && (
        <div className="rounded-2xl bg-white p-8 shadow-sm space-y-6 border border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Informations de l'entreprise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  defaultValue="KOFCOM SARL"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Secteur d'activité
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent">
                  <option>Commerce de détail</option>
                  <option>Services</option>
                  <option>Manufacturing</option>
                  <option>Technologie</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Adresse
                </label>
                <input
                  type="text"
                  defaultValue="Dakar, Sénégal"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Annuler
            </Button>
            <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
              Enregistrer
            </Button>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Préférences de notification
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Alertes de stock",
                description: "Recevez des alertes quand le stock est bas",
              },
              {
                title: "Rapports hebdomadaires",
                description: "Résumé hebdomadaire de vos performances",
              },
              {
                title: "Nouvelles commandes",
                description: "Notification pour chaque nouvelle commande",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#1E3A8A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A8A]"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === "integrations" && (
        <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Intégrations disponibles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Google Analytics", status: "connected" },
              { name: "Stripe", status: "not-connected" },
              { name: "Mailchimp", status: "connected" },
              { name: "Slack", status: "not-connected" },
            ].map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {integration.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {integration.status === "connected"
                      ? "Connecté"
                      : "Non connecté"}
                  </p>
                </div>
                <Button
                  variant={
                    integration.status === "connected" ? "outline" : "default"
                  }
                  className={
                    integration.status === "connected"
                      ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "bg-[#1E3A8A] hover:bg-[#1E40AF] text-white"
                  }
                >
                  {integration.status === "connected"
                    ? "Déconnecter"
                    : "Connecter"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
