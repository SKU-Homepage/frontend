"use server";

import { AxiosResponse } from "axios";
import { privateApi } from "./axios";

interface Notice {
  id: number;
  category: string;
  date: string;
  title: string;
  url: string;
  author: string;
  viewCount: number;
  image: string;
  like: boolean;
}

interface NoticeGetResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    skuNoticeList: Notice[];
  };
}

/**
 * 키워드와 Page를 이용해서 공지를 가져오는 함수
 * @param  {number} [page=0] - 가져올 페이지 (default값 0)
 * @param {string} [searchKeyword] - 가져올 키워드 (optional)
 * @returns {Promise<Notice[]>} - 공지 목록의 배열을 Promise로 반환
 */
export async function getNoticeByPageAndSearchKeyword(
  page: number,
  searchKeyword: string | undefined
): Promise<Notice[]> {
  // searchKeyword가 없는 경우
  if (typeof searchKeyword === "undefined") {
    const res: AxiosResponse<NoticeGetResponse> = await privateApi.get(
      `/api/notices/sku?page=${page}`
    );

    return res.data.result.skuNoticeList;
  }

  // searchKeyword가 있는 경우
  const res: AxiosResponse<NoticeGetResponse> = await privateApi.get(
    `/api/notices/sku?search_keyword=${searchKeyword}&page=${page}`
  );

  return res.data.result.skuNoticeList;
}
