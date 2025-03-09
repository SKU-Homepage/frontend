import { AxiosResponse } from "axios";
import { publicApi } from "./axios";

interface ExtraCurricularPost {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  department: string;
  date: string;
}

interface ExtranCurricularGetResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: {
    ecNoticeList: ExtraCurricularPost[];
  };
}

export async function getExtraCurricularPosts(): Promise<ExtraCurricularPost[]> {
  const res: AxiosResponse<ExtranCurricularGetResponse> =
    await publicApi.get<ExtranCurricularGetResponse>("/api/notices/sku/extra-curricular");

  return res.data.result.ecNoticeList;
}
