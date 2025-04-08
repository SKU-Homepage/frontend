"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Notifications from ".";
import { useNotificationList } from "@/hooks/notificationHooks";
import NontNtList from "./NotNtList";

const List = () => {
  const { data } = useSuspenseQuery(useNotificationList);

  return (
    <Notifications.List>
      {data.length ? data.map((item) => <Notifications.Item key={item.id} />) : <NontNtList />}
    </Notifications.List>
  );
};

export default List;
