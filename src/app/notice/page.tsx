import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Header, NoticeButtonSection, TimeInformation } from "@/components/notice";

import { getNoticeByPageAndSearchKeyword } from "@/app/actions/notice";
import { getQueryClient } from "@/utils/get-query-client";

export const dynamic = "force-dynamic";

export default function Notice() {
  const queryClient = getQueryClient();

  queryClient.prefetchInfiniteQuery({
    queryKey: ["notice"],
    queryFn: ({ pageParam = 0 }) => getNoticeByPageAndSearchKeyword(pageParam),
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
