"use client"

import { useState } from "react"
import Image from "next/image"
import { Euro, Clock } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const treatments = [
  {
    category: "physiotherapie",
    title: "Physiotherapie auf Amrum",
    items: [
      { name: "Erstbehandlung inkl. Befunderhebung", duration: "60 Min.", price: "75 €" },
      { name: "Physiotherapie", duration: "30 Min.", price: "45 €" },
      { name: "Physiotherapie", duration: "45 Min.", price: "65 €" },
      { name: "Manuelle Therapie", duration: "30 Min.", price: "50 €" },
      { name: "Manuelle Therapie", duration: "45 Min.", price: "70 €" },
    ],
  },
  {
    category: "massage",
    title: "Massage auf Amrum",
    items: [
      { name: "Klassische Massage", duration: "30 Min.", price: "45 €" },
      { name: "Klassische Massage", duration: "45 Min.", price: "65 €" },
      { name: "Faszientherapie", duration: "30 Min.", price: "50 €" },
      { name: "Lymphdrainage", duration: "30 Min.", price: "45 €" },
      { name: "Lymphdrainage", duration: "45 Min.", price: "65 €" },
    ],
  },
  {
    category: "yoga",
    title: "Yoga auf Amrum",
    items: [
      { name: "Einzelstunde Yoga", duration: "60 Min.", price: "70 €" },
      { name: "Yoga am Strand (Einzelstunde)", duration: "60 Min.", price: "80 €" },
      { name: "Yoga-Kurs (5er-Karte)", duration: "je 60 Min.", price: "85 €" },
      { name: "Yoga-Kurs (10er-Karte)", duration: "je 60 Min.", price: "160 €" },
    ],
  },
  {
    category: "pakete",
    title: "Pakete für Urlauber auf Amrum",
    items: [
      { name: "Urlaubspaket 'Kleine Auszeit' (2x Massage)", duration: "", price: "85 €" },
      { name: "Urlaubspaket 'Erholung' (2x Physiotherapie, 1x Massage)", duration: "", price: "130 €" },
      {
        name: "Urlaubspaket 'Komplette Auszeit' (2x Physiotherapie, 2x Massage, 1x Yoga)",
        duration: "",
        price: "215 €",
      },
    ],
  },
]

export default function PricePageClient() {
  const [activeTab, setActiveTab] = useState("physiotherapie")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Preisliste für Physiotherapie, Massage und Yoga auf Amrum"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Preisliste</h1>
            <p className="text-xl text-white/90 max-w-xl">Transparente Preise für alle meine Leistungen auf Amrum.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Price List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meine Preise auf Amrum</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hier finden Sie eine Übersicht über die Kosten meiner Behandlungen auf Amrum. Bei Fragen stehe ich Ihnen
              gerne zur Verfügung.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                {treatments.map((category) => (
                  <TabsTrigger key={category.category} value={category.category}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {treatments.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{item.name}</CardTitle>
                          {item.duration && (
                            <CardDescription className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {item.duration}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-primary flex items-center">
                            <Euro className="w-6 h-6 mr-1" />
                            {item.price}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>

          <AnimatedSection className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hinweise zur Abrechnung</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Alle Preise sind in Euro und inklusive der gesetzlichen Mehrwertsteuer.</li>
              <li>• Die Bezahlung erfolgt nach jeder Behandlung in bar oder per EC-Karte.</li>
              <li>
                • Bei Verhinderung bitte ich um Absage mindestens 24 Stunden vor dem Termin. Bei späterer Absage oder
                Nichterscheinen muss ich leider den vollen Behandlungspreis in Rechnung stellen.
              </li>
              <li>• Privatrezepte können direkt mit mir abgerechnet werden.</li>
              <li>
                • Für Urlauber auf Amrum biete ich spezielle Pakete an, die auf die Dauer Ihres Aufenthalts abgestimmt
                sind.
              </li>
              <li>• Bei Fragen zur Abrechnung mit Ihrer Krankenkasse stehe ich Ihnen gerne zur Verfügung.</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Privatpatienten auf Amrum</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Als Privatpatient erhalten Sie von mir eine detaillierte Rechnung, die Sie bei Ihrer privaten
                Krankenversicherung zur Erstattung einreichen können. Die Erstattungshöhe hängt von Ihrem individuellen
                Versicherungstarif ab.
              </p>
              <p className="text-lg text-muted-foreground">
                Auch während Ihres Urlaubs auf Amrum können Sie Ihre Behandlungen über Ihre private Krankenversicherung
                abrechnen. Bei Fragen zur Abrechnung oder Erstattung stehe ich Ihnen gerne beratend zur Seite.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Gesetzlich Versicherte auf Amrum</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Als gesetzlich versicherter Patient benötigen Sie für die Behandlung ein Rezept von Ihrem Arzt. Mit
                diesem Rezept können Sie einen Termin bei mir vereinbaren. Die Abrechnung erfolgt dann direkt mit Ihrer
                Krankenkasse.
              </p>
              <p className="text-lg text-muted-foreground">
                Für Urlauber auf Amrum: Auch mit einem Rezept von Ihrem Heimatarzt können Sie während Ihres Aufenthalts
                auf Amrum Behandlungen in Anspruch nehmen. Bitte beachten Sie, dass für bestimmte Leistungen eine
                Zuzahlung erforderlich sein kann.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihre Behandlung auf Amrum?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Vereinbaren Sie jetzt einen Termin für Physiotherapie, Massage oder Yoga und starten Sie Ihren Weg zu mehr
              Wohlbefinden und Gesundheit auf Amrum.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/kontakt">Jetzt Termin auf Amrum vereinbaren</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

