"use client";

import { Avatar, FasooThemeProvider } from "@mis/fasoo-fesubmodule";

export default function Test() {
  return (
    <FasooThemeProvider>
      <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" />
    </FasooThemeProvider>
  );
}
