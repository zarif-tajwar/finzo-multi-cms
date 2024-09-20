import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finzo Finance",
  description: "Control your financial future easily",
  openGraph: {
    images: "/images/opg.jpg",
  },
  metadataBase: !!process.env.VERCEL
    ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
    : new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
