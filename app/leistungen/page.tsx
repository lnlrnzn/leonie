import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ClientServiceSection } from "./client-components"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Physiotherapeutische Leistungen | Leonie Schlör",
  description: "Entdecken Sie meine physiotherapeutischen Leistungen auf Amrum: Gesundheittraining, Tapen und Massage für dein Wohlbefinden.",
  keywords: [
    "Physiotherapie Leistungen Amrum",
    "Gesundheitstraining Amrum",
    "Tapen Physiotherapie",
    "Massage Amrum",
    "Physiotherapeutische Behandlungen",
    "Bewegungstherapie Amrum",
    "Schmerzlinderung Amrum",
    "Rehabilitation Amrum"
  ],
  alternates: {
    canonical: "/leistungen",
  },
  openGraph: {
    title: "Physiotherapeutische Leistungen | Leonie Schlör",
    description: "Entdecken Sie meine spezialisierten Behandlungen: Gesundheitstraining, Tapen und Massage - individuell auf deine Bedürfnisse abgestimmt.",
    url: "https://physiotherapie-amrum.de/leistungen",
    images: [
      {
        url: "/Massage.webp",
        width: 1200,
        height: 630,
        alt: "Physiotherapeutische Leistungen auf Amrum - Gesundheitstraining, Tapen und Massage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapeutische Leistungen auf Amrum",
    description: "Gesundheitstraining, Tapen und Massage für Ihr Wohlbefinden - individuell angepasste Behandlungen.",
    images: ["/Massage.webp"]
  }
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Physiotherapie Amrum - Leonie Schlör",
            url: "https://physiotherapie-amrum.de/leistungen",
            image: "https://physiotherapie-amrum.de/Massage.webp",
            telephone: "+49 173 6414846",
            email: "leonieschloer.physio@gmail.com",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Uasterstigh 3",
              addressLocality: "Nebel",
              postalCode: "25946",
              addressRegion: "Schleswig-Holstein",
              addressCountry: "DE"
            },
            medicalSpecialty: "Physiotherapy",
            availableService: [
              {
                "@type": "MedicalTherapy",
                name: "Gesundheitstraining",
                description: "Gezielte Bewegungstherapie zur Verbesserung körperlicher Defizite und Schmerzlinderung",
                usesDevice: "Trainingsgeräte",
                relevantSpecialty: "PhysicalTherapy"
              },
              {
                "@type": "MedicalTherapy",
                name: "Tapen",
                description: "Gezielte Behandlung mit Tapes zur Aktivierung der Selbstheilungskräfte des Körpers",
                relevantSpecialty: "PhysicalTherapy"
              },
              {
                "@type": "MedicalTherapy",
                name: "Massage",
                description: "Manuelle Behandlungstechnik zur Verbesserung der Durchblutung, Schmerzlinderung und Entspannung",
                relevantSpecialty: "PhysicalTherapy"
              }
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Physiotherapeutische Leistungen auf Amrum",
              itemListElement: [
                {
                  "@type": "OfferCatalog",
                  name: "Gesundheitstraining",
                  description: "Gezielte Bewegungstherapie zur Verbesserung körperlicher Defizite und Schmerzlinderung"
                },
                {
                  "@type": "OfferCatalog",
                  name: "Tapen",
                  description: "Gezielte Behandlung mit Tapes zur Aktivierung der Selbstheilungskräfte des Körpers"
                },
                {
                  "@type": "OfferCatalog",
                  name: "Massage",
                  description: "Manuelle Behandlungstechnik zur Verbesserung der Durchblutung, Schmerzlinderung und Entspannung"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <ClientServiceSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Mein Angebot
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Physiotherapeutische Leistungen
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Entdecke mein spezialisiertes Angebot an physiotherapeutischen Behandlungen und Therapien für dein Wohlbefinden.
          </p>
        </div>
      </ClientServiceSection>

      {/* Services Overview */}
      <ClientServiceSection className="bg-muted/30">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Gesundheitstraining</h3>
              <p className="mt-2 text-muted-foreground">
                Gezielte Bewegungstherapie zur Verbesserung körperlicher Defizite und Schmerzlinderung.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#gesundheitstraining">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9" />
                  <path d="M15 22v-4a2 2 0 0 1 2-2h4" />
                  <path d="m22 22-4.5-4.5" />
                  <path d="M7 8h10" />
                  <path d="M7 12h8" />
                  <path d="M7 16h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tapen</h3>
              <p className="mt-2 text-muted-foreground">
                Gezielte Behandlung mit Tapes zur Aktivierung der Selbstheilungskräfte des Körpers.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#tapen">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  <path d="M12 9v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Massage</h3>
              <p className="mt-2 text-muted-foreground">
                Manuelle Behandlungstechnik zur Verbesserung der Durchblutung, Schmerzlinderung und Entspannung.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#massage">Mehr erfahren</a>
              </Button>
            </div>
          </div>
        </div>
      </ClientServiceSection>

      {/* Detailed Service Descriptions */}
      <ClientServiceSection id="gesundheitstraining">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Gesundheitstraining</h2>
            <p className="text-muted-foreground">
              Das Gesundheitstraining ist eine Form der Bewegungstherapie. Diese wird bei bestehenden Krankheiten, bei Nachbehandlungen von Krankheiten, bei Operationen oder Unfällen eingesetzt. Dadurch werden körperliche Defizite und die damit verbundenen Schmerzen gezielt verbessert oder ausgeglichen.
            </p>
            <p className="text-muted-foreground">
              Wir werden der Problematik auf den Grund gehen, gemeinsam Ziele bestimmen und eine zielführende Behandlung durchführen.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rehabilitation nach Operationen oder Verletzungen</li>
                <li>Behandlung bestehender Krankheiten</li>
                <li>Nachbehandlung von Krankheiten</li>
                <li>Schmerzzustände durch körperliche Defizite</li>
                <li>Wiederherstellung der Beweglichkeit nach Unfällen</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Jede Behandlung wird individuell auf deine Bedürfnisse abgestimmt. Wir berücksichtigen dabei deine persönlichen Ziele und erstellen einen maßgeschneiderten Trainingsplan.
            </p>
          </div>
          <div className="md:col-span-2 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <Image
                src="/Gesundheitstraining.webp"
                alt="Individuelles Gesundheitstraining zur Verbesserung körperlicher Defizite und gezielter Schmerzlinderung in der Physiotherapie auf Amrum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="eager"
                quality={95}
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="tapen" className="bg-muted/30">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 order-2 md:order-1 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <Image
                src="/Tapen.webp"
                alt="Professionelle Tape-Anwendung zur Aktivierung der Selbstheilungskräfte bei Verletzungen und Schmerzen - Physiotherapie Amrum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="eager"
                quality={95}
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Tapen</h2>
            <p className="text-muted-foreground">
              Tape wird im Alltag, im Sport und im medizinischen Bereich verwendet, um die Selbstheilungskräfte des Körpers zu aktivieren und zu unterstützen. Der ständige Reiz soll durch die Aktivierung verschiedener Rezeptoren die Muskelspannung regulieren und ein ständiges Signal an das zentrale Nervensystem auslösen.
            </p>
            <p className="text-muted-foreground">
              Tapes können bei bestehenden Verletzungen oder Schmerzen sowie zur Prävention und Rehabilitation eingesetzt werden.
            </p>
            <div className="space-y-2">
              <p><strong>Indikationen für ein Tape:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Muskel-, Gelenk- und Bandverletzungen</li>
                <li>Schmerzzustände</li>
                <li>Zur Prävention bei sportlichen Aktivitäten</li>
                <li>Als Unterstützung im Rehabilitationsprozess</li>
                <li>Wassereinlagerungen</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Die Tapetechnik wird individuell auf deine Beschwerden abgestimmt und kann als Einzelbehandlung oder als Teil eines umfassenden Therapiekonzepts angewendet werden.
            </p>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="massage">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Massage</h2>
            <p className="text-muted-foreground">
              Bei der Massage handelt es sich um eine manuelle Behandlungstechnik. Es werden mechanische Reize auf das betroffene Gewebe, Haut und Muskulatur ausgeübt. Durch die verschiedenen Techniken verbessert sich nicht nur die Durchblutung, sondern wir erreichen eine Schmerzlinderung und erzielen somit eine Entspannung des gesamten Organismus.
            </p>
            <p className="text-muted-foreground">
              Somit können wir die hypertone Muskulatur lockern und die damit verbundene Fehlhaltung korrigieren.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Muskelverspannungen und -verhärtungen</li>
                <li>Rückenschmerzen und Nackenverspannungen</li>
                <li>Durchblutungsstörungen</li>
                <li>Schmerzlinderung bei verschiedenen Beschwerden</li>
                <li>Korrektur von Fehlhaltungen durch verspannte Muskulatur</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Die Massage wird individuell auf deine Bedürfnisse abgestimmt und kann als Einzelbehandlung oder im Rahmen eines umfassenden Therapiekonzepts durchgeführt werden.
            </p>
          </div>
          <div className="md:col-span-2 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <Image
                src="/Massage.webp"
                alt="Entspannende und heilsame Massage zur Schmerzlinderung und Lösung von Muskelverspannungen - Physiotherapie auf Amrum"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="eager"
                quality={95}
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </ClientServiceSection>

      {/* CTA */}
      <ClientServiceSection className="bg-muted/30">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Bereit für deine Behandlung?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich darauf, dich auf Amrum begrüßen zu dürfen und dich mit meinen Behandlungen auf deinem Weg zu mehr Wohlbefinden und Gesundheit zu begleiten.
          </p>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href={{ pathname: "/kontakt" }}>
                Termin vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </ClientServiceSection>
    </main>
  )
}

