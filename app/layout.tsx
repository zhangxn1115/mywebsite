import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uber 司机与配送伙伴邀请｜开车出发",
  description: "通过我的个人邀请链接申请成为 Uber 司机或配送伙伴。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
