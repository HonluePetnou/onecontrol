export default function SettingsPage() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="font-medium">Paramètres</div>
      <p className="mt-2 text-sm text-muted-foreground">
        Préférences de l’entreprise, multidevise (CFA par défaut), exports CSV/PDF et intégrations à venir.
      </p>
    </div>
  );
}