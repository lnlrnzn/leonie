import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { ClientLegalSection } from "../shared-client-components"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Impressum | Leonie Schlör",
  description: "Impressum und rechtliche Informationen der Physiotherapie-Praxis von Leonie Schlör auf Amrum.",
  keywords: "Impressum, Physiotherapie, Amrum, Kontaktdaten, Rechtliche Informationen, Leonie Schlör",
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: "Impressum | Physiotherapie auf Amrum",
    description: "Rechtliche Informationen zur Physiotherapie-Praxis von Leonie Schlör auf Amrum.",
    type: "website",
    url: "https://physio-amrum.com/impressum",
    siteName: "Physiotherapie Amrum - Leonie Schlör",
    locale: "de_DE",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Impressum - Physiotherapie Amrum mit Leonie Schlör"
      }
    ]
  }
}

export default function ImprintPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* SEO Helper: Breadcrumbs Schema */}
      <Script
        id="schema-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://physio-amrum.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Impressum",
                "item": "https://physio-amrum.com/impressum"
              }
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <ClientLegalSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Rechtliches
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Impressum
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Rechtliche Informationen und Kontaktdaten der Physiotherapie-Praxis auf Amrum
          </p>
        </div>
      </ClientLegalSection>

      {/* Content */}
      <ClientLegalSection className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border bg-background p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p>Leonie Schlör</p>
                <p>Uasterstigh 3</p>
                <p>25946 Nebel auf Amrum</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Kontakt</h2>
              <div className="space-y-2">
                <p>Telefon: +49 173 6414846</p>
                <p>E-Mail: leonieschloer.physio@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Berufsbezeichnung</h2>
              <div className="space-y-2">
                <p>Physiotherapeutin (Freiberuflerin)</p>
                <p>Staat, in dem die Berufsbezeichnung verliehen wurde: Bundesrepublik Deutschland</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Zuständige Aufsichtsbehörde</h2>
              <div className="space-y-2">
                <p>Gesundheitsamt Kreis Nordfriesland</p>
                <p>Damm 8</p>
                <p>25813 Husum</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Berufsrechtliche Regelungen</h2>
              <div className="space-y-2">
                <p>Es gilt das Masseur- und Physiotherapeutengesetz (MPhG).</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Berufshaftpflichtversicherung</h2>
              <div className="space-y-2">
                <p>Name des Versicherers: [Platzhalter: Name des Versicherungsunternehmens]</p>
                <p>Adresse des Versicherers: [Platzhalter: Adresse des Versicherungsunternehmens]</p>
                <p>Räumlicher Geltungsbereich der Versicherung: [Platzhalter: Geltungsbereich, z. B. "Deutschland" oder "Europaweit"]</p>
                <p>Versicherungsscheinnummer/Vertragsnummer: [Platzhalter: Nummer der Police]</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Hinweis zur steuerlichen Behandlung</h2>
              <div className="space-y-2">
                <p>Es liegt keine Steuer-ID vor, da keine unternehmerische Tätigkeit im handelsrechtlichen Sinne ausgeübt wird.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Online-Streitbeilegung</h2>
              <div className="space-y-2">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
                <p>Wir sind zur Teilnahme an einem Streitbeilegungsverfahren weder bereit noch verpflichtet.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Haftung für Inhalte</h2>
              <div className="space-y-2">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Haftung für Links</h2>
              <div className="space-y-2">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Urheberrecht</h2>
              <div className="space-y-2">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>
          </div>
        </div>
      </ClientLegalSection>

      {/* CTA */}
      <ClientLegalSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Haben Sie Fragen?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wenn Sie weitere Informationen benötigen oder Fragen haben, zögern Sie nicht, uns zu kontaktieren.
          </p>
          <div className="pt-4">
            <Button asChild>
              <Link href={{ pathname: "/kontakt" }}>
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </div>
      </ClientLegalSection>
    </main>
  )
} 