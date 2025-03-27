"use client";

import Image from "next/image";

interface ExtraCurricularPostProps {
  date: string;
  department: string;
  thumbnail?: string;
  title: string;
}

const ExtraCurricularPost = ({ date, department, thumbnail, title }: ExtraCurricularPostProps) => {
  return (
    <article>
      <figure className="relative h-48 w-full">
        <Image
          src={thumbnail ? thumbnail : "/images/extracurricular/default.png"}
          alt="썸네일 사진"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            height: "130px",
            width: "100%",
            objectFit: "fill",
          }}
          // placeholder="blur"
        />
        {/* <button className="absolute top-3 right-3">
          <Image src="/images/extracurricular/favorite.png" alt="찜" width={11} height={11} />
        </button> */}
        <figcaption className="mt-4 text-left text-[14px] font-semibold text-[#143967]">
          {title}
        </figcaption>
      </figure>

      <div>
        <p className="text-left text-[10px] text-[#626262]">{department}</p>

        <div className="flex items-center justify-between">
          <p className="text-left text-[10px] text-[#B0B0B0]"> {date}</p>
          <div className="flex">
            <div className="mr-1 flex items-center justify-center">
              <Image
                src="/images/extracurricular/favoriteCount.png"
                width={5}
                height={7}
                alt="찜 갯수"
                style={{
                  width: "7px",
                  height: "7px",
                }}
              />
              <p className="ml-0.5 text-[6px]">10</p>
            </div>
            <div className="flex">
              <Image
                src="/images/extracurricular/showCount.png"
                width={5}
                height={7}
                alt="보기 갯수"
                style={{
                  width: "7px",
                  height: "7px",
                }}
              />
              <p className="ml-0.5 text-[6px]">10</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExtraCurricularPost;
