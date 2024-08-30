"use client";

import { ChakraProvider, CircularProgress } from "@chakra-ui/react";
import { FasooThemeProvider, Avatar } from "@mis/fasoo-fesubmodule";
import { useEffect, useState } from "react";

export default function Test() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    console.log("client");
  }, []);

  console.log("server", CircularProgress);
  console.log("server2", Avatar);

  return (
    <ChakraProvider>
      <FasooThemeProvider>
        <CircularProgress value={80} />
        {/* <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" /> */}
        {/* {isLoaded && <Avatar code="3100000" label="개발2본부" type="ANONYMOUS" />} */}
      </FasooThemeProvider>
    </ChakraProvider>
  );
}

// import dynamic from "next/dynamic";
// const Avatar = dynamic(() => import("@mis/fasoo-fesubmodule").then(mod => mod.Avatar), { ssr: false });

// import { FasooThemeProvider, Avatar as FAvatar } from "@mis/fasoo-fesubmodule";
// export  function Test2() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <FasooThemeProvider>
//       <FAvatar code="3100000" label="개발2본부" type="ANONYMOUS" />
//     </FasooThemeProvider>
//   );
// }
