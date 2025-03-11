"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import ExtraCurricularPost from "./ExtraCurricularPost";
import { getExtraCurricularPosts } from "@/api/extracurricular-service";

const ExtraCurricularPostSection = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["extra-curricular-posts"],
    queryFn: async () => await getExtraCurricularPosts(),
  });

  return (
    <section className="mt-9 grid w-full grid-cols-2 gap-5 px-[4.6%]">
      {data.map((post) => (
        <ExtraCurricularPost
          key={post.id}
          department={post.department}
          title={post.title}
          thumbnail={post.thumbnail}
          date={post.date}
        />
      ))}
    </section>
  );
};

export default ExtraCurricularPostSection;
