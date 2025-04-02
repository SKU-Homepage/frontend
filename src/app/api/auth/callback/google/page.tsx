"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import { loginHook } from "./loginHook";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  registered?: boolean;
}

export default function LoginRedirect() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCode(params.get("code"));
  }, []);

  useEffect(() => {
    if (!code) return;

    const login = async () => {
      const token: string = await loginHook(code);

      if (token.length < 30) {
        alert(token);
        location.href = "/login";
        return;
      }
      const decoded: DecodedToken = jwtDecode(token); // JWT 디코딩
      const isRegistered = decoded.registered;

      if (isRegistered) location.href = "/";
      else location.href = "/getInfo";
    };

    login();
  }, [code]);

  return <Loading />;
}
