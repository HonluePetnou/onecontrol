import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  CheckCircle2,
  Star,
  Globe,
  TrendingUp,
  Clock,
  Smartphone,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "advantages", "features"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const advantages = [
    {
      icon: Globe,
      title: "Accessible partout",
      description:
        "Accédez à vos données depuis n'importe quel appareil, où que vous soyez. Application web responsive et mobile-friendly.",
    },
    {
      icon: Users,
      title: "Collaboration simplifiée",
      description:
        "Invitez vos collaborateurs et travaillez ensemble en temps réel. Gestion des rôles et permissions avancée.",
    },
    {
      icon: TrendingUp,
      title: "Évolutif",
      description:
        "Une solution qui grandit avec votre entreprise, de la startup à la PME. Scaling automatique et illimité.",
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description:
        "Automatisez vos tâches répétitives et gagnez jusqu'à 10 heures par semaine sur votre gestion.",
    },
    {
      icon: Smartphone,
      title: "Interface intuitive",
      description:
        "Design moderne et épuré. Aucune formation nécessaire, votre équipe est opérationnelle en quelques minutes.",
    },
    {
      icon: Headphones,
      title: "Support réactif",
      description:
        "Notre équipe d'experts est disponible 7j/7 pour vous accompagner. Réponse garantie en moins de 2h.",
    },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Analytics Avancés",
      description:
        "Tableaux de bord personnalisables avec KPIs en temps réel. Visualisez vos performances et prenez des décisions éclairées.",
      details: [
        "Rapports automatisés",
        "Graphiques interactifs",
        "Export PDF/Excel",
        "Alertes personnalisées",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Maximale",
      description:
        "Chiffrement end-to-end, conformité RGPD, et sauvegardes automatiques quotidiennes. Vos données sont en sécurité.",
      details: [
        "Authentification 2FA",
        "Backup automatique",
        "Conformité RGPD",
        "Audit logs complets",
      ],
    },
    {
      icon: Zap,
      title: "Automatisation",
      description:
        "Créez des workflows personnalisés et automatisez vos processus métier. Intégrations avec vos outils préférés.",
      details: [
        "Workflows personnalisés",
        "Intégrations API",
        "Notifications automatiques",
        "Synchronisation en temps réel",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      {/* Header / Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-white/95 backdrop-blur transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => scrollToSection("home")}
          >
            <div className="h-10 w-10 rounded-xl bg-[#22D3EE] flex items-center justify-center shadow-lg">
              <span className="text-[#1E3A8A] font-bold text-xl">O</span>
            </div>
            <span className="text-[#111827] font-bold text-xl">OneControl</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors font-medium ${
                activeSection === "home"
                  ? "text-[#1E3A8A] font-semibold"
                  : "text-[#6B7280] hover:text-[#1E3A8A]"
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className={`transition-colors font-medium ${
                activeSection === "advantages"
                  ? "text-[#1E3A8A] font-semibold"
                  : "text-[#6B7280] hover:text-[#1E3A8A]"
              }`}
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`transition-colors font-medium ${
                activeSection === "features"
                  ? "text-[#1E3A8A] font-semibold"
                  : "text-[#6B7280] hover:text-[#1E3A8A]"
              }`}
            >
              Fonctionnalités
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-[#1E3A8A]">
                Se connecter
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
                Commencer gratuitement
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E5E7EB]"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5 text-[#111827]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-white border-l border-[#E5E7EB] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <span className="font-semibold text-[#111827]">Menu</span>
              <button
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB]"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5 text-[#111827]" />
              </button>
            </div>
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left transition-colors font-medium ${
                  activeSection === "home"
                    ? "text-[#1E3A8A] font-semibold"
                    : "text-[#6B7280] hover:text-[#1E3A8A]"
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className={`block w-full text-left transition-colors font-medium ${
                  activeSection === "advantages"
                    ? "text-[#1E3A8A] font-semibold"
                    : "text-[#6B7280] hover:text-[#1E3A8A]"
                }`}
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`block w-full text-left transition-colors font-medium ${
                  activeSection === "features"
                    ? "text-[#1E3A8A] font-semibold"
                    : "text-[#6B7280] hover:text-[#1E3A8A]"
                }`}
              >
                Fonctionnalités
              </button>
              <div className="pt-4 space-y-2">
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
                    Commencer gratuitement
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 bg-linear-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white relative overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Pilotez votre entreprise avec{" "}
                  <span className="text-[#22D3EE]">sérénité</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-xl">
                  La solution tout-en-un pour gérer vos finances, vos opérations
                  et vos équipes. Simple, puissant et conçu pour votre
                  croissance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/auth/register">
                    <Button
                      size="lg"
                      className="h-14 px-8 text-lg bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-[#1E3A8A] font-semibold shadow-xl w-full sm:w-auto"
                    >
                      Essayer gratuitement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="h-14 px-8 text-lg border-2 border-white text-white hover:bg-white/10 rounded-md font-semibold transition-colors w-full sm:w-auto"
                  >
                    Découvrir
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm text-blue-100 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22D3EE]" />
                    Aucune carte requise
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22D3EE]" />
                    Annulation à tout moment
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative mt-12 lg:mt-0">
                <div className="absolute -inset-1 bg-linear-to-r from-[#22D3EE] to-[#1E3A8A] rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border  bg-[#111827] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/screen.png"
                    alt="OneControl Dashboard Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="py-20 bg-[#F9FAFB]">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
                Pourquoi choisir OneControl ?
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Plus de 10,000 entreprises nous font confiance pour leur gestion
                quotidienne
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#E5E7EB] hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-[#22D3EE]/10 flex items-center justify-center mb-4">
                    <advantage.icon className="h-6 w-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#111827]">
                    {advantage.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-[#22D3EE] font-bold tracking-wider text-sm uppercase">
                    Pourquoi nous choisir ?
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
                    Conçu par des Africains, pour les Africains.
                  </h2>
                  <p className="text-xl text-[#6B7280] leading-relaxed">
                    Nous ne sommes pas juste un autre logiciel. Nous sommes
                    votre partenaire de croissance, profondément ancré dans les
                    réalités de votre marché.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex gap-5">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#111827] mb-2">
                        Hyper-localisé
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        Intégrations natives avec les banques, les systèmes
                        fiscaux et les solutions de paiement mobile du
                        continent.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-5">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#111827] mb-2">
                        Support Humain
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        Nos équipes sont basées sur le continent, parlent votre
                        langue et comprennent vos défis quotidiens.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-5">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-[#22D3EE]/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-[#1E3A8A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#111827] mb-2">
                        Vision Panafricaine
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        Nous facilitons votre expansion régionale grâce à nos
                        outils de conformité multi-pays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
                  {/* Using the dashboard preview as a placeholder for now, or a generic icon if preferred. 
                      The image showed a placeholder icon. I'll use the screen.png for better visual. */}
                  <img
                    src="/screen.png"
                    alt="Features Illustration"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
                Ce qu'ils disent de nous
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Découvrez les témoignages de nos clients satisfaits
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FCD34D] text-[#FCD34D]"
                    />
                  ))}
                </div>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  "OneControl a révolutionné notre façon de gérer nos projets.
                  L'interface est intuitive et le support est excellent. Nous
                  avons gagné 15h par semaine !"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827]">
                      Sophie Martin
                    </p>
                    <p className="text-sm text-[#6B7280]">CEO, TechStart</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FCD34D] text-[#FCD34D]"
                    />
                  ))}
                </div>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  "Enfin un outil qui regroupe tout ce dont j'ai besoin. Les
                  rapports automatisés me font gagner un temps précieux sur mes
                  analyses mensuelles."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white font-bold">
                    TD
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827]">
                      Thomas Dubois
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Directeur Financier, InnovateCorp
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-8 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FCD34D] text-[#FCD34D]"
                    />
                  ))}
                </div>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  "La simplicité d'utilisation est bluffante. Mon équipe l'a
                  adopté en moins d'une semaine. Le ROI a été immédiat !"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white font-bold">
                    ML
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827]">
                      Marie Laurent
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Chef de Projet, Digital Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#22D3EE] rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Rejoignez des milliers d'entreprises qui ont déjà fait confiance à
              OneControl pour leur croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/register">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-[#1E3A8A] font-semibold shadow-xl"
                >
                  Démarrer gratuitement
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#22D3EE] flex items-center justify-center">
                  <span className="text-[#1E3A8A] font-bold text-xl">O</span>
                </div>
                <span className="font-bold text-xl">OneControl</span>
              </div>
              <p className="text-[#9CA3AF]">
                La solution tout-en-un pour piloter votre entreprise avec
                sérénité.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white"
                  >
                    Fonctionnalités
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>
                  <a href="#" className="hover:text-white">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Carrières
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li>
                  <a href="#" className="hover:text-white">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#374151] text-center text-[#9CA3AF]">
            <p>© 2024 OneControl. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
