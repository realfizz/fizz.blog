import type { Metadata } from "next";
import { Geist, Geist_Mono, Doto, JetBrains_Mono, Instrument_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/settings/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dotoFont = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const jetbrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSansFont = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [
      {
        url: siteConfig.meta.openGraphImage,
        width: 1200,
        height: 630,
        alt: siteConfig.meta.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dotoFont.variable} ${jetbrainsMonoFont.variable} ${instrumentSansFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
