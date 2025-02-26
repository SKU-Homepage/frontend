"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/common/Loading";
import { loginHook } from "./loginHook";

export default function LoginRedirect() {
  const params = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    if (!code) return;

    const login = async () => {
      if (await loginHook(code)) location.href = "/";
    };

    login();
  }, [code]);

  return <Loading />;
}
