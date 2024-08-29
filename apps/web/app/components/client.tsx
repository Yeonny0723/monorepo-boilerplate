"use client";
import { Avatar, FasooThemeProvider } from "@mis/fasoo-fesubmodule";
import { add } from "@repo/math/add";
import dynamic from "next/dynamic";

// 클라이언트 사이드에서만 로드할 컴포넌트

export default function ClientComponent() {
  return (
    <FasooThemeProvider>
      <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" />
    </FasooThemeProvider>
  );
}
