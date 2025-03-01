"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { FormInput } from "@/components/ui/form-input"

export interface ContactSectionProps {
  title?: string
  subtitle?: string
  description?: string
  className?: string
}

/**
 * A contact section with a form and contact information
 */
export function ContactSection({
  title = "Kontakt aufnehmen",
  subtitle = "Wir sind für Sie da",
  description = "Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Nutzen Sie unser Kontaktformular oder kontaktieren Sie uns direkt.",
  className,
}: ContactSectionProps) {
  const [formState, setFormState] = useState<{
    name: string
    email: string
    phone: string
    message: string
  }>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simulate API call
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (err) {
      setError("Es gab einen Fehler bei der Übermittlung. Bitte versuchen Sie es später erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                {subtitle}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">
                    Strandstraße 123<br />
                    25946 Amrum
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+4912345678" className="hover:text-primary transition-colors">
                      +49 1234 5678
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-Mail</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@physiotherapie-amrum.de" className="hover:text-primary transition-colors">
                      info@physiotherapie-amrum.de
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Öffnungszeiten</h3>
                  <p className="text-muted-foreground">
                    Mo-Fr: 08:00-18:00<br />
                    Sa: 09:00-13:00<br />
                    So: Geschlossen
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map preview (could be replaced with an actual map) */}
            <div className="mt-8 h-[200px] overflow-hidden rounded-lg bg-muted">
              <div className="h-full w-full bg-primary/5 flex items-center justify-center text-muted-foreground">
                Karte wird geladen...
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="rounded-xl border bg-card p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Schreiben Sie uns</h3>
            {isSuccess ? (
              <motion.div 
                className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-lg mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <FormInput
                    id="name"
                    name="name"
                    placeholder="Ihr Name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2" suppressHydrationWarning>
                    <Label htmlFor="email">E-Mail</Label>
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2" suppressHydrationWarning>
                    <Label htmlFor="phone">Telefon</Label>
                    <FormInput
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[120px] resize-y bg-background"
                  />
                </div>
                
                {error && (
                  <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg">
                    {error}
                  </div>
                )}
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Nachricht senden
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Wir werden Ihre Daten vertraulich behandeln und nicht an Dritte weitergeben.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 