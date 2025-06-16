import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clyvanta - AI-Powered Business Transformation & Custom Software Development",
  description: "Transform your business with Clyvanta's cutting-edge AI consulting, custom software development, and intelligent automation solutions. Expert team, proven results.",
  keywords: "AI consulting, custom software development, process automation, business transformation, artificial intelligence, machine learning, software engineering, digital transformation",
  authors: [{ name: "Clyvanta" }],
  robots: "index, follow",
  metadataBase: new URL('https://clyvanta.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clyvanta.com",
    title: "Clyvanta - AI-Powered Business Transformation",
    description: "Transform your business with cutting-edge AI consulting and custom software development solutions.",
    siteName: "Clyvanta",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Clyvanta - AI-Powered Business Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyvanta - AI-Powered Business Transformation",
    description: "Transform your business with cutting-edge AI consulting and custom software development solutions.",
    creator: "@clyvanta",
    images: ["/next.svg"],
  },
  alternates: {
    canonical: "https://clyvanta.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
