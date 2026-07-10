import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Driver Referral | 70 Deliveries in 30 Days",
  description: "Uber driver and delivery referral opportunity: complete your first 70 deliveries within 30 days and earn at least $630, subject to Uber's official terms.",
  metadataBase: new URL("https://www.driveandearn.net"),
  alternates: { canonical: "https://www.driveandearn.net/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.driveandearn.net/",
    siteName: "DriveAndEarn.net",
    title: "Driver Referral | 70 Deliveries in 30 Days",
    description: "Complete your first 70 deliveries within 30 days and earn at least $630, subject to Uber's official terms.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
