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
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    template: "%s | Physiotherapie Amrum - Leonie Schlör",
    default: "Physiotherapie Amrum | Leonie Schlör | Massage",
  },
  description:
    "Professionelle Physiotherapie und Massage auf Amrum. Individuelle Behandlungen für Ihr Wohlbefinden von Leonie Schlör. Jetzt Termin vereinbaren!",
  keywords: [
    "Physiotherapie Amrum",
    "Massage Amrum",
    "Krankengymnastik Amrum",
    "Manuelle Therapie Amrum",
    "Physiotherapeut Amrum",
    "Gesundheitstraining Amrum",
    "Tapen Amrum",
    "Leonie Schlör",
    "Physiotherapie Inseln",
    "Gesundheit Amrum",
    "Wellness Nordsee"
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
    languages: {
      'de-DE': 'https://physiotherapie-amrum.de',
    },
  },
  openGraph: {
    title: "Physiotherapie Amrum | Leonie Schlör | Massage",
    description:
      "Professionelle Physiotherapie und Massage auf Amrum. Individuelle Behandlungen für Ihr Wohlbefinden von Leonie Schlör.",
    url: "https://physiotherapie-amrum.de",
    siteName: "Physiotherapie Amrum - Leonie Schlör",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Physiotherapie Amrum - Leonie Schlör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapie Amrum | Leonie Schlör | Massage",
    description: "Professionelle Physiotherapie und Massage auf Amrum.",
    images: ["/hero.jpg"],
    creator: "@leonieschloer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={cn(inter.variable, playfair.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={cn("min-h-screen flex flex-col font-sans antialiased")}>
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster />

        {/* Strukturierte Daten für lokales Unternehmen */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PhysicalTherapy",
              "name": "Physiotherapie Amrum - Leonie Schlör",
              "description": "Professionelle Physiotherapie und Massage auf Amrum mit Spezialisierung auf Gesundheitstraining, Tapen und Massage. Individuelle Behandlungen für Ihr Wohlbefinden.",
              "url": "https://physiotherapie-amrum.de",
              "telephone": "+49 173 6414846",
              "email": "leonieschloer.physio@gmail.com",
              "logo": "https://physiotherapie-amrum.de/logo.png",
              "image": "https://physiotherapie-amrum.de/hero.jpg",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Uasterstigh 3",
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
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/leonie.physio"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Physiotherapeutische Leistungen",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Gesundheitstraining",
                      "description": "Gezielte Bewegungstherapie zur Verbesserung körperlicher Defizite und Schmerzlinderung"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Tapen",
                      "description": "Gezielte Behandlung mit Tapes zur Aktivierung der Selbstheilungskräfte des Körpers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalTherapy",
                      "name": "Massage",
                      "description": "Manuelle Behandlungstechnik zur Verbesserung der Durchblutung, Schmerzlinderung und Entspannung"
                    }
                  }
                ]
              }
            }
          `}
        </Script>

        {/* Google Analytics Code (falls vorhanden) */}
        {/* <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script> */}
      </body>
    </html>
  )
}

import './globals.css'