"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import ExtraCurricularPost from "./ExtraCurricularPost";
import { getExtraCurricularPosts } from "@/api/extracurricular-service";

const ExtraCurricularPostSection = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["extra-curricular-posts"],
    queryFn: getExtraCurricularPosts,
  });

  return (
    <section className="mt-9 grid w-full grid-cols-2 gap-5 px-[4.6%]">
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
      <ExtraCurricularPost />
    </section>
  );
};

export default ExtraCurricularPostSection;
