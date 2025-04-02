"use client";

import { useProfile } from "@/hooks/profileHooks";
import { useSuspenseQuery } from "@tanstack/react-query";

const UserInfo = () => {
  const { data } = useSuspenseQuery(useProfile);

  return (
    <div className="mb-[7px] flex flex-col justify-end gap-[10px] leading-normal">
      <h2 className="text-[18px] font-semibold">{data?.name}</h2>
      <div className="text-[11px] font-medium">
        <p>
          {data?.college} {data?.department} {data?.major}
        </p>
        <p>
          {data?.studentNumber} {data?.grade}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
