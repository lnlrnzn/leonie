import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TherapyIcon } from "@/components/ui/icons/therapy-icons"
import type { Metadata } from "next"
import { ClientPriceSection } from "./client-components"

export const metadata: Metadata = {
  title: "Preisliste | Leonie Schlör",
  description: "Preisübersicht für meine physiotherapeutischen Leistungen auf Amrum: Gesundheitstraining, Tapen und Massage.",
  keywords: "Preisliste, Kosten, Physiotherapie, Massage, Tapen, Gesundheitstraining, Amrum, Privatpatienten, Selbstzahler",
  alternates: {
    canonical: "/preisliste",
  },
  openGraph: {
    title: "Preisliste | Physiotherapie Amrum",
    description: "Transparente Preisübersicht für alle physiotherapeutischen Behandlungen: Gesundheitstraining, Tapen und Massage auf Amrum.",
    type: "website",
    url: "https://physio-amrum.com/preisliste",
    siteName: "Physiotherapie Amrum - Leonie Schlör",
    locale: "de_DE",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Preisliste - Physiotherapie Amrum mit Leonie Schlör"
      }
    ]
  }
}

interface Service {
  name: string
  description?: string
  duration: string
  price: string
  icon?: "massage" | "physiotherapy" | "rehabilitation" | "yoga" | "wellness" | "manual-therapy" | "acupuncture"
}

export default function PriceListPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ClientPriceSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Preisliste
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Preisliste
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Nur Privatpatienten & Selbstzahler
          </p>
        </div>
      </ClientPriceSection>

      {/* Price Cards Grid */}
      <ClientPriceSection className="bg-muted/30">
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Physiotherapie</h2>
            <p className="text-muted-foreground">
              Meine physiotherapeutischen Behandlungen werden individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={service.name} 
                className="rounded-xl border bg-background p-6 flex flex-col h-full shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <TherapyIcon name={service.icon || "physiotherapy"} className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </div>
                
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  {service.duration && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {service.duration}
                    </div>
                  )}
                  {service.description && (
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ClientPriceSection>
      
      {/* Hausbesuche Information */}
      <ClientPriceSection>
        <div className="rounded-xl border bg-muted/30 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <p className="text-lg font-medium">
                Alle Leistungen werden ausschließlich als Hausbesuche angeboten.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/kontakt">
                Termin vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </ClientPriceSection>

      {/* Insurance Information */}
      <ClientPriceSection className="bg-muted/30">
        <div className="rounded-xl border bg-background p-8 md:p-10">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" />
                  <path d="M13 17v2" />
                  <path d="M13 11v2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter">Wichtige Information für Privatversicherte Patienten</h2>
            </div>
            <div className="pl-16">
              <p className="text-muted-foreground">
                Privat versicherte Patienten bekommen ebenfalls nach der Behandlung eine Rechnung direkt von mir. Diese ist zunächst von dir zu begleichen. Um eine Erstattung der Kosten zu erhalten, musst du die Rechnung bei deiner privaten Krankenkasse einreichen.
              </p>
              <p className="text-muted-foreground mt-4">
                Bitte beachte, dass die Höhe der Erstattung je nach Tarif und Vertrag der Versicherung variieren kann. Sollte es Fragen bezüglich der Kostenerstattung geben, dann wende dich bitte direkt an deine Krankenkasse.
              </p>
            </div>
          </div>
        </div>
      </ClientPriceSection>
    </main>
  )
}

const services: Service[] = [
  {
    name: "Gesundheitstraining",
    description: "Gezielte Bewegungstherapie zur Verbesserung körperlicher Defizite und Schmerzlinderung",
    duration: "30 Min",
    price: "55,00 €",
    icon: "rehabilitation"
  },
  {
    name: "Tapen",
    description: "Gezielte Behandlung mit Tapes zur Aktivierung der Selbstheilungskräfte des Körpers",
    duration: "",
    price: "10,00 €",
    icon: "manual-therapy"
  },
  {
    name: "Massage",
    description: "Manuelle Behandlungstechnik zur Verbesserung der Durchblutung, Schmerzlinderung und Entspannung",
    duration: "40 Min",
    price: "70,00 €",
    icon: "massage"
  }
]

