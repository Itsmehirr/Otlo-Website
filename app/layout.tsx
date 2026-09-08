import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "[SITE TITLE PLACEHOLDER]",
  description: "[SITE META DESCRIPTION PLACEHOLDER]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        {/* General Sans + Satoshi: free fonts served by Fontshare's public CDN.
            Substituted for the reference site's proprietary self-hosted body
            font per the media rule (no source-hosted font files are used). */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500&f[]=satoshi@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={
          {
            "--font-general-sans": "'General Sans', sans-serif",
            "--font-satoshi": "'Satoshi', sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
