import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { ClientServiceSection } from "./client-components"

export const metadata: Metadata = {
  title: "Leistungen | Physiotherapie Amrum",
  description: "Entdecken Sie unsere umfassenden physiotherapeutischen Leistungen auf Amrum. Von klassischer Krankengymnastik bis zu speziellen Therapiemethoden.",
  keywords: "Physiotherapie, Leistungen, Krankengymnastik, Manuelle Therapie, Massage, Amrum",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ClientServiceSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Unser Angebot
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Physiotherapeutische Leistungen
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Entdecken Sie unser umfassendes Angebot an physiotherapeutischen Behandlungen und Therapien für Ihr Wohlbefinden.
          </p>
        </div>
      </ClientServiceSection>

      {/* Services Overview */}
      <ClientServiceSection className="bg-muted/30">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  <line x1="9" y1="9" x2="10" y2="9" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Klassische Krankengymnastik</h3>
              <p className="mt-2 text-muted-foreground">
                Gezielte Übungen zur Verbesserung von Beweglichkeit, Kraft und Koordination. Individuell angepasst an Ihre Bedürfnisse.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#krankengymnastik">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Manuelle Therapie</h3>
              <p className="mt-2 text-muted-foreground">
                Spezielle Handgriffe und Mobilisationstechniken zur Behandlung von Gelenk- und Wirbelsäulenproblemen.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#manuelle-therapie">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                  <path d="M12 9v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Massage</h3>
              <p className="mt-2 text-muted-foreground">
                Klassische Massagetechniken zur Entspannung der Muskulatur, Förderung der Durchblutung und der Schmerzlinderung.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#massage">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <path d="m7 15 5-5 5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Lymphdrainage</h3>
              <p className="mt-2 text-muted-foreground">
                Sanfte Druckmassage zur Entstauung bei Lymphödemen und zur Förderung des Lymphabflusses im Gewebe.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#lymphdrainage">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Hausbesuche</h3>
              <p className="mt-2 text-muted-foreground">
                Physiotherapeutische Behandlungen bequem bei Ihnen zu Hause, wenn Sie nicht in die Praxis kommen können.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#hausbesuche">Mehr erfahren</a>
              </Button>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Präventionskurse</h3>
              <p className="mt-2 text-muted-foreground">
                Kurse zur Vorbeugung von Beschwerden und Förderung der Gesundheit, teilweise von den Krankenkassen bezuschusst.
              </p>
              <Button variant="link" className="mt-4 p-0" asChild>
                <a href="#prävention">Mehr erfahren</a>
              </Button>
            </div>
          </div>
        </div>
      </ClientServiceSection>

      {/* Detailed Service Descriptions */}
      <ClientServiceSection id="krankengymnastik">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Klassische Krankengymnastik</h2>
            <p className="text-muted-foreground">
              Die klassische Krankengymnastik ist die Grundlage der Physiotherapie und kommt bei zahlreichen Erkrankungen und Verletzungen zum Einsatz. Durch gezielte Übungen werden Beweglichkeit, Kraft, Ausdauer und Koordination verbessert.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rehabilitation nach Operationen oder Verletzungen</li>
                <li>Behandlung von Wirbelsäulen- und Gelenkbeschwerden</li>
                <li>Muskuläre Dysbalancen und Haltungsprobleme</li>
                <li>Neurologische Erkrankungen</li>
                <li>Chronische Schmerzzustände</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt. Wir berücksichtigen dabei Ihre persönlichen Ziele, sei es die Schmerzlinderung, die Rückkehr zum Sport oder die Bewältigung des Alltags.
            </p>
            <p className="text-muted-foreground">
              Die Übungen werden während der Therapie gemeinsam durchgeführt, und Sie erhalten ein Heimprogramm, um den Therapieerfolg zu unterstützen.
            </p>
          </div>
          <div className="md:col-span-2 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Krankengymnastische Übung</p>
              </div>
            </div>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="manuelle-therapie" className="bg-muted/30">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 order-2 md:order-1 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Manuelle Therapie Anwendung</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Manuelle Therapie</h2>
            <p className="text-muted-foreground">
              Die Manuelle Therapie ist eine spezielle Form der Physiotherapie, bei der mit den Händen direkt am Bewegungsapparat gearbeitet wird. Durch spezifische Handgriffe werden Blockaden gelöst, Gelenke mobilisiert und Muskelverspannungen gelöst.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Blockaden der Wirbelsäule und Gelenke</li>
                <li>Bandscheibenvorfälle und -vorwölbungen</li>
                <li>Chronische Schmerzsyndrome</li>
                <li>Eingeschränkte Gelenkbeweglichkeit</li>
                <li>Muskuläre Dysbalancen und Verspannungen</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Die Manuelle Therapie kombiniert verschiedene Techniken wie Mobilisation, Traktion, Weichteiltechniken und spezielle Dehnungen. Die Behandlung wird durch aktive Übungen ergänzt, um die Wirkung zu verbessern und zu festigen.
            </p>
            <p className="text-muted-foreground">
              Alle unsere Therapeuten verfügen über eine Zusatzqualifikation in Manueller Therapie und bilden sich regelmäßig fort, um die neuesten Techniken anzuwenden.
            </p>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="massage">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Massage</h2>
            <p className="text-muted-foreground">
              Die klassische Massage gehört zu den ältesten Heilmethoden und dient der Entspannung der Muskulatur, der Förderung der Durchblutung und der Schmerzlinderung. Durch verschiedene Grifftechniken werden Verspannungen gelöst und das Wohlbefinden gesteigert.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Muskelverspannungen und -verhärtungen</li>
                <li>Rückenschmerzen und Nackenverspannungen</li>
                <li>Durchblutungsstörungen</li>
                <li>Stressbedingte Beschwerden</li>
                <li>Unterstützende Therapie bei verschiedenen Erkrankungen</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Wir bieten verschiedene Massagetechniken an, die je nach Beschwerdebild und Wunsch eingesetzt werden. Dazu gehören klassische Massage, Bindegewebsmassage, Fußreflexzonenmassage und Sportmassage.
            </p>
            <p className="text-muted-foreground">
              Die Massage wird individuell auf Ihre Bedürfnisse abgestimmt und kann als Einzelbehandlung oder im Rahmen eines umfassenden Therapiekonzepts durchgeführt werden.
            </p>
          </div>
          <div className="md:col-span-2 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Massagebehandlung</p>
              </div>
            </div>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="lymphdrainage" className="bg-muted/30">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 order-2 md:order-1 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Lymphdrainage Anwendung</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Lymphdrainage</h2>
            <p className="text-muted-foreground">
              Die manuelle Lymphdrainage ist eine besondere Massageform, bei der durch sanfte, rhythmische Bewegungen der Lymphfluss angeregt und Schwellungen reduziert werden. Sie dient der Entstauung des Gewebes und der Förderung des Abtransports von Gewebsflüssigkeit.
            </p>
            <div className="space-y-2">
              <p><strong>Anwendungsbereiche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lymphödeme nach Operationen oder Bestrahlungen</li>
                <li>Posttraumatische Schwellungen (z.B. nach Verletzungen)</li>
                <li>Chronische Venenschwäche</li>
                <li>Begleittherapie bei verschiedenen Erkrankungen</li>
                <li>Unterstützung der Wundheilung</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Die Behandlung wird durch spezielle Bandagierungstechniken und Bewegungsübungen ergänzt, um den Therapieerfolg zu optimieren. Bei Bedarf beraten wir Sie auch zu geeigneten Kompressionsstrümpfen oder -strumpfhosen.
            </p>
            <p className="text-muted-foreground">
              Die Lymphdrainage wird von speziell ausgebildeten Therapeuten durchgeführt, die über eine entsprechende Zusatzqualifikation verfügen.
            </p>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="hausbesuche">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Hausbesuche</h2>
            <p className="text-muted-foreground">
              Für Patienten, die aus gesundheitlichen Gründen nicht in unsere Praxis kommen können, bieten wir physiotherapeutische Behandlungen im häuslichen Umfeld an. Die Therapie wird dabei an die Gegebenheiten vor Ort angepasst.
            </p>
            <div className="space-y-2">
              <p><strong>Vorteile der Hausbesuche:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Behandlung in gewohnter Umgebung</li>
                <li>Keine Anfahrtswege für mobilitätseingeschränkte Patienten</li>
                <li>Integration der Therapie in den Alltag</li>
                <li>Einbeziehung von Hilfsmitteln und Alltagsgegenständen</li>
                <li>Anpassung des Wohnumfelds an therapeutische Bedürfnisse</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Hausbesuche sind grundsätzlich für alle unsere therapeutischen Angebote möglich, sofern die räumlichen Gegebenheiten dies zulassen. Die Kosten werden bei entsprechender Verordnung von den gesetzlichen Krankenkassen übernommen.
            </p>
            <p className="text-muted-foreground">
              Bitte beachten Sie, dass für Hausbesuche eine vorherige Terminvereinbarung nötig ist. Wir bemühen uns, Ihre Wunschtermine zu berücksichtigen.
            </p>
          </div>
          <div className="md:col-span-2 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Hausbesuch zur Therapie</p>
              </div>
            </div>
          </div>
        </div>
      </ClientServiceSection>

      <ClientServiceSection id="prävention" className="bg-muted/30">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 order-2 md:order-1 h-full">
            <div className="aspect-video rounded-xl overflow-hidden bg-muted relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Bild: Präventionskurs</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 order-1 md:order-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Präventionskurse</h2>
            <p className="text-muted-foreground">
              Vorbeugung ist besser als Heilung! In unseren Präventionskursen lernen Sie, wie Sie aktiv etwas für Ihre Gesundheit tun können. Die Kurse werden in Kleingruppen durchgeführt und von qualifizierten Therapeuten geleitet.
            </p>
            <div className="space-y-2">
              <p><strong>Unser Kursangebot:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Rückenfit: Kräftigung und Mobilisation der Rückenmuskulatur</li>
                <li>Progressive Muskelentspannung nach Jacobson</li>
                <li>Faszientraining: Verbesserung der Gewebsqualität und Beweglichkeit</li>
                <li>Sturzprophylaxe für Senioren</li>
                <li>Gesunder Arbeitsplatz: Ergonomie im Alltag</li>
              </ul>
            </div>
            <p className="text-muted-foreground">
              Viele unserer Kurse sind von den gesetzlichen Krankenkassen zertifiziert und werden teilweise oder vollständig bezuschusst. Wir beraten Sie gerne zu den Möglichkeiten der Kostenübernahme.
            </p>
            <p className="text-muted-foreground">
              Die Kurse finden regelmäßig statt und umfassen in der Regel 8-12 Termine. Aktuelle Termine und freie Plätze erfragen Sie bitte direkt in unserer Praxis oder telefonisch.
            </p>
          </div>
        </div>
      </ClientServiceSection>

      {/* CTA */}
      <ClientServiceSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Bereit für Ihre Behandlung?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kontaktieren Sie uns für einen Termin oder weitere Informationen zu unseren Leistungen. Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href={{ pathname: "/kontakt" }}>
                Termin vereinbaren
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={{ pathname: "/preisliste" }}>
                Preisliste ansehen
              </Link>
            </Button>
          </div>
        </div>
      </ClientServiceSection>
    </main>
  )
}

