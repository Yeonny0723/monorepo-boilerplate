import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children} $Nested Layout</div>;
}
