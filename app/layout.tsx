import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "טיפול CBT | מטפלת קוגניטיבית-התנהגותית",
  description:
    "דף נחיתה בעברית (RTL) למטפלת CBT – עיצוב ירוק-פיסטוק, אנימציות עדינות ותוכן ממוקד.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
