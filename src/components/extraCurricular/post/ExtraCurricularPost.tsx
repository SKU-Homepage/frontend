import Image from "next/image";

const ExtraCurricularPost = () => {
  return (
    <button>
      <article>
        <figure className="relative h-48 w-full">
          <div className="h-[150px] w-full bg-blue-400" />
          <button className="absolute top-3 right-3">
            <Image src="/images/extracurricular/favorite.png" alt="찜" width={11} height={11} />
          </button>
          <figcaption className="mt-4 text-left text-[14px] font-semibold text-[#143967]">
            자기성장 프로그램
          </figcaption>
        </figure>

        <div>
          <p className="text-left text-[10px] text-[#626262]">교수학습 지원센터</p>

          <div className="flex items-center justify-between">
            <p className="text-left text-[10px] text-[#B0B0B0]"> 2025.01.08 ~ 2025.1.10</p>
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
    </button>
  );
};

export default ExtraCurricularPost;
