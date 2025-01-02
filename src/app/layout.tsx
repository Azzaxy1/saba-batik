import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import RootClient from "./RootClient";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={`${poppins.variable} antialiased`}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

