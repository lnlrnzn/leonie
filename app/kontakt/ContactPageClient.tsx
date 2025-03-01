"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import AnimatedSection from "@/components/animated-section"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would implement the webhook integration
      // For example:
      // await fetch('https://your-webhook-url.com', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Kontakt zur Physiotherapie, Massage und Yoga Praxis auf Amrum"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakt</h1>
            <p className="text-xl text-white/90 max-w-xl">
              Nehmen Sie Kontakt mit mir auf und vereinbaren Sie einen Termin auf Amrum.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schreiben Sie mir</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Füllen Sie das Formular aus und ich werde mich so schnell wie möglich bei Ihnen melden. Auch für
                Urlauber auf Amrum biete ich flexible Terminmöglichkeiten an.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ihre Telefonnummer"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ihre Nachricht"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sie können mich auch telefonisch oder per E-Mail kontaktieren oder direkt in meiner Praxis auf Amrum
                vorbeikommen.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adresse auf Amrum</h3>
                    <p className="text-muted-foreground">
                      Physiotherapie Leonie Schlör
                      <br />
                      Musterstraße 123
                      <br />
                      25946 Nebel, Amrum
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefon</h3>
                    <p className="text-muted-foreground">+49 123 456789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                    <p className="text-muted-foreground">info@physiotherapie-amrum.de</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Öffnungszeiten auf Amrum</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Montag - Freitag</span>
                      <span className="text-muted-foreground">08:00 - 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Samstag</span>
                      <span className="text-muted-foreground">09:00 - 13:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sonntag</span>
                      <span className="text-muted-foreground">Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So finden Sie mich auf Amrum</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meine Praxis ist zentral in Nebel auf Amrum gelegen und gut mit öffentlichen Verkehrsmitteln zu erreichen.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Here you would typically embed a Google Maps iframe */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Hier würde eine Karte von Amrum eingebettet werden.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* For Tourists Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Für Urlauber auf Amrum</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Auch während Ihres Urlaubs auf Amrum müssen Sie nicht auf professionelle Behandlungen verzichten. Ich
                biete flexible Terminvereinbarungen für Urlauber an und stelle sicher, dass Sie Ihre Zeit auf der Insel
                schmerzfrei genießen können.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Ob Sie eine akute Verletzung behandeln lassen möchten, eine entspannende Massage nach einem langen Tag
                am Strand suchen oder an einem Yoga-Kurs teilnehmen möchten – in meiner Praxis auf Amrum sind Sie
                herzlich willkommen.
              </p>
              <p className="text-lg text-muted-foreground">
                Für Urlauber biete ich spezielle Pakete an, die auf die Dauer Ihres Aufenthalts abgestimmt sind.
                Sprechen Sie mich gerne an oder buchen Sie direkt online einen Termin.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Physiotherapie, Massage und Yoga für Urlauber auf Amrum"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

