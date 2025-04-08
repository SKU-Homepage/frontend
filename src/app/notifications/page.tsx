import N from "@/components/notifications";
import HeaderSection from "@/components/notifications/HeaderSection";
import List from "@/components/notifications/List";
import { useNotificationList } from "@/hooks/notificationHooks";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Notifications() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(useNotificationList);

  return (
    <N>
      <HeaderSection />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <List />
      </HydrationBoundary>
    </N>
  );
}
