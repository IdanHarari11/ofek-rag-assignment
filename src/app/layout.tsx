import type { Metadata } from "next";
import { JetBrains_Mono, Public_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "אופק ביטוח — RAG",
  description:
    "ממשק נציג לשאלות על מסמכי אופק ביטוח — תשובות מבוססות מקורות מהאינדקס המקומי.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`dark ${publicSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
