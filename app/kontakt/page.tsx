import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ClientContactSection } from "../shared-client-components"
import { ClientContactCard, ClientContactForm, ClientFaqItem } from "./client-components"

export const metadata: Metadata = {
  title: "Kontakt | Physiotherapie Amrum",
  description: "Kontaktieren Sie unsere Physiotherapie-Praxis auf Amrum. Vereinbaren Sie einen Termin oder stellen Sie uns Ihre Fragen.",
  keywords: "Kontakt, Physiotherapie, Amrum, Termin, Anfahrt, Öffnungszeiten",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ClientContactSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Kontakt
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nehmen Sie Kontakt mit uns auf
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Wir freuen uns auf Ihre Nachricht. Vereinbaren Sie einen Termin oder stellen Sie uns Ihre Fragen.
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
                Sie können uns telefonisch, per E-Mail oder über das Kontaktformular erreichen. Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ClientContactCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                title="Telefon"
                content={<p>+49 (0) 4682 123456</p>}
                linkText="Jetzt anrufen"
                linkHref="tel:+4946821234567"
                delay={0.1}
              />

              <ClientContactCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
                title="E-Mail"
                content={<p>info@physiotherapie-amrum.de</p>}
                linkText="E-Mail senden"
                linkHref="mailto:info@physiotherapie-amrum.de"
                delay={0.2}
              />

              <ClientContactCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                title="Adresse"
                content={<p>Hauptstraße 123<br />25946 Nebel auf Amrum</p>}
                linkText="Route anzeigen"
                linkHref="https://maps.google.com"
                delay={0.3}
              />

              <ClientContactCard 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                title="Öffnungszeiten"
                content={
                  <div className="space-y-1">
                    <p>Mo - Fr: 8:00 - 18:00 Uhr</p>
                    <p>Sa: 9:00 - 13:00 Uhr</p>
                    <p>So: Geschlossen</p>
                  </div>
                }
                delay={0.4}
              />
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Anfahrt</h2>
              <div className="aspect-video overflow-hidden rounded-xl border bg-muted">
                {/* Placeholder for Google Maps or other map service */}
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Interaktive Karte wird geladen...</p>
                  {/* In a real implementation, you would include an iframe or component for Google Maps */}
                </div>
              </div>
              <p className="text-muted-foreground">
                Unsere Praxis befindet sich zentral in Nebel auf Amrum, nur wenige Gehminuten von der Bushaltestelle entfernt. Parkplätze sind direkt vor dem Haus verfügbar.
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
              Antworten auf die am häufigsten gestellten Fragen zu unseren Leistungen und Terminen.
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
            Kontaktieren Sie uns telefonisch oder über das Kontaktformular, um einen Termin zu vereinbaren. Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="tel:+4946821234567">
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
    answer: "Sie können einen Termin telefonisch, per E-Mail oder über unser Kontaktformular vereinbaren. Wir bemühen uns, Ihnen zeitnah einen passenden Termin anzubieten."
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

