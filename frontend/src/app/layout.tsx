import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finzo Finance",
  description: "Control your financial future easily",
  openGraph: {
    images: "/opg.jpg",
  },
  metadataBase: !!process.env.VERCEL
    ? undefined
    : new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
