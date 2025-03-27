import { AxiosResponse } from "axios";
import { privateApi } from "./axios";

interface ExtraCurricularPost {
  id: number;
  title: string;
  author: string;
  url: string;
  thumbnail: string;
  category: string;
  date: string;
  like: boolean;
  viewCount: number;
}

interface ExtraCurricularGetResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: {
    ecNoticeList: ExtraCurricularPost[];
  };
}

export async function getExtraCurricularPosts(
  page = 0,
  search_keyword?: string,
  author: "ALL" | "GYOSU-HAKSEUB" | "JINLO_CHWIEOB" | "DAEHAK_HYEOKSIN" = "ALL",
  sort_index: "DATE" | "VIEW_COUNT" | "LIKE_COUNT" = "DATE"
): Promise<ExtraCurricularPost[]> {
  // search_keyword 없는 경우
  if (search_keyword === undefined) {
    const res: AxiosResponse<ExtraCurricularGetResponse> =
      await privateApi.get<ExtraCurricularGetResponse>(
        `/ec-notices/sku?page=${page}&author=${author}&sort_index=${sort_index}`
      );

    return res.data.result.ecNoticeList;
  }

  // search_keyword 있는 경우
  const res: AxiosResponse<ExtraCurricularGetResponse> =
    await privateApi.get<ExtraCurricularGetResponse>(
      `/ec-notices/sku?page=${page}&author=${author}&sort_index=${sort_index}&search_keyword=${search_keyword}`
    );

  return res.data.result.ecNoticeList;
}
