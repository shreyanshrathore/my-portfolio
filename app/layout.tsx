import type { Metadata } from "next";
import localFont from "next/font/local";

import { Poppins } from "next/font/google";
import "./globals.css"; // Ensure you have a global CSS file

const poppins = Poppins({
  subsets: ["latin"], // You can customize subsets
  weight: ["400", "700"], // Specify weights
  variable: "--font-poppins", // Set a CSS variable
});

import "./globals.css";
import Aside from "./Aside";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <body>
        <main>
          <Aside />
          {children}
        </main>
      </body>
    </html>
  );
}
