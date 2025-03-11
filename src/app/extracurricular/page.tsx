import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getExtraCurricularPosts } from "@/api/extracurricular-service";

import { ExtraCurricularPostSection } from "@/components/extraCurricular";
import { getQueryClient } from "@/utils/get-query-client";

export default function ExtraCurricularPage() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["extra-curricular-posts"],
    queryFn: async () => await getExtraCurricularPosts(),
  });

  const state = dehydrate(queryClient);

  return (
    <HydrationBoundary state={state}>
      <ExtraCurricularPostSection />
    </HydrationBoundary>
  );
}
