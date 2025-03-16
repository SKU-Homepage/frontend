"use client";

import { useEffect, useState } from "react";

import NoticeBtn from "./NoticeBtn";
import NoticeModal from "../modal/NoticeModal";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getNoticeByPageAndSearchKeyword } from "@/app/actions/notice";
import { useInView } from "react-intersection-observer";

const NoticeButtonSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: ["notice"],
    queryFn: ({ pageParam = 0 }) => getNoticeByPageAndSearchKeyword(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (allPages.length <= 9 ? allPages.length : undefined),
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <section>
      {data.pages.map((page) =>
        page.map((notice) => (
          <NoticeBtn
            key={notice.id}
            noticeTitle={notice.title}
            type="normal"
            department={notice.author}
            onClick={() => setIsOpen(true)}
          />
        ))
      )}
      <NoticeModal isOpen={isOpen} onClose={setIsOpen} />
      <div ref={ref}></div>
    </section>
  );
};

export default NoticeButtonSection;
