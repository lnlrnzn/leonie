import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-nude-100 py-12 border-t border-nude-200">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection delay={0} direction="up" isFooter={true}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Leonie Schlör</h3>
              <p className="text-nude-700">
                Professionelle Physiotherapie und Massage für dein Wohlbefinden und deine Gesundheit auf Amrum.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1} direction="up" isFooter={true}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Kontakt</h3>
              <address className="not-italic">
                <div className="space-y-4">
                  <p className="text-nude-700 flex items-center">
                    <Phone className="h-4 w-4 mr-3 flex-shrink-0" /> 
                    <a href="tel:+4917364148465" className="hover:text-primary transition-colors py-1">+49 173 6414846</a>
                  </p>
                  <p className="text-nude-700 flex items-center">
                    <Mail className="h-4 w-4 mr-3 flex-shrink-0" /> 
                    <a href="mailto:leonieschloer.physio@gmail.com" className="hover:text-primary transition-colors break-words py-1">
                      leonieschloer.physio@gmail.com
                    </a>
                  </p>
                  <p className="text-nude-700 flex items-start">
                    <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" /> 
                    <span>
                      Uasterstigh 3<br />
                      25946 Nebel<br />
                      Amrum
                    </span>
                  </p>
                </div>
              </address>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2} direction="up" isFooter={true}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Navigation</h3>
              <nav className="grid grid-cols-1 gap-3" aria-label="Footer Navigation">
                <Link href={{ pathname: "/" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Startseite
                </Link>
                <Link href={{ pathname: "/uber-mich" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Über Mich
                </Link>
                <Link href={{ pathname: "/leistungen" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Leistungen
                </Link>
                <Link href={{ pathname: "/preisliste" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Preisliste
                </Link>
                <Link href={{ pathname: "/kontakt" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Kontakt
                </Link>
              </nav>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={3} direction="up" isFooter={true}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">Leistungen</h3>
              <nav className="grid grid-cols-1 gap-3" aria-label="Leistungen Navigation">
                <Link href={{ pathname: "/leistungen", hash: "gesundheitstraining" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Gesundheitstraining
                </Link>
                <Link href={{ pathname: "/leistungen", hash: "tapen" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Tapen
                </Link>
                <Link href={{ pathname: "/leistungen", hash: "massage" }} className="text-nude-700 hover:text-primary transition-colors py-1">
                  Massage
                </Link>
              </nav>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 pt-6 border-t border-nude-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-nude-600 text-center sm:text-left">
              &copy; {currentYear} Leonie Schlör. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link href={{ pathname: "/impressum" }} className="text-sm text-nude-600 hover:text-primary transition-colors py-1">
                Impressum
              </Link>
              <Link href={{ pathname: "/datenschutz" }} className="text-sm text-nude-600 hover:text-primary transition-colors py-1">
                Datenschutz
              </Link>
              <Link href={{ pathname: "/agb" }} className="text-sm text-nude-600 hover:text-primary transition-colors py-1">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

