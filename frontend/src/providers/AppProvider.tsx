import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/query/client";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
