import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#F9FAFB] overflow-hidden text-center px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#1E3A8A]/5 to-[#22D3EE]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Large 404 Text */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#1E3A8A] to-[#22D3EE] select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[150px] md:text-[200px] font-black leading-none text-[#1E3A8A]/5 blur-sm select-none -z-10">
            404
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Oups ! Vous semblez perdu.
          </h2>
          <p className="text-xl text-[#6B7280] max-w-lg mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée. Pas de
            panique, on vous ramène en lieu sûr.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate(-1)}
            className="h-12 px-8 text-lg border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A]/5 w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Retour
          </Button>
          <Link to="/">
            <Button
              size="lg"
              className="h-12 px-8 text-lg bg-[#1E3A8A] hover:bg-[#1E40AF] text-white shadow-lg shadow-blue-900/20 w-full sm:w-auto"
            >
              <Home className="mr-2 h-5 w-5" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
