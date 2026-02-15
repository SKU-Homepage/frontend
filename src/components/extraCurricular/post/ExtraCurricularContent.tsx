"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

import ExtraCurricularPost from "./ExtraCurricularPost";
import SearchAndSortSection from "../searchMenu/SearchAndSortSection";
import {
  getExtraCurricularPosts,
  type ExtraCurricularPost as ExtraCurricularPostType,
} from "@/api/extracurricular-service";

interface ExtraCurricularContentProps {
  initialData: ExtraCurricularPostType[];
  department: "ALL" | "GYOSU-HAKSEUB" | "JINLO_CHWIEOB" | "DAEHAK_HYEOKSIN";
}

export default function ExtraCurricularContent({
  initialData,
  department,
}: ExtraCurricularContentProps) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ["extra-curricular-posts", department],
    queryFn: ({ pageParam = 0 }) =>
      getExtraCurricularPosts(pageParam, department),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length < 10 ? undefined : allPages.length,
    initialData: {
      pages: [initialData],
      pageParams: [0],
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <SearchAndSortSection />
      <section className="mt-9 grid w-full grid-cols-2 gap-5 px-[4.6%]">
        {data?.pages.flatMap((page) =>
          page.map((post) => (
            <ExtraCurricularPost
              key={post.id}
              department={post.author}
              title={post.title}
              thumbnail={post.thumbnail}
              date={post.date}
              viewCount={post.viewCount}
              url={post.url}
              like={post.like}
            />
          ))
        )}
        <div ref={ref} className="h-0.5" />
      </section>
    </>
  );
}
