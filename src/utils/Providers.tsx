"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { getQueryClient } from "./get-query-client";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  const [mswReady, setMswReady] = useState(process.env.NODE_ENV !== "development");

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@/mocks").then(({ initMocks }) => initMocks().then(() => setMswReady(true)));
    }
  }, []);

  if (!mswReady) return null;

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration> {children}</ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </JotaiProvider>
  );
}
