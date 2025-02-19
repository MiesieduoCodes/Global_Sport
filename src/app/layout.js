"use client";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { ThemeProvider } from "@/app/components/theme-provider";

import { LanguageProvider } from "@/app/context/LanguageContext"; // Import LanguageProvider
import React from "react";
import { metadata } from "./metadata";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider> {/* Wrap the entire app */}
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
    </html>
    </LanguageProvider>
  );
}
