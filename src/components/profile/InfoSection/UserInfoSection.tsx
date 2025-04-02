import P from "@/components/profile";
import ProfileImg from "./ProfileImg";
import UserInfo from "./userInfo/UserInfo";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/get-query-client";
import { useProfile } from "@/hooks/profileHooks";

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
