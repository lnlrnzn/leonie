import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physiotherapie Amrum | Professionelle Therapie auf der Insel",
  description: "Willkommen bei Physiotherapie Amrum. Wir bieten individuelle Behandlungen zur Schmerzlinderung und Verbesserung Ihrer Mobilität in entspannter Atmosphäre.",
  keywords: "Physiotherapie, Amrum, Massage, Krankengymnastik, Manuelle Therapie, Wellness",
}

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection 
        title="Physiotherapie für Ihr Wohlbefinden"
        subtitle="Professionelle Behandlung auf Amrum"
        description="Erleben Sie hochwertige physiotherapeutische Behandlungen in entspannter Atmosphäre. Ich helfe Ihnen dabei, Schmerzen zu lindern und Ihre Mobilität zu verbessern."
        ctaText="Termin vereinbaren"
        ctaLink={{ pathname: "/kontakt" }}
        imageSrc="/images/hero-image.jpg"
      />
      
      <FeaturesSection />
      
      <div className="bg-muted/30">
        <TestimonialsSection />
      </div>
      
      <ContactSection />
    </main>
  )
}

