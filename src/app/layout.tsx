import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EchoForge AI",
  description:
    "The next-generation AI voice platform for realistic text-to-speech, voice cloning, custom voice libraries, and professional audio creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
