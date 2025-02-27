"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import { loginHook } from "./loginHook";

export default function LoginRedirect() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCode(params.get("code"));
  }, []);

  useEffect(() => {
    if (!code) {
      console.log("code값이 없습니다.");
      return;
    }

    const login = async () => {
      if (await loginHook(code)) location.href = "/";
    };

    login();
  }, [code]);

  return <Loading />;
}
