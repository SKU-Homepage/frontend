"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import type * as React from "react";
import { getQueryClient } from "./get-query-client";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration> {children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
