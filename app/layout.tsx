import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nayyarthit.com"),
  title: {
    default: "NAY YAR THIT | Travel & Tours in Myanmar",
    template: "%s | NAY YAR THIT Travel & Tours",
  },
  description:
    "Explore Myanmar and beyond with confidence. NAY YAR THIT FUTURE COMPANY LIMITED offers trusted travel agency services, tour operations, and reservations for international and regional travelers.",
  keywords: [
    "Myanmar travel",
    "Myanmar tours",
    "Bagan tours",
    "Inle Lake",
    "travel agency Myanmar",
    "tour operator",
    "Southeast Asia travel",
    "NAY YAR THIT",
  ],
  authors: [{ name: "NAY YAR THIT FUTURE COMPANY LIMITED" }],
  creator: "NAY YAR THIT FUTURE COMPANY LIMITED",
  publisher: "NAY YAR THIT FUTURE COMPANY LIMITED",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nayyarthit.com",
    siteName: "NAY YAR THIT Travel & Tours",
    title: "NAY YAR THIT | Travel & Tours in Myanmar",
    description:
      "Explore Myanmar and beyond with confidence. Trusted travel agency services, tour operations, and reservations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NAY YAR THIT Travel & Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAY YAR THIT | Travel & Tours in Myanmar",
    description:
      "Explore Myanmar and beyond with confidence. Trusted travel agency services and tour operations.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
