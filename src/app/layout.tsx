import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://habidots.app"),
  title: {
    default: "Habidots - Daily Habit Tracker | Build Better Habits",
    template: "%s | Habidots",
  },
  description:
    "Transform your life with Habidots - the beautiful habit tracker app that helps you build lasting habits, track your progress, and achieve your goals. Available on iOS and Android.",
  keywords: [
    "habit tracker",
    "habit tracking app",
    "daily habits",
    "goal tracker",
    "productivity app",
    "self improvement",
    "habit building",
    "streak tracker",
    "routine tracker",
    "iOS habit app",
    "Android habit app",
    "habit tracker widget",
    "habit analytics",
  ],
  authors: [{ name: "Habidots" }],
  creator: "Habidots",
  publisher: "Habidots",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://habidots.app",
    siteName: "Habidots",
    title: "Habidots - Daily Habit Tracker | Build Better Habits",
    description:
      "Transform your life with Habidots - the beautiful habit tracker app that helps you build lasting habits, track your progress, and achieve your goals.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Habidots - Daily Habit Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habidots - Daily Habit Tracker | Build Better Habits",
    description:
      "Transform your life with Habidots - the beautiful habit tracker app that helps you build lasting habits and achieve your goals.",
    images: ["/images/og-image.png"],
    creator: "@habidots",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://habidots.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
