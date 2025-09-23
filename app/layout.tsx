import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Next.js Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* ✅ Google Fonts を追加 */}
        <link
          href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c|Noto+Sans+JP"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/earlyaccess/nicomoji.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
