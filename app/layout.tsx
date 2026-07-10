import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drive for Uber in US | Referral Bonus & Driver Guide | DriveAndEarn.net",
  description: "Start driving with Uber in Texas using my referral link. Learn driver requirements, signup steps, bonus opportunities, and tips to maximize your earnings.",
  metadataBase: new URL("https://www.driveandearn.net"),
  alternates: { canonical: "https://www.driveandearn.net/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.driveandearn.net/",
    siteName: "DriveAndEarn.net",
    title: "Drive for Uber in US | Referral Bonus & Driver Guide | DriveAndEarn.net",
    description: "Start driving with Uber in Texas using my referral link. Learn driver requirements, signup steps, bonus opportunities, and tips to maximize your earnings.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
