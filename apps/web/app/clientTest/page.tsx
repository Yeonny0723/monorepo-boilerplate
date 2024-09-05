"use client";

import { Avatar } from "@mis/fasoo-fesubmodule";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { getTotalEmp, searchEmp } from "../serverTest/actions";
import { EmpInfo } from "@prisma/client";

const FasooThemeProvider = dynamic(() => import("@mis/fasoo-fesubmodule").then(mod => mod.FasooThemeProvider), {
  ssr: false,
}); // 라이브러리가 사용하는 context provider가 ssr 환경에서 설정되지 않아 발생하는 문제 ㅠㅠ
// https://github.com/chakra-ui/chakra-ui/discussions/8521

export default function ClientComponent() {
  return (
    <FasooThemeProvider>
      <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" />
      {/* 부분 suspense가 안됌 */}
      <Suspense fallback={"부분 로딩 중..."}>
        <DataComponent />
      </Suspense>
    </FasooThemeProvider>
  );
}

function DataComponent() {
  const [empData, setEmpData] = useState<EmpInfo[]>();
  const [empCount, setEmpCount] = useState<number>();

  useEffect(() => {
    // 클라이언트에서 호출하니 캐싱이 안돼
    // 로딩 중일 때 상태를 tanstack 쿼리를 쓰거나 내부적으로 상태값을 선언해 확인하는 방법...
    // 그런데 서버 컴포넌트에서 처리 시 Suspense 모드로 로딩 fallback 노출 가능!
    searchEmp({ emailAddr: "kkjuyeon@fasoo.com", deptCode: "3100300", searchword: "용근" }).then(res =>
      setEmpData(res),
    );
    getTotalEmp().then(res => setEmpCount(res));
  }, []);

  return (
    <div>
      <span>직원: {JSON.stringify(empData)}</span>
      <span>인원 수: {empCount}</span>
    </div>
  );
}
