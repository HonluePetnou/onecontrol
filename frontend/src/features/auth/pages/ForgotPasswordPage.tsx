import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot password data:", data);
    // TODO: Implement forgot password logic
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        to="/auth/login"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à la connexion
      </Link>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Mot de passe oublié ?
        </h1>
        <p className="text-muted-foreground">
          Entrez votre adresse e-mail et nous vous enverrons un code de
          vérification.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adresse e-mail
          </label>
          <Input
            type="email"
            placeholder="entrez votre email"
            icon={<Mail className="h-5 w-5" />}
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full h-12 text-base">
          Envoyer le code
        </Button>
      </form>

      {/* Help Text */}
      <div className="text-center text-sm text-gray-600">
        Vous recevrez un code de vérification à 6 chiffres par e-mail.
      </div>
    </div>
  );
}
