import "../globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { ThemeProvider } from "@/app/components/theme-provider";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata = {
  title: "Global Sports FC",
  description: "The Official Website for Global Sports FC",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params }) {
  const { locale } = params;

  // Set the locale for the current request
  unstable_setRequestLocale(locale);

  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}