import type { Metadata } from "next";
import localFont from "next/font/local";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "@/app/globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import GlobalModals from "@/app/components/Modals/GlobalModals";
import WalletProvider from "@/app/contexts/WalletProvider";
import { Geist_Mono, Funnel_Display } from "next/font/google";

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const Switzer = localFont({
  src: [
    {
      path: "../fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Semibold.woff2",
      weight: "60",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const MontechV2 = localFont({
  src: "../fonts/MontechV2-Medium.ttf",
  weight: "500",
  style: "normal",
  variable: "--font-montech",
  display: "swap",
});

const FunnelDisplay = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blueshift",
  description:
    "Learn how to write your own on-chain programs from the top instructors in the Solana ecosystem.",
};

export default async function RootLayout({
                                           children,
                                           params
                                         }: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
    <body
      className={`${MontechV2.variable} ${GeistMono.variable} ${FunnelDisplay.variable} ${Switzer.variable} antialiased`}
    >
    <NextIntlClientProvider>
      <WalletProvider>
        <GlobalModals />
        <Header />
        <div className="pt-[69px] min-h-[calc(100dvh-69px)]">{children}</div>
        <Footer />
      </WalletProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}