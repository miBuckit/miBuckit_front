import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

/**
 * 헤더 푸터 있는 화면 layout
 * @param param0
 * @returns
 */
export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="md">
      {/* Navbar */}
      <Navbar />
      {/* contents */}
      <main>{children}</main>
      {/* Footer */}
    </div>
  );
}

/**
 * 헤더 푸터 없는 화면 layout
 * @param param0
 * @returns
 */
export function LoginLayout({ children }: PropsWithChildren) {
  return <div>{/* contents */}</div>;
}
