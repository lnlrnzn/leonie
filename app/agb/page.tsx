import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { ClientLegalSection } from "./client-components"

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Physiotherapie Amrum",
  description: "Allgemeine Geschäftsbedingungen der Physiotherapie-Praxis auf Amrum. Informieren Sie sich über unsere Vertragsbedingungen.",
  keywords: "AGB, Physiotherapie, Amrum, Geschäftsbedingungen, Vertragsbedingungen, Behandlungsvertrag",
}

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ClientLegalSection className="pt-24 md:pt-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Rechtliches
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Vertragsbedingungen für Behandlungen in unserer Praxis
          </p>
        </div>
      </ClientLegalSection>

      {/* Content */}
      <ClientLegalSection className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border bg-background p-6 md:p-8 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">1. Geltungsbereich</h2>
              <p>Die nachstehenden Allgemeinen Geschäftsbedingungen gelten für alle Rechtsgeschäfte der Physiotherapie Amrum, Leonie Schlör – nachstehend "Therapeutin" genannt – mit ihren Vertragspartnern – nachstehend "Patient" genannt.</p>
              <p>Abweichende Allgemeine Geschäftsbedingungen des Patienten gelten nicht, es sei denn, die Therapeutin hat diesen ausdrücklich und schriftlich zugestimmt.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">2. Vertragsgegenstand</h2>
              <p>Die Therapeutin erbringt ihre Dienste gegenüber dem Patienten in Form von physiotherapeutischen Behandlungen, Massagen und Wellnessanwendungen. Der genaue Inhalt und Umfang der Behandlungsleistungen ergibt sich aus der ärztlichen Verordnung, dem Behandlungsvertrag, mündlichen oder schriftlichen Vereinbarungen der Vertragsparteien sowie diesen AGB.</p>
              <p>Die Therapeutin ist berechtigt, die Behandlung durch fachlich qualifizierte Mitarbeiter durchführen zu lassen, soweit nicht ausdrücklich die Behandlung durch die Therapeutin selbst vereinbart wurde.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">3. Terminvereinbarung und Absageregelung</h2>
              <p>Termine werden nach vorheriger Vereinbarung vergeben. Die vereinbarten Termine sind verbindlich.</p>
              <p>Der Patient verpflichtet sich, die vereinbarten Behandlungstermine pünktlich wahrzunehmen. Sollte ein Termin nicht wahrgenommen werden können, ist dieser mindestens 24 Stunden vor dem vereinbarten Termin abzusagen. Bei nicht rechtzeitiger Absage oder Nichterscheinen zum vereinbarten Termin ist die Therapeutin berechtigt, dem Patienten den vollen Behandlungspreis in Rechnung zu stellen, sofern der Termin nicht anderweitig vergeben werden kann.</p>
              <p>Bei Verspätungen des Patienten kann die Behandlungszeit entsprechend verkürzt werden, wenn nachfolgende Termine dies erfordern. Der volle Behandlungspreis bleibt dennoch bestehen.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">4. Behandlungsablauf</h2>
              <p>Die Behandlung erfolgt entsprechend der ärztlichen Verordnung oder nach Absprache mit dem Patienten. Die Therapeutin behält sich vor, die Behandlung abzulehnen oder abzubrechen, wenn:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>der Patient die Mitwirkung verweigert</li>
                <li>der Patient unter Einfluss von Alkohol oder Drogen steht</li>
                <li>der Patient an einer ansteckenden Krankheit leidet</li>
                <li>die Behandlung aus therapeutischer Sicht nicht sinnvoll erscheint</li>
                <li>der Patient die Therapeutin beleidigt oder bedroht</li>
              </ul>
              <p>In diesen Fällen ist die Therapeutin berechtigt, das volle Honorar für den vereinbarten Termin zu berechnen.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">5. Preise und Zahlungsbedingungen</h2>
              <p>Die Preise für die angebotenen Leistungen ergeben sich aus der aktuellen Preisliste der Therapeutin, die in der Praxis ausliegt und auf der Website einsehbar ist.</p>
              <p>Bei Behandlungen, die über eine gesetzliche Krankenversicherung abgerechnet werden, ist der Patient verpflichtet, die gesetzliche Zuzahlung sowie die Verordnungsgebühr direkt an die Therapeutin zu entrichten, sofern keine Befreiung vorliegt.</p>
              <p>Privatpatienten und Selbstzahler erhalten eine Rechnung, die sofort und ohne Abzug zur Zahlung fällig ist. Die Zahlung kann in bar, per EC-Karte oder per Überweisung erfolgen.</p>
              <p>Gutscheine sind drei Jahre ab Ausstellungsdatum gültig und nicht in bar auszahlbar. Eine Kombination mit anderen Rabattaktionen ist nicht möglich.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">6. Haftung</h2>
              <p>Die Therapeutin haftet für Schäden, die durch die Behandlung entstehen, nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen.</p>
              <p>Der Patient ist verpflichtet, die Therapeutin vor Beginn der Behandlung über bestehende Erkrankungen, Allergien, Unverträglichkeiten oder sonstige Umstände zu informieren, die für die Behandlung relevant sein könnten. Unterlässt der Patient diese Information, haftet die Therapeutin nicht für daraus resultierende Schäden.</p>
              <p>Für mitgebrachte Wertgegenstände und Kleidung übernimmt die Therapeutin keine Haftung.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">7. Datenschutz</h2>
              <p>Die Therapeutin erhebt, speichert und verarbeitet personenbezogene Daten des Patienten, soweit dies für die Durchführung des Behandlungsvertrages erforderlich ist. Die Datenverarbeitung erfolgt unter Beachtung der gesetzlichen Datenschutzbestimmungen.</p>
              <p>Der Patient erklärt sich damit einverstanden, dass seine Daten für die Durchführung des Behandlungsvertrages gespeichert und verarbeitet werden. Näheres regelt die Datenschutzerklärung der Therapeutin.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">8. Schlussbestimmungen</h2>
              <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>
              <p>Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Änderung dieser Schriftformklausel.</p>
              <p>Es gilt das Recht der Bundesrepublik Deutschland.</p>
              <p>Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der Therapeutin.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">9. Salvatorische Klausel</h2>
              <p>Sollte eine Bestimmung dieses Vertrages unwirksam sein, wird die Wirksamkeit der übrigen Bestimmungen davon nicht berührt. Die Parteien verpflichten sich, anstelle der unwirksamen Bestimmung eine dieser Bestimmung möglichst nahekommende wirksame Regelung zu treffen.</p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-muted-foreground">Stand: Juni 2024</p>
            </div>
          </div>
        </div>
      </ClientLegalSection>

      {/* CTA */}
      <ClientLegalSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Haben Sie Fragen zu unseren AGB?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wenn Sie Fragen zu unseren Geschäftsbedingungen haben, kontaktieren Sie uns gerne. Wir stehen Ihnen für weitere Informationen zur Verfügung.
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