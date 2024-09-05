"use server";

import { EmpInfo } from "@prisma/client";
import db from "../../lib/db";

export async function getTotalEmp() {
  await sleep(2000);
  return await db.empInfo.count();
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function searchEmp({
  emailAddr,
  deptCode,
  searchword,
}: {
  emailAddr: string;
  deptCode: string;
  searchword: string;
}): Promise<EmpInfo[]> {
  try {
    await sleep(2000);
    return await db.$queryRaw`EXEC dbo.HR_EMP_SEARCH @LOG_ID = ${emailAddr}, @DEPT_CODE = ${deptCode}, @SEARCH_TXT = ${searchword}`;
  } catch (error) {
    // 로그 남기기
    console.error("Error executing HR_EMP_SEARCH procedure:", error);
    // 클라이언트 처리
    throw new Error("인원 조회 실패");
  }
}
