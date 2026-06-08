import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cev.studio"),
  title: "cev.studio — digital studio for web, mobile, brand & 3D",
  description:
    "cev.studio is a small studio making web apps, mobile products, brand identities and 3D worlds. Tell us what you're making.",
  openGraph: {
    title: "cev.studio",
    description:
      "A small studio for web apps, mobile products, brand identities and 3D worlds.",
    url: "https://cev.studio",
    siteName: "cev.studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
