import type { Metadata } from "next";
import "./globals.css";
import { primaryFont } from "./_fonts/primary";

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
    <html lang="en">
      <body className={`${primaryFont.variable} font-primary`}>{children}</body>
    </html>
  );
}
