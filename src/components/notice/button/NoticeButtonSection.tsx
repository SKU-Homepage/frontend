"use client";

import { useEffect } from "react";

import NoticeBtn from "./NoticeBtn";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getExtraCurricularPosts } from "@/api/extracurricular-service";

const NoticeButtonSection = () => {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["notices"],
    queryFn: ({ pageParam = 0 }) => getExtraCurricularPosts(pageParam),
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
            date={notice.date}
            type="normal"
            department={notice.author}
            url={notice.url}
          />
        ))
      )}

      <div ref={ref} className="h-0.5"></div>
    </section>
  );
};

export default NoticeButtonSection;
