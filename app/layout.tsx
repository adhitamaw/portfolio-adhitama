import type { Metadata } from "next";
import { Space_Grotesk, Bangers } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  title: "Adhitama Wichaksono | Portfolio",
  description:
    "Data Analyst, Backend Developer & AI Enthusiast - Passionate about Data Engineering, Machine Learning, and Web Development",
  keywords: ["portfolio", "data analyst", "backend developer", "machine learning", "web development", "golang", "python", "laravel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${bangers.variable} font-sans antialiased ben-day-bg`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
