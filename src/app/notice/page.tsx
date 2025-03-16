import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Header, NoticeButtonSection, TimeInformation } from "@/components/notice";

import { getNoticeByPageAndSearchKeyword } from "@/api/notice-service";
import { getQueryClient } from "@/utils/get-query-client";

export default function Notice() {
  const queryClient = getQueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["notice"],
    queryFn: async ({ pageParam = 0 }) => await getNoticeByPageAndSearchKeyword(pageParam),
    initialPageParam: 0,
  });

  return (
    <>
      <Header />
      <TimeInformation />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoticeButtonSection />
      </HydrationBoundary>
    </>
  );
}
