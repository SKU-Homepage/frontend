import P from "@/components/profile";
import ProfileImg from "./ProfileImg";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/get-query-client";
import { useProfile } from "@/hooks/profileHooks";
import UserInfo from "./UserInfo";

const UserInfoSection = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(useProfile);

  return (
    <P.InfoWrapper>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileImg />
        <UserInfo />
      </HydrationBoundary>
    </P.InfoWrapper>
  );
};

export default UserInfoSection;
