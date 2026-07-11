import { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
// NextIntlClientProvider has been imported from next-intl and should stay here not in global layout
import { getMessages } from "next-intl/server";

import { GlobalLayout } from "@/app/(my-app)/components/layouts/GlobalLayout";
import SetInitialTheme from "@/app/(my-app)/components/SetInitialTheme";
import { routing } from "@/app/(my-app)/provider/i18nProvider";

export const metadata: Metadata = {
  title: "cinemapark_astana",
  description: "Ашық аспан аясындағы кинотеатр",
  icons: {
    icon: "/mini-log.svg",
  },
};

const InterFont = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ [key: string]: string }>;
}>) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      suppressHydrationWarning={true}
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${InterFont.variable} font-inter`}
    >
      <head>
        <SetInitialTheme />
        <link rel="icon" href="/mini-log.svg" type="image/svg+xml" />
      </head>
      <body className="bg-light-theme-bg font-inter dark:bg-black green:bg-green-500 transition-bg">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalLayout>{children}</GlobalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
