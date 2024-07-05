import "./assets/css/styles.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VSAI | Your AI Code Translator",
  description: "Translate code snippets to different languages with the help of AI",
  manifest: "/manifest.json",
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/zXz9w0y9/940-1x-shots-so.webp',
        width: 1000,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors theme="dark" />
      </body>
    </html>
  );
}
