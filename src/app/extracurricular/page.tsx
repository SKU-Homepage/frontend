import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getExtraCurricularPosts } from "@/api/extracurricular-service";

import { ExtraCurricularPostSection } from "@/components/extraCurricular";
import { getQueryClient } from "@/utils/get-query-client";

export const dynamic = "force-dynamic";

export default async function ExtraCurricularPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["extra-curricular-posts"],
    queryFn: getExtraCurricularPosts,
  });

  const state = dehydrate(queryClient);

  return (
    <HydrationBoundary state={state}>
      <ExtraCurricularPostSection />
    </HydrationBoundary>
  );
}
