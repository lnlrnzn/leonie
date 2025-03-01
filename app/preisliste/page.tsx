import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TherapyIcon } from "@/components/ui/icons/therapy-icons"
import type { Metadata } from "next"
import { ClientPriceSection, ClientPriceTableRow } from "./client-components"

export const metadata: Metadata = {
  title: "Preisliste | Physiotherapie Amrum",
  description: "Übersicht über unsere Preise für Physiotherapie, Massagen und weitere Behandlungen auf Amrum.",
  keywords: "Preisliste, Kosten, Physiotherapie, Massage, Amrum, Behandlungspreise",
}

interface PriceCategory {
  title: string
  description: string
  services: {
    name: string
    description?: string
    duration: string
    price: string
    icon?: "massage" | "physiotherapy" | "rehabilitation" | "yoga" | "wellness" | "manual-therapy" | "acupuncture"
  }[]
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
            Unsere Behandlungspreise
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Transparente Preisübersicht für alle unsere Leistungen. Bei Fragen zur Kostenübernahme durch Ihre Krankenkasse beraten wir Sie gerne.
          </p>
        </div>
      </ClientPriceSection>

      {/* Price Categories */}
      {priceCategories.map((category, index) => (
        <ClientPriceSection 
          key={category.title} 
          className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="overflow-hidden rounded-xl border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-sm">Leistung</th>
                    <th className="px-4 py-3 text-left font-medium text-sm hidden md:table-cell">Beschreibung</th>
                    <th className="px-4 py-3 text-left font-medium text-sm">Dauer</th>
                    <th className="px-4 py-3 text-right font-medium text-sm">Preis</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {category.services.map((service, serviceIndex) => (
                    <ClientPriceTableRow
                      key={service.name}
                      name={service.name}
                      description={service.description}
                      duration={service.duration}
                      price={service.price}
                      icon={service.icon}
                      index={serviceIndex}
                      isEven={serviceIndex % 2 === 0}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ClientPriceSection>
      ))}

      {/* Insurance Information */}
      <ClientPriceSection>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Kostenübernahme durch Krankenkassen</h2>
            <p className="text-muted-foreground">
              Viele unserer Leistungen können bei ärztlicher Verordnung von den gesetzlichen Krankenkassen übernommen werden. Die Höhe der Zuzahlung richtet sich nach den gesetzlichen Bestimmungen.
            </p>
            <p className="text-muted-foreground">
              Für Privatversicherte und Beihilfeberechtigte gelten besondere Konditionen. Bitte sprechen Sie uns an oder kontaktieren Sie Ihre Versicherung für weitere Informationen.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href={{ pathname: "/kontakt" }}>
                  Termin vereinbaren
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Zahlungsmöglichkeiten</h2>
            <p className="text-muted-foreground">
              Wir akzeptieren Barzahlung, EC-Karte und Überweisung. Die Bezahlung erfolgt in der Regel direkt nach der Behandlung.
            </p>
            <p className="text-muted-foreground">
              Bei Rezepten mit Verordnung von mehreren Behandlungen ist auch eine Sammelrechnung am Ende der Behandlungsserie möglich.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
                <span>EC-Karte</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <rect width="16" height="12" x="4" y="6" rx="2" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Barzahlung</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
                <span>Rechnung</span>
              </div>
            </div>
          </div>
        </div>
      </ClientPriceSection>

      {/* Gift Certificates */}
      <ClientPriceSection className="bg-muted/30">
        <div className="rounded-xl border bg-background p-8 md:p-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Geschenkgutscheine</h2>
            <p className="text-muted-foreground">
              Verschenken Sie Wohlbefinden und Gesundheit mit einem Gutschein für eine unserer Behandlungen. Gutscheine können für einen bestimmten Betrag oder für spezifische Leistungen ausgestellt werden.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href={{ pathname: "/kontakt" }}>
                  Gutschein anfragen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ClientPriceSection>

      {/* CTA */}
      <ClientPriceSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Haben Sie Fragen zu unseren Preisen?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir beraten Sie gerne persönlich zu unseren Leistungen und Preisen. Kontaktieren Sie uns telefonisch oder vereinbaren Sie einen Beratungstermin.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href={{ pathname: "/kontakt" }}>
                Jetzt Kontakt aufnehmen
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={{ pathname: "/leistungen" }}>
                Alle Leistungen ansehen
              </Link>
            </Button>
          </div>
        </div>
      </ClientPriceSection>
    </main>
  )
}

const priceCategories: PriceCategory[] = [
  {
    title: "Physiotherapie",
    description: "Unsere physiotherapeutischen Behandlungen werden individuell auf Ihre Bedürfnisse abgestimmt.",
    services: [
      {
        name: "Physiotherapie",
        description: "Individuelle Behandlung zur Schmerzlinderung und Verbesserung der Beweglichkeit",
        duration: "45-60 Min",
        price: "60,00 €",
        icon: "physiotherapy"
      },
      {
        name: "Manuelle Therapie",
        description: "Gezielte Behandlung von Funktionsstörungen des Bewegungsapparates",
        duration: "45-60 Min",
        price: "70,00 €",
        icon: "manual-therapy"
      },
      {
        name: "Krankengymnastik",
        description: "Übungen zur Stärkung der Muskulatur und Verbesserung der Koordination",
        duration: "45-60 Min",
        price: "60,00 €",
        icon: "rehabilitation"
      },
      {
        name: "Krankengymnastik am Gerät",
        description: "Gezielte Übungen mit therapeutischen Geräten",
        duration: "60 Min",
        price: "65,00 €"
      },
      {
        name: "Lymphdrainage",
        description: "Sanfte Massagetechnik zur Entstauung des Gewebes",
        duration: "45-60 Min",
        price: "60,00 €",
        icon: "wellness"
      }
    ]
  },
  {
    title: "Massagen",
    description: "Entspannende und therapeutische Massagen zur Lösung von Verspannungen und zur Förderung der Durchblutung.",
    services: [
      {
        name: "Klassische Massage",
        description: "Lösung von Muskelverspannungen und Förderung der Durchblutung",
        duration: "30 Min",
        price: "40,00 €",
        icon: "massage"
      },
      {
        name: "Klassische Massage",
        description: "Lösung von Muskelverspannungen und Förderung der Durchblutung",
        duration: "45 Min",
        price: "50,00 €",
        icon: "massage"
      },
      {
        name: "Rückenmassage",
        description: "Gezielte Massage des Rückenbereichs",
        duration: "20 Min",
        price: "30,00 €"
      },
      {
        name: "Ganzkörpermassage",
        description: "Umfassende Massage des gesamten Körpers",
        duration: "60 Min",
        price: "70,00 €"
      },
      {
        name: "Fußreflexzonenmassage",
        description: "Stimulation der Reflexzonen an den Füßen",
        duration: "30 Min",
        price: "40,00 €"
      }
    ]
  },
  {
    title: "Wellness & Entspannung",
    description: "Ganzheitliche Behandlungen zur Stressreduktion und Förderung des allgemeinen Wohlbefindens.",
    services: [
      {
        name: "Aromatherapie-Massage",
        description: "Massage mit ätherischen Ölen",
        duration: "45 Min",
        price: "60,00 €"
      },
      {
        name: "Hot-Stone-Massage",
        description: "Massage mit warmen Basaltsteinen",
        duration: "60 Min",
        price: "75,00 €"
      },
      {
        name: "Entspannungsmassage",
        description: "Sanfte Massage zur Stressreduktion",
        duration: "45 Min",
        price: "55,00 €",
        icon: "wellness"
      },
      {
        name: "Gesichts- und Kopfmassage",
        description: "Entspannende Massage für Gesicht, Kopf und Nacken",
        duration: "30 Min",
        price: "40,00 €"
      }
    ]
  },
  {
    title: "Yoga & Pilates",
    description: "Kurse zur Stärkung von Körper und Geist, Verbesserung der Körperhaltung und Förderung der inneren Balance.",
    services: [
      {
        name: "Einzelstunde Yoga",
        description: "Individuell angepasste Yogastunde",
        duration: "60 Min",
        price: "70,00 €",
        icon: "yoga"
      },
      {
        name: "Gruppenkurs Yoga",
        description: "Yoga in kleinen Gruppen (max. 6 Personen)",
        duration: "90 Min",
        price: "15,00 €",
        icon: "yoga"
      },
      {
        name: "Einzelstunde Pilates",
        description: "Individuell angepasste Pilatesstunde",
        duration: "60 Min",
        price: "70,00 €"
      },
      {
        name: "Gruppenkurs Pilates",
        description: "Pilates in kleinen Gruppen (max. 6 Personen)",
        duration: "60 Min",
        price: "15,00 €"
      },
      {
        name: "10er-Karte Gruppenkurse",
        description: "Gültig für alle Gruppenkurse",
        duration: "60-90 Min",
        price: "130,00 €"
      }
    ]
  }
]

