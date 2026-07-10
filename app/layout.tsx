import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drive for Uber in US | Referral Bonus & Driver Guide | DriveAndEarn.net",
  description: "Start driving with Uber in Texas using my referral link. Learn driver requirements, signup steps, bonus opportunities, and tips to maximize your earnings. 通过邀请链接注册 Uber，获得额外奖励。",
  metadataBase: new URL("https://www.driveandearn.net"),
  alternates: { canonical: "https://www.driveandearn.net/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.driveandearn.net/",
    siteName: "DriveAndEarn.net",
    title: "Drive for Uber in US | Referral Bonus & Driver Guide | DriveAndEarn.net",
    description: "Start driving with Uber in Texas using my referral link. Learn driver requirements, signup steps, bonus opportunities, and tips to maximize your earnings. 通过邀请链接注册 Uber，获得额外奖励。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R64T8DWFV7" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R64T8DWFV7');
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
