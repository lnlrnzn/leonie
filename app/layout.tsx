import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: "%s | Physiotherapie Amrum - Leonie Schlör",
    default: "Physiotherapie Amrum | Leonie Schlör | Massage & Yoga",
  },
  description:
    "Professionelle Physiotherapie, Massage und Yoga auf Amrum. Individuelle Behandlungen für Ihr Wohlbefinden von Leonie Schlör. Jetzt Termin vereinbaren!",
  keywords: [
    "Physiotherapie Amrum",
    "Massage Amrum",
    "Yoga Amrum",
    "Krankengymnastik Amrum",
    "Manuelle Therapie Amrum",
    "Physiotherapeut Amrum",
  ],
  authors: [{ name: "Leonie Schlör" }],
  creator: "Leonie Schlör",
  publisher: "Leonie Schlör",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://physiotherapie-amrum.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Physiotherapie Amrum | Leonie Schlör | Massage & Yoga",
    description:
      "Professionelle Physiotherapie, Massage und Yoga auf Amrum. Individuelle Behandlungen für Ihr Wohlbefinden von Leonie Schlör.",
    url: "https://physiotherapie-amrum.de",
    siteName: "Physiotherapie Amrum - Leonie Schlör",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Physiotherapie Amrum - Leonie Schlör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapie Amrum | Leonie Schlör | Massage & Yoga",
    description: "Professionelle Physiotherapie, Massage und Yoga auf Amrum.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={cn(inter.variable, playfair.variable)}>
      <body className={cn("min-h-screen flex flex-col font-sans antialiased")}>
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster />

        {/* Structured Data for Local Business */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PhysicalTherapy",
              "name": "Physiotherapie Amrum - Leonie Schlör",
              "description": "Professionelle Physiotherapie, Massage und Yoga auf Amrum",
              "url": "https://physiotherapie-amrum.de",
              "telephone": "+49 123 456789",
              "email": "info@leonie-schloer.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Musterstraße 123",
                "addressLocality": "Nebel",
                "addressRegion": "Amrum",
                "postalCode": "25946",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "54.6833",
                "longitude": "8.3333"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/physiotherapie.amrum",
                "https://www.instagram.com/physiotherapie.amrum"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  )
}

import './globals.css'