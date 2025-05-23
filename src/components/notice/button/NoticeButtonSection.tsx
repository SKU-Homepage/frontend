"use client";

import { useEffect } from "react";

import NoticeBtn from "./NoticeBtn";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getNoticeByPageAndSearchKeyword } from "@/api/notice-service";
const NoticeButtonSection = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["notices"],
    queryFn: ({ pageParam = 0 }) => getNoticeByPageAndSearchKeyword(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.length < 10 ? undefined : allPages.length),
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="px-6">
      {data?.pages.map((page) =>
        page.map((notice) => (
          <NoticeBtn
            key={notice.id}
            noticeTitle={notice.title}
            type="normal"
            department={notice.author}
            date={notice.date}
            url={notice.url}
          />
        ))
      )}
      <div ref={ref}></div>
    </section>
  );
};

export default NoticeButtonSection;
