"use client";

import { getExtraCurricularPosts } from "@/api/extracurricular-service";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import ExtraCurricularPost from "@/components/extraCurricular/post/ExtraCurricularPost";

export default function ExtraCurricularByDepartmentPage() {
  const pathname = usePathname();
  const department = (pathname?.split("/")[2] ?? "ALL") as
    | "ALL"
    | "GYOSU-HAKSEUB"
    | "JINLO_CHWIEOB"
    | "DAEHAK_HYEOKSIN";

  const { ref, inView } = useInView();

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["extra-curricular-posts", pathname.split("/")[2]],
    queryFn: ({ pageParam = 0 }) => getExtraCurricularPosts(pageParam, department),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.length < 10 ? undefined : allPages.length),
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
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
  );
}
