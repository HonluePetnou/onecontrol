import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] relative overflow-hidden">
        {/* Decorative animated blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-[#22D3EE] flex items-center justify-center shadow-lg">
              <span className="text-[#1E3A8A] font-bold text-2xl">O</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              OneControl
            </span>
          </div>

          {/* Tagline */}
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
              Pilotez votre entreprise avec sérénité.
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              La solution tout-en-un pour gérer vos finances, vos opérations et
              vos équipes.
            </p>
          </div>

          {/* Footer */}
          <div className="text-sm text-blue-200">
            © 2024 OneControl. Tous droits réservés.
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-[#F9FAFB]">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
