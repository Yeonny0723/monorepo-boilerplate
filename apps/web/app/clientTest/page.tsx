"use client";

import { Avatar, FasooSkeleton } from "@mis/fasoo-fesubmodule";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FasooThemeProvider = dynamic(() => import("@mis/fasoo-fesubmodule").then(mod => mod.FasooThemeProvider), {
  ssr: false,
}); // 라이브러리가 사용하는 context provider가 ssr 환경에서 설정되지 않아 발생하는 문제 ㅠㅠ
// https://github.com/chakra-ui/chakra-ui/discussions/8521

export default function Test() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <FasooThemeProvider>
      <FasooSkeleton isLoaded={false}>Hola</FasooSkeleton>
      <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" />
    </FasooThemeProvider>
  );
}
