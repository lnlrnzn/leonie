import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ClientAboutSection } from "./client-components"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Über Mich | Leonie Schlör",
  description: "Lerne mich kennen - deine Physiotherapeutin auf Amrum mit langjähriger Erfahrung und Leidenschaft für ganzheitliche Therapie.",
  keywords: [
    "Physiotherapeutin Amrum",
    "Leonie Schlör Physiotherapie",
    "Ausbildung Physiotherapie",
    "Qualifikationen Physiotherapie",
    "Erfahrung Physiotherapie Amrum",
    "Ganzheitlicher Therapieansatz",
    "Yoga Amrum",
    "Faszientraining Amrum",
    "Physiotherapie Tapen Amrum"
  ],
  alternates: {
    canonical: "/uber-mich",
  },
  openGraph: {
    title: "Über Mich | Leonie Schlör",
    description: "Lerne Leonie Schlör kennen - deine Physiotherapeutin auf Amrum mit langjähriger Erfahrung und Leidenschaft für ganzheitliche Therapie.",
    url: "https://physiotherapie-amrum.de/uber-mich",
    images: [
      {
        url: "/ueber-mich.jpg",
        width: 1200,
        height: 630,
        alt: "Leonie Schlör - Physiotherapeutin auf Amrum"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Mich | Physiotherapie auf Amrum",
    description: "Lerne Leonie Schlör kennen - Physiotherapeutin mit ganzheitlichem Ansatz auf Amrum.",
    images: ["/ueber-mich.jpg"]
  }
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Leonie Schlör",
            jobTitle: "Physiotherapeutin",
            description: "Physiotherapeutin auf Amrum mit Spezialisierung in Tape, Massage und Gesundheitstraining",
            url: "https://physiotherapie-amrum.de/uber-mich",
            image: "https://physiotherapie-amrum.de/ueber-mich.jpg",
            telephone: "+49 173 6414846",
            email: "leonieschloer.physio@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Uasterstigh 3",
              addressLocality: "Nebel",
              postalCode: "25946",
              addressRegion: "Schleswig-Holstein",
              addressCountry: "DE"
            },
            sameAs: [
              "https://www.instagram.com/leonie.physio"
            ],
            knowsAbout: [
              "Physiotherapie",
              "Gesundheitstraining",
              "Tapen",
              "Massage",
              "Faszientraining",
              "Yoga"
            ],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                name: "Staatlich anerkannte Physiotherapeutin",
                educationalLevel: "professional",
                recognizedBy: {
                  "@type": "Organization",
                  name: "IB Medizinische Akademie"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "certificate",
                name: "Zertifizierte Yogalehrerin"
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "certificate",
                name: "Faszientraining"
              }
            ],
            worksFor: {
              "@type": "MedicalBusiness",
              name: "Physiotherapie Amrum - Leonie Schlör",
              url: "https://physiotherapie-amrum.de"
            }
          })
        }}
      />

      {/* Hero Section */}
      <ClientAboutSection className="pt-24 md:pt-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Über Mich
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Deine Physiotherapeutin auf Amrum
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Mit Leidenschaft und Expertise widme ich mich der Gesundheit und dem Wohlbefinden meiner Patienten. Lerne mich und meinen ganzheitlichen Therapieansatz kennen.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/ueber-mich.jpg"
              alt="Leonie Schlör - Physiotherapeutin auf Amrum mit langjähriger Erfahrung und ganzheitlichem Therapieansatz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              fetchPriority="high"
              loading="eager"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </ClientAboutSection>

      {/* Personal Story */}
      <ClientAboutSection className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Über mich</h2>
          <p className="text-muted-foreground">
            Ich bin Leonie Schlör, eine engagierte Physiotherapeutin und Yogalehrerin, die ihre Arbeit mit Herz und Leidenschaft ausübt. Seit meinem Abschluss im Jahr 2022 als Physiotherapeutin und meiner Zertifizierung als Yogalehrerin im Jahr 2023 helfe ich Menschen, ihre Gesundheit und ihr Wohlbefinden zu verbessern.
          </p>
          <p className="text-muted-foreground">
            Mit meiner zusätzlichen Fortbildung Taping im Jahr 2024 biete ich ein umfassendes Angebot, das auf individuelle Bedürfnisse abgestimmt ist. Gemeinsam arbeiten wir daran, deine körperliche Fitness und Entspannung zu fördern, damit du deinen Alltag und Urlaub mit mehr Leichtigkeit und Freude meistern kannst.
          </p>
        </div>
      </ClientAboutSection>

      {/* Qualifications */}
      <ClientAboutSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4 text-center">Ausbildung & Qualifikationen</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Staatlich anerkannte Physiotherapeutin</h3>
                <p className="text-muted-foreground">Abschluss an der IB Medizinische Akademie</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Tapen</h3>
                <p className="text-muted-foreground">Zertifizierte Weiterbildung für gezielte Behandlung mit Tapes</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9a4.5 4.5 0 0 0 0-9a4.5 4.5 0 0 1 0-9Z" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Yoga-Lehrerin</h3>
                <p className="text-muted-foreground">Ausbildung mit Schwerpunkt auf Hatha Yoga</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                  <path d="M2 12s2-4 8-4 8 4 8 4" />
                  <path d="M14 10c0-1.1-.9-2-2-2s-2 .9-2 2" />
                  <path d="M2 18s2-4 8-4 8 4 8 4" />
                  <path d="M14 16c0-1.1-.9-2-2-2s-2 .9-2 2" />
                  <path d="M14 16v4" />
                  <path d="M8 10v8" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Faszientraining</h3>
                <p className="text-muted-foreground">Intensive Weiterbildung zu Faszien und Behandlung</p>
              </div>
            </li>
          </ul>
        </div>
      </ClientAboutSection>

      {/* Experience */}
      <ClientAboutSection className="bg-muted/30">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-center">Berufliche Erfahrung</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2024 - Heute</div>
              <h3 className="text-xl font-semibold">Selbständigkeit</h3>
            </div>
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2024 - Heute</div>
              <h3 className="text-xl font-semibold">Abteilungsleiterin Physiotherapie in der AOK Nordseeklinik</h3>
            </div>
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2022 - 2024</div>
              <h3 className="text-xl font-semibold">Physiotherapeutin in der AOK Nordseeklinik</h3>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2019 - 2022</div>
              <h3 className="text-xl font-semibold">Ausbildung zur staatlich anerkannten Physiotherapeutin</h3>
            </div>
          </div>
        </div>
      </ClientAboutSection>

      {/* CTA */}
      <ClientAboutSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Bereit für deine Behandlung?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich darauf, dich auf Amrum begrüßen zu dürfen und dich auf deinem Weg zu mehr Wohlbefinden und Gesundheit zu begleiten.
          </p>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href={{ pathname: "/kontakt" }}>
                Termin vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </ClientAboutSection>
    </main>
  )
}

