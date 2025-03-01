import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ClientAboutSection } from "./client-components"

export const metadata: Metadata = {
  title: "Über Mich | Physiotherapie Amrum",
  description: "Lernen Sie mich kennen - Ihre Physiotherapeutin auf Amrum mit langjähriger Erfahrung und Leidenschaft für ganzheitliche Therapie.",
  keywords: "Physiotherapeutin, Amrum, Ausbildung, Qualifikation, Erfahrung, Therapieansatz",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ClientAboutSection className="pt-24 md:pt-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Über Mich
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ihre Physiotherapeutin auf Amrum
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">
              Mit Leidenschaft und Expertise widme ich mich der Gesundheit und dem Wohlbefinden meiner Patienten. Lernen Sie mich und meinen ganzheitlichen Therapieansatz kennen.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/about/therapist.jpg"
              alt="Physiotherapeutin auf Amrum"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </ClientAboutSection>

      {/* Personal Story */}
      <ClientAboutSection className="bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Mein Weg zur Physiotherapie</h2>
          <p className="text-muted-foreground">
            Meine Leidenschaft für die Physiotherapie begann bereits in jungen Jahren durch meine eigene Erfahrung mit Sportverletzungen. Diese persönlichen Erlebnisse haben mich dazu inspiriert, anderen Menschen auf ihrem Weg zur Genesung zu helfen.
          </p>
          <p className="text-muted-foreground">
            Nach meiner Ausbildung zur staatlich anerkannten Physiotherapeutin habe ich in verschiedenen Kliniken und Praxen wertvolle Erfahrungen gesammelt, bevor ich mich entschied, meine eigene Praxis auf der wunderschönen Insel Amrum zu eröffnen.
          </p>
          <p className="text-muted-foreground">
            Die einzigartige Natur und das besondere Klima der Insel bieten den perfekten Rahmen für meine Arbeit und unterstützen den Heilungsprozess meiner Patienten auf natürliche Weise.
          </p>
        </div>
      </ClientAboutSection>

      {/* Qualifications */}
      <ClientAboutSection>
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ausbildung & Qualifikationen</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Staatlich anerkannte Physiotherapeutin</h3>
                  <p className="text-muted-foreground">Abschluss an der Physiotherapieschule Hamburg</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Manuelle Therapie</h3>
                  <p className="text-muted-foreground">Zertifizierte Weiterbildung für gezielte Behandlung von Funktionsstörungen</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Lymphdrainage</h3>
                  <p className="text-muted-foreground">Spezialisierung auf manuelle Lymphdrainage</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9Z" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Yoga-Lehrerin</h3>
                  <p className="text-muted-foreground">Zertifizierte Ausbildung in therapeutischem Yoga</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Mein Therapieansatz</h2>
            <p className="text-muted-foreground mb-4">
              Mein Ansatz in der Physiotherapie ist ganzheitlich und individuell. Ich betrachte jeden Patienten als einzigartig und entwickle maßgeschneiderte Behandlungspläne, die auf die spezifischen Bedürfnisse und Ziele abgestimmt sind.
            </p>
            <p className="text-muted-foreground mb-4">
              Dabei kombiniere ich klassische physiotherapeutische Methoden mit modernen Techniken und beziehe auch Elemente aus dem Yoga und der ganzheitlichen Gesundheitsförderung mit ein.
            </p>
            <p className="text-muted-foreground">
              Mir ist es wichtig, nicht nur die Symptome zu behandeln, sondern auch die Ursachen zu erkennen und zu beheben. Durch eine vertrauensvolle Zusammenarbeit und offene Kommunikation schaffe ich eine angenehme Atmosphäre, in der Heilung optimal stattfinden kann.
            </p>
          </div>
        </div>
      </ClientAboutSection>

      {/* Experience */}
      <ClientAboutSection className="bg-muted/30">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-center">Berufliche Erfahrung</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2018 - Heute</div>
              <h3 className="text-xl font-semibold">Eigene Praxis auf Amrum</h3>
              <p className="text-muted-foreground">
                Leitung meiner eigenen Physiotherapie-Praxis mit Fokus auf ganzheitliche Behandlungskonzepte für Einheimische und Urlauber.
              </p>
            </div>
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2014 - 2018</div>
              <h3 className="text-xl font-semibold">Rehaklinik Nordsee</h3>
              <p className="text-muted-foreground">
                Angestellte Physiotherapeutin mit Schwerpunkt auf orthopädische Rehabilitation und Sportphysiotherapie.
              </p>
            </div>
            <div className="relative pl-8 border-l border-primary/30">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2010 - 2014</div>
              <h3 className="text-xl font-semibold">Physiotherapie-Zentrum Hamburg</h3>
              <p className="text-muted-foreground">
                Tätigkeit als Physiotherapeutin in einem großen Therapiezentrum mit vielfältigen Patientengruppen und Behandlungsmethoden.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
              <div className="mb-1 text-sm text-muted-foreground">2007 - 2010</div>
              <h3 className="text-xl font-semibold">Ausbildung zur Physiotherapeutin</h3>
              <p className="text-muted-foreground">
                Staatlich anerkannte Ausbildung mit praktischen Einsätzen in verschiedenen klinischen Bereichen.
              </p>
            </div>
          </div>
        </div>
      </ClientAboutSection>

      {/* CTA */}
      <ClientAboutSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Bereit für Ihre Behandlung?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ich freue mich darauf, Sie in meiner Praxis auf Amrum begrüßen zu dürfen und Sie auf Ihrem Weg zu mehr Wohlbefinden und Gesundheit zu begleiten.
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

