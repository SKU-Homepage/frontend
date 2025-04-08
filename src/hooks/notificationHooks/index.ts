import { createPrivateApi } from "@/api/serverAxios";
import { queryOptions } from "@tanstack/react-query";

export const getNotifications = async (): Promise<NotificationType[] | []> => {
  try {
    const baseURL = "/fcm/alarm";
    const res = await (await createPrivateApi()).get(baseURL);
    return res.data.result.notificationDTOS;
  } catch {
    return [];
  }
};

export const useNotificationList = queryOptions({
  queryKey: ["time-table"],
  queryFn: getNotifications,
  staleTime: 1000 * 60 * 60,
  gcTime: 1000 * 60 * 60,
});

export type NotificationType = {
  id: number;
  title: string;
  type: string;
  time: string;
  isRead: boolean;
};
