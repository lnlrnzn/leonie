import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-nude-100 py-12 border-t border-nude-200">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <AnimatedSection delay={0} direction="up">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-nude-900">Physiotherapie Amrum</h3>
              <p className="text-nude-700 mb-4">
                Professionelle Physiotherapie, Massage und Yoga für Ihr Wohlbefinden und Ihre Gesundheit auf Amrum.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="https://facebook.com" 
                  className="text-nude-600 hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://instagram.com" 
                  className="text-nude-600 hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Folgen Sie uns auf Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1} direction="up">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-nude-900">Kontakt</h3>
              <address className="not-italic">
                <div className="space-y-3">
                  <p className="text-nude-700 flex items-center">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" /> 
                    <a href="tel:+491234567890" className="hover:text-primary transition-colors">+49 123 456789</a>
                  </p>
                  <p className="text-nude-700 flex items-center">
                    <Mail className="h-4 w-4 mr-2 flex-shrink-0" /> 
                    <a href="mailto:info@physiotherapie-amrum.de" className="hover:text-primary transition-colors">
                      info@physiotherapie-amrum.de
                    </a>
                  </p>
                  <p className="text-nude-700 flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" /> 
                    <span>
                      Musterstraße 123<br />
                      25946 Nebel<br />
                      Amrum
                    </span>
                  </p>
                </div>
              </address>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2} direction="up">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-nude-900">Öffnungszeiten auf Amrum</h3>
              <div className="space-y-2">
                <p className="text-nude-700">
                  <span className="font-medium">Mo - Fr:</span> 08:00 - 18:00 Uhr
                </p>
                <p className="text-nude-700">
                  <span className="font-medium">Sa:</span> 09:00 - 13:00 Uhr
                </p>
                <p className="text-nude-700">
                  <span className="font-medium">So:</span> Geschlossen
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={3} direction="up">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-nude-900">Navigation</h3>
              <nav className="flex flex-col space-y-2" aria-label="Footer Navigation">
                <Link href={{ pathname: "/" }} className="text-nude-700 hover:text-primary transition-colors">
                  Startseite
                </Link>
                <Link href={{ pathname: "/uber-mich" }} className="text-nude-700 hover:text-primary transition-colors">
                  Über Mich
                </Link>
                <Link href={{ pathname: "/leistungen" }} className="text-nude-700 hover:text-primary transition-colors">
                  Leistungen
                </Link>
                <Link href={{ pathname: "/leistungen", hash: "massage" }} className="text-nude-700 hover:text-primary transition-colors">
                  Massagen
                </Link>
                <Link href={{ pathname: "/leistungen", hash: "yoga" }} className="text-nude-700 hover:text-primary transition-colors">
                  Yoga & Pilates
                </Link>
                <Link href={{ pathname: "/preisliste" }} className="text-nude-700 hover:text-primary transition-colors">
                  Preisliste
                </Link>
                <Link href={{ pathname: "/kontakt" }} className="text-nude-700 hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </nav>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 pt-6 border-t border-nude-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-nude-600">
              &copy; {currentYear} Physiotherapie Amrum - Leonie Schlör. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4">
              <Link href={{ pathname: "/impressum" }} className="text-sm text-nude-600 hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link href={{ pathname: "/datenschutz" }} className="text-sm text-nude-600 hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

