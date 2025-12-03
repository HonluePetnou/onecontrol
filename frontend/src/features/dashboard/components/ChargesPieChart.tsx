import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export interface ChargeItem {
  name: string;
  value: number;
  [key: string]: unknown;
}

const COLORS = ["#1E3A8A", "#22D3EE", "#10B981", "#6366F1", "#EF4444"];

export function ChargesPieChart({ data }: { data: ChargeItem[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-2 font-medium">Répartition des charges</div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}