import { Providers } from "./providers";
import localFont from "next/font/local"
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";

const vairFont = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body className={vairFont.className}>
        <Providers>
          <Header />
          {children}
          </Providers>
      </body>
    </html>
  );
}
