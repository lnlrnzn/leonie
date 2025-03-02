import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { ClientContactSection } from "../shared-client-components"
import { ClientContactForm, ClientFaqItem } from "./client-components"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Kontakt | Leonie Schlör",
  description: "Kontaktieren Sie meine Physiotherapie-Praxis auf Amrum. Vereinbaren Sie einen Termin oder stellen Sie mir Ihre Fragen.",
  keywords: "Kontakt, Physiotherapie, Amrum, Termin, Anfahrt, Leonie Schlör",
  openGraph: {
    title: "Kontakt | Leonie Schlör - Physiotherapie auf Amrum",
    description: "Vereinbaren Sie einen Termin in meiner Physiotherapie-Praxis auf Amrum. Ich freue mich auf Ihre Nachricht!",
    type: "website",
    url: "https://physiotherapie-amrum.de/kontakt"
  }
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <Script
        id="schema-local-business-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Physiotherapie Amrum - Leonie Schlör",
            "url": "https://physiotherapie-amrum.de/kontakt",
            "telephone": "+49 173 6414846",
            "email": "leonieschloer.physio@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Uasterstigh 3",
              "addressLocality": "Nebel",
              "postalCode": "25946",
              "addressRegion": "Schleswig-Holstein",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 54.6796,
              "longitude": 8.3345
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+49 173 6414846",
              "email": "leonieschloer.physio@gmail.com",
              "availableLanguage": ["German", "English"]
            }
          })
        }}
      />

      {/* Hero Section */}
      <ClientContactSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Kontakt
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nehmen Sie Kontakt mit mir auf
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Ich freue mich auf Ihre Nachricht. Vereinbaren Sie einen Termin oder stellen Sie mir Ihre Fragen.
          </p>
        </div>
      </ClientContactSection>

      {/* Contact Information and Form */}
      <ClientContactSection className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Kontaktinformationen</h2>
              <p className="text-muted-foreground">
                Sie können mich telefonisch, per E-Mail oder über das Kontaktformular erreichen. Ich bemühe mich, alle Anfragen innerhalb von 24 Stunden zu beantworten.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">
                    Uasterstigh 3<br />
                    25946 Nebel auf Amrum
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+4917364148465" className="hover:text-primary transition-colors">
                      +49 173 6414846
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">E-Mail</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:leonieschloer.physio@gmail.com" className="hover:text-primary transition-colors">
                      leonieschloer.physio@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Anfahrt</h2>
              <div className="overflow-hidden rounded-xl border">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=8.17760467529297%2C54.58260818365746%2C8.52092742919922%2C54.73671293675226&amp;layer=mapnik" 
                    style={{ border: 0 }}
                    title="Praxisstandort auf Amrum - OpenStreetMap"
                    className="w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="py-2 px-3 bg-muted/30 text-sm">
                  <a 
                    href="https://www.openstreetmap.org/?#map=12/54.6597/8.3493" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Größere Karte anzeigen
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground">
                Meine Praxis befindet sich in Nebel auf Amrum, nur wenige Gehminuten von der Bushaltestelle entfernt. Parkplätze sind direkt vor dem Haus verfügbar.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ClientContactForm />
        </div>
      </ClientContactSection>

      {/* FAQ Section */}
      <ClientContactSection>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Häufig gestellte Fragen</h2>
            <p className="text-muted-foreground">
              Antworten auf die am häufigsten gestellten Fragen zu meinen Leistungen und Terminen.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ClientFaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </ClientContactSection>

      {/* CTA */}
      <ClientContactSection className="bg-muted/30">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Bereit für Ihren ersten Termin?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kontaktieren Sie mich telefonisch oder über das Kontaktformular, um einen Termin zu vereinbaren. Ich freue mich darauf, Sie in meiner Praxis begrüßen zu dürfen.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="tel:+4917364148465">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Jetzt anrufen
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href={{ pathname: "/leistungen" }}>
                Leistungen entdecken
              </Link>
            </Button>
          </div>
        </div>
      </ClientContactSection>
    </main>
  )
}

const faqs = [
  {
    question: "Wie kann ich einen Termin vereinbaren?",
    answer: "Sie können einen Termin telefonisch, per E-Mail oder über mein Kontaktformular vereinbaren. Ich bemühe mich, Ihnen zeitnah einen passenden Termin anzubieten."
  },
  {
    question: "Benötige ich eine Überweisung vom Arzt?",
    answer: "Für eine Behandlung auf Kassenrezept benötigen Sie eine Verordnung Ihres Arztes. Für Selbstzahlerleistungen ist keine ärztliche Überweisung erforderlich."
  },
  {
    question: "Welche Unterlagen sollte ich zum ersten Termin mitbringen?",
    answer: "Bitte bringen Sie zum ersten Termin Ihre Versichertenkarte, ggf. die ärztliche Verordnung, relevante Befunde und bequeme Kleidung mit."
  },
  {
    question: "Werden die Kosten von der Krankenkasse übernommen?",
    answer: "Bei Vorlage einer ärztlichen Verordnung übernehmen die gesetzlichen Krankenkassen einen Großteil der Kosten. Es fällt lediglich eine gesetzliche Zuzahlung an, sofern Sie nicht von dieser befreit sind."
  },
  {
    question: "Wie lange dauert eine Behandlung?",
    answer: "Die Dauer einer Behandlung variiert je nach Therapieform und individuellen Bedürfnissen. In der Regel dauert eine Behandlung zwischen 20 und 60 Minuten."
  }
]

