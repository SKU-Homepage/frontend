"use client";

import Home from "@/components/home";
import { useProfile } from "@/hooks/profileHooks";
import { useQuery } from "@tanstack/react-query";

const Intro = () => {
  const { data } = useQuery(useProfile);

  return <Home.Header name={data?.name || "---"} />;
};

export default Intro;
