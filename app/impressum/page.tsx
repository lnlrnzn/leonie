import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { ClientLegalSection } from "../shared-client-components"

export const metadata: Metadata = {
  title: "Impressum | Physiotherapie Amrum",
  description: "Impressum und rechtliche Informationen der Physiotherapie-Praxis auf Amrum.",
  keywords: "Impressum, Physiotherapie, Amrum, Kontaktdaten, Rechtliche Informationen",
}

export default function ImprintPage() {
  return (
    <main className="flex flex-col min-h-screen">
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
                <p>Physiotherapie Amrum</p>
                <p>Leonie Schlör</p>
                <p>Hauptstraße 123</p>
                <p>25946 Nebel auf Amrum</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Kontakt</h2>
              <div className="space-y-2">
                <p>Telefon: +49 (0) 4682 123456</p>
                <p>E-Mail: info@physiotherapie-amrum.de</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="space-y-2">
                <p>Berufsbezeichnung: Staatlich anerkannte Physiotherapeutin</p>
                <p>Verliehen in: Deutschland</p>
                <p>Zuständige Aufsichtsbehörde: Gesundheitsamt Nordfriesland</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Umsatzsteuer-ID</h2>
              <div className="space-y-2">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Streitschlichtung</h2>
              <div className="space-y-2">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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