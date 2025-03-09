import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getExtraCurricularPosts } from "@/api/extracurricular-service";
import { getQueryClient } from "@/utils/get-query-client";

import { ExtraCurricularPostSection } from "@/components/extraCurricular";

export default function ExtraCurricularPage() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["extra-curricular-posts"],
    queryFn: getExtraCurricularPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExtraCurricularPostSection />
    </HydrationBoundary>
  );
}
