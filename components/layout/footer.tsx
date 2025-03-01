import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FooterProps {
  className?: string
}

/**
 * Enhanced footer component with contact information, links, and social media
 */
export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-muted/50 pt-16 pb-8", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-primary">Physiotherapie Amrum</h3>
            <p className="text-muted-foreground max-w-xs">
              Professionelle Physiotherapie auf der wunderschönen Insel Amrum. Wir bieten individuelle Behandlungen für Ihr Wohlbefinden.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Besuchen Sie uns auf Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Folgen Sie uns auf Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Strandstraße 123, 25946 Amrum</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+4912345678" 
                  className="hover:text-primary transition-colors"
                >
                  +49 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:info@physiotherapie-amrum.de" 
                  className="hover:text-primary transition-colors"
                >
                  info@physiotherapie-amrum.de
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p>Mo-Fr: 08:00-18:00</p>
                  <p>Sa: 09:00-13:00</p>
                  <p>So: Geschlossen</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  href={{ pathname: "/" }}
                  className="hover:text-primary transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/uber-mich" }}
                  className="hover:text-primary transition-colors"
                >
                  Über Mich
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/leistungen" }}
                  className="hover:text-primary transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/preisliste" }}
                  className="hover:text-primary transition-colors"
                >
                  Preisliste
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/kontakt" }}
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  href={{ pathname: "/impressum" }}
                  className="hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/datenschutz" }}
                  className="hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link 
                  href={{ pathname: "/agb" }}
                  className="hover:text-primary transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Physiotherapie Amrum. Alle Rechte vorbehalten.</p>
          <p className="mt-1">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  )
} 