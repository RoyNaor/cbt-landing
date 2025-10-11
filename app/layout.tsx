import "./globals.css";
import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const metadata: Metadata = {
  title: "שרון נאור - מטפלת CBT",
  description:
    "להבין את המחשבות, ללמוד מהחוויות ולגלות דרכים חדשות - צעד אחר צעד, לחיים של צמיחה ואיזון.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
