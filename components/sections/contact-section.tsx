"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ClientContactForm } from "@/app/kontakt/client-components"

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
  subtitle = "Ich bin für dich da",
  description = "Hast du Fragen oder möchtest du einen Termin vereinbaren? Nutze mein Kontaktformular oder kontaktiere mich direkt.",
  className,
}: ContactSectionProps) {
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, staggerChildren: 0.05 }}
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-muted-foreground">
                    Uasterstigh 3<br />
                    25946 Nebel auf Amrum
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
                    <a href="tel:+4917364148465" className="hover:text-primary transition-colors">
                      +49 173 6414846
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
                    <a href="mailto:leonieschloer.physio@gmail.com" className="hover:text-primary transition-colors">
                      leonieschloer.physio@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* OpenStreetMap */}
            <div className="mt-8 overflow-hidden rounded-lg border">
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.17760467529297%2C54.58260818365746%2C8.52092742919922%2C54.73671293675226&amp;layer=mapnik" 
                  style={{ border: 0 }}
                  title="Praxisstandort auf Amrum - OpenStreetMap"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="py-2 px-3 bg-muted/30 text-sm">
                <a 
                  href="https://www.openstreetmap.org/?#map=12/54.6597/8.3493" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Größere Karte anzeigen
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ClientContactForm />
        </div>
      </div>
    </section>
  )
} 