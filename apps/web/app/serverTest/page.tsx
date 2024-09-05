import { Suspense } from "react";
import { getTotalEmp, searchEmp } from "./actions";
import CustomSkeleton from "./CustomSkeleton";

export default function ServerComponent() {
  return (
    <div>
      <div>그 외 서버 컴포넌트 </div>
      {/* <CustomSkeleton /> */}
      <Suspense fallback={<CustomSkeleton />}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

async function DataComponent() {
  const [empData, empCount] = await Promise.all([
    searchEmp({ emailAddr: "kkjuyeon@fasoo.com", deptCode: "3100300", searchword: "용근" }),
    getTotalEmp(),
  ]);
  return (
    <div>
      <span>직원: {JSON.stringify(empData)}</span>
      <span>인원 수: {empCount}</span>
    </div>
  );
}
