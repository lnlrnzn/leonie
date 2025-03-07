import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { ClientLegalSection } from "../shared-client-components"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Datenschutz | Leonie Schlör",
  description: "Datenschutzerklärung der Physiotherapie-Praxis von Leonie Schlör auf Amrum. Erfahre, wie ich mit deinen persönlichen Daten umgehe.",
  keywords: "Datenschutz, Physiotherapie, Amrum, DSGVO, Datenschutzerklärung, Privatsphäre, Leonie Schlör",
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: "Datenschutz | Physiotherapie auf Amrum",
    description: "Transparente Datenschutzerklärung der Physiotherapie-Praxis von Leonie Schlör auf Amrum.",
    type: "website",
    url: "https://physio-amrum.com/datenschutz",
    siteName: "Physiotherapie Amrum - Leonie Schlör",
    locale: "de_DE",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Datenschutz - Physiotherapie Amrum mit Leonie Schlör"
      }
    ]
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* SEO Helper: Breadcrumbs Schema */}
      <Script
        id="schema-breadcrumbs-privacy"
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
                "name": "Datenschutzerklärung",
                "item": "https://physio-amrum.com/datenschutz"
              }
            ]
          })
        }}
      />

      {/* Schema.org WebPage für rechtliche Infos */}
      <Script
        id="schema-privacy-policy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Datenschutzerklärung - Physiotherapie Amrum",
            "description": "Informationen zum Schutz deiner personenbezogenen Daten gemäß DSGVO",
            "url": "https://physio-amrum.com/datenschutz",
            "mainEntity": {
              "@type": "WebContent",
              "headline": "Datenschutzerklärung der Physiotherapie-Praxis auf Amrum",
              "about": {
                "@type": "Thing",
                "name": "Datenschutz und DSGVO"
              }
            }
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
            Datenschutzerklärung
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Informationen zum Schutz deiner personenbezogenen Daten
          </p>
        </div>
      </ClientLegalSection>

      {/* Content */}
      <ClientLegalSection className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border bg-background p-6 md:p-8 space-y-6">
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">1. Allgemeine Hinweise und Pflichtinformationen</h2>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften – insbesondere der EU-Datenschutz-Grundverordnung (DSGVO) – sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              </p>
              <p>
                Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              <p>
                Ihnen stehen umfangreiche Rechte in Bezug auf Ihre personenbezogenen Daten zu – darunter das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch. Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">2. Verantwortliche Stelle</h2>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                <strong>Leonie Schlör</strong><br />
                Uasterstigh 3<br />
                25946 Nebel (Amrum)<br />
                Deutschland
              </p>
              <p>
                Telefon: +49 173 6414846<br />
                E-Mail: leonieschloer.physio@gmail.com
              </p>
              <p>
                Verantwortliche Stelle ist die Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">3. Datenerfassung auf dieser Website</h2>
              {/* Vercel Analytics */}
              <h3 className="text-lg font-semibold">Vercel Analytics</h3>
              <p>
                Unsere Website nutzt den Analysedienst <strong>Vercel Analytics</strong> zur anonymisierten statistischen Auswertung der Seitenaufrufe. Dabei werden technische Daten wie aufgerufene Seiten, Zugriffszeitpunkte, verwendeter Browser und grobe Standortinformationen (Land/Region) verarbeitet. Ihre IP-Adresse wird dabei in anonymisierter Form verarbeitet – es werden keine dauerhaften Identifier gespeichert und keine Cookies verwendet.
              </p>
              <p>
                Vercel Analytics respektiert die "Do Not Track"‐Einstellung Ihres Browsers. Die Speicherung und Verarbeitung erfolgt auf Servern innerhalb der EU. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              {/* Cookies */}
              <h3 className="text-lg font-semibold">Cookies</h3>
              <p>
                Unsere Website verwendet nach aktuellem Stand nur technisch notwendige Cookies. Diese Cookies sind für den Betrieb der Website erforderlich und benötigen keine Einwilligung. Sollte sich dies ändern und wir zukünftig zustimmungspflichtige Cookies einsetzen, werden wir eine entsprechende Consent-Lösung implementieren.
              </p>

              {/* Google Fonts */}
              <h3 className="text-lg font-semibold">Google Fonts</h3>
              <p>
                Zur einheitlichen Darstellung von Schriftarten nutzen wir <strong>Google Web Fonts</strong>. Beim Aufruf unserer Seiten wird eine Verbindung zu den Servern von Google hergestellt, wobei technische Daten wie Ihre IP-Adresse übertragen werden. Google speichert dabei keine Cookies für die Darstellung der Fonts. Die Nutzung von Google Fonts erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              {/* Kontaktformular */}
              <h3 className="text-lg font-semibold">Kontaktformular</h3>
              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer und Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet und in <strong>Airtable</strong> gespeichert. Die Speicherung erfolgt für mindestens zwei Jahre. Die Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              {/* CRM */}
              <h3 className="text-lg font-semibold">Kundenverwaltung (CRM)</h3>
              <p>
                Sollten Sie unsere Kundin bzw. unser Kunde werden, speichern wir Ihre Kontaktdaten und weitere für die Kundenverwaltung notwendige Informationen in einem internen System. Die Verarbeitung erfolgt zur Erfüllung des Vertrages (Art. 6 Abs. 1 lit. b DSGVO) bzw. auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">4. Hosting</h2>
              <p>
                Diese Website wird bei <strong>Vercel</strong> gehostet. Die Datenverarbeitung durch Vercel erfolgt auf Servern innerhalb der EU. Beim Aufruf unserer Website werden automatisch bestimmte Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp) in Server-Logfiles erfasst. Diese Daten dienen der technischen Bereitstellung sowie der Sicherheit und werden ausschließlich zur Erfüllung unserer vertraglichen und gesetzlichen Pflichten verarbeitet. Wir haben einen Vertrag zur Auftragsverarbeitung mit Vercel geschlossen.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">5. Rechte der betroffenen Personen</h2>
              <p>
                Sie haben das Recht, unentgeltlich Auskunft über die Herkunft, den Empfänger und den Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Zudem haben Sie das Recht, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten zu verlangen sowie der Verarbeitung zu widersprechen. Sollten Sie in die Verarbeitung Ihrer Daten eingewilligt haben, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
              <p>
                Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">6. Datenschutzmaßnahmen und Sicherheit</h2>
              <p>
                Wir setzen umfangreiche technische und organisatorische Maßnahmen ein, um Ihre Daten vor unberechtigtem Zugriff, Verlust oder Zerstörung zu schützen. Dazu gehören unter anderem:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>SSL-/TLS-Verschlüsselung zur sicheren Datenübertragung</li>
                <li>Zugriffsbeschränkungen auf Ihre Daten (nur autorisierte Personen haben Zugriff)</li>
                <li>Starke Passwörter und, wo möglich, Mehr-Faktor-Authentifizierung</li>
                <li>Regelmäßige Software-Updates und Sicherheitsüberprüfungen</li>
                <li>Verfahren zur Datensparsamkeit und -minimierung</li>
              </ul>
              <p>
                Trotz dieser Maßnahmen kann ein absoluter Schutz Ihrer Daten nicht garantiert werden.
              </p>
            </div>

            {/* Update Notice */}
            <div className="space-y-4">
              <p>
                <strong>Stand dieser Datenschutzerklärung:</strong> März 2025. Wir behalten uns vor, diese Erklärung bei Änderungen der gesetzlichen Anforderungen oder unserer Dienstleistungen anzupassen.
              </p>
            </div>
          </div>
        </div>
      </ClientLegalSection>

      {/* CTA */}
      <ClientLegalSection>
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Haben Sie Fragen zum Datenschutz?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wenn Sie Fragen zum Datenschutz haben oder von Ihren Rechten Gebrauch machen möchten, kontaktieren Sie uns gerne.
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
