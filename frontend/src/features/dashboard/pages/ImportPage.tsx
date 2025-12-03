import { Button } from "@/components/ui/button";

export default function ImportPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Import</h2>
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Importez vos données de ventes et inventaire (CSV, Excel).
        </p>
        <div className="mt-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Choisir un fichier
          </Button>
        </div>
      </div>
    </div>
  );
}