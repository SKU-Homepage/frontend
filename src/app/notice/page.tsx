import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Header, NoticeButtonSection, TimeInformation } from "@/components/notice";

import { getNoticeByPageAndSearchKeyword } from "@/app/actions/notice";
import { getQueryClient } from "@/utils/get-query-client";

export default async function Notice() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
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
