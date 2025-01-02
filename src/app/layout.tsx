import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootClient from "./RootClient";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saba Batik",
  description: "Situs web resmi Saba Batik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="../assets/img/logo.png"
          type="image/x-icon"
        />
        <link rel="shortcut icon" href="../assets/img/logo.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

