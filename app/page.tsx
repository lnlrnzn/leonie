import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ContactSection } from "@/components/sections/contact-section"
import type { Metadata } from "next"
import Script from "next/script"
import dynamic from 'next/dynamic'

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="py-16 bg-muted/30"></div>,
  ssr: true
})

export const metadata: Metadata = {
  title: "Leonie Schlör | Professionelle Physiotherapie auf Amrum",
  description: "Willkommen bei Leonie Schlör. Ich biete individuelle Behandlungen zur Schmerzlinderung und Verbesserung Ihrer Mobilität in entspannter Atmosphäre.",
  keywords: "Physiotherapie, Amrum, Massage, Krankengymnastik, Manuelle Therapie, Wellness, Leonie Schlör",
  openGraph: {
    title: "Leonie Schlör | Physiotherapie auf Amrum",
    description: "Professionelle Physiotherapie auf Amrum. Individuelle Behandlungen zur Schmerzlinderung und Verbesserung Ihrer Mobilität in entspannter Atmosphäre.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Leonie Schlör - Physiotherapie auf Amrum"
      }
    ]
  }
}

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <Script
        id="schema-physiotherapy-practice"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Leonie Schlör - Physiotherapie auf Amrum",
            image: "https://physiotherapie-amrum.de/hero.jpg",
            "@id": "https://physiotherapie-amrum.de",
            url: "https://physiotherapie-amrum.de",
            telephone: "+49 173 6414846",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Uasterstigh 3",
              addressLocality: "Nebel",
              postalCode: "25946",
              addressRegion: "Schleswig-Holstein",
              addressCountry: "DE"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 54.6796,
              longitude: 8.3345
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00"
              }
            ],
            sameAs: [
              "https://www.instagram.com/leonie.physio"
            ]
          })
        }}
      />

      <HeroSection 
        title="Physiotherapie für Ihr Wohlbefinden"
        subtitle="Leonie Schlör auf Amrum"
        description="Erleben Sie hochwertige physiotherapeutische Behandlungen in entspannter Atmosphäre. Ich helfe Ihnen dabei, Schmerzen zu lindern und Ihre Mobilität zu verbessern."
        ctaText="Termin vereinbaren"
        ctaLink={{ pathname: "/kontakt" }}
        imageSrc="/hero.jpg"
        showRating={true}
      />
      
      <FeaturesSection />
      
      <div className="bg-muted/30">
        <TestimonialsSection />
      </div>
      
      <ContactSection />
    </main>
  )
}

