import { privateApi } from "@/api/axios";
import { SubmitInfoType } from "@/constants/userInfo";
import { AxiosError } from "axios";

export const postUserInfo = async (userInfo: SubmitInfoType) => {
  const baseURL = "/mypage/sku/signup";

  try {
    const res = await privateApi.post(baseURL, { ...userInfo, agreement: true });
    return { success: true, data: res.data.isSuccess };
  } catch (error: unknown) {
    return handleRequestError(error);
  }
};

const handleRequestError = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    const { status, data } = error.response;
    if (status === 400) {
      alert(data.message);
      return;
    }
  }

  console.error("요청 중 오류 발생:", error);
  return { success: false, message: "요청 처리 중 오류가 발생했습니다." };
};
