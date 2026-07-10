import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uber Driver Referral | 70 Deliveries in 30 Days",
  description: "Uber driver and delivery referral opportunity: complete your first 70 deliveries within 30 days and earn at least $630, subject to Uber's official terms.",
  alternates: { canonical: "https://zhangxn1115.github.io/mywebsite/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://zhangxn1115.github.io/mywebsite/",
    title: "Uber Driver Referral | 70 Deliveries in 30 Days",
    description: "Complete your first 70 deliveries within 30 days and earn at least $630, subject to Uber's official terms.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
