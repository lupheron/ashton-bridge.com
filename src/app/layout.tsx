import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QuoteModalProvider } from "../context/QuoteModalContext";
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
  title: "Ashton Bridge",
  description: "Ashton Bridge",
  icons: {
    icon: "/ashton-bridge-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
