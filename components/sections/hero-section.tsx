"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: { pathname: string }
  imageSrc?: string
}

/**
 * A modern, attractive hero section component with animations
 */
export function HeroSection({
  title = "Physiotherapie für Ihr Wohlbefinden",
  subtitle = "Professionelle Behandlung auf Amrum",
  description = "Erleben Sie hochwertige physiotherapeutische Behandlungen in entspannter Atmosphäre. Ich helfe Ihnen dabei, Schmerzen zu lindern und Ihre Mobilität zu verbessern.",
  ctaText = "Termin vereinbaren",
  ctaLink = { pathname: "/kontakt" },
  imageSrc = "/images/hero-image.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Wave background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,227.10714285714283 228.71428571428578,254.21428571428572 351,230 C 473.2857142857142,205.78571428571428 603.4999999999999,130.25 713,133 C 822.5000000000001,135.75 911.2857142857142,216.78571428571428 1029,245 C 1146.7142857142858,273.2142857142857 1293.357142857143,248.60714285714286 1440,224 C 1440,224 1440,400 1440,400 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            d="M 0,400 C 0,400 0,266.6666666666667 0,266.6666666666667 C 102.67857142857144,291.75 205.35714285714286,316.8333333333333 335,322 C 464.64285714285717,327.1666666666667 621.2499999999999,312.4166666666667 744,289 C 866.7500000000001,265.5833333333333 955.6428571428573,233.5 1070,235 C 1184.3571428571427,236.5 1324.1785714285716,271.5833333333333 1440,306.6666666666667 C 1440,306.6666666666667 1440,400 1440,400 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            d="M 0,400 C 0,400 0,333.3333333333333 0,333.3333333333333 C 123.60714285714289,349.7023809523809 247.21428571428578,366.07142857142856 363,362 C 478.7857142857142,357.92857142857144 586.7499999999999,333.4166666666667 704,339 C 821.2500000000001,344.5833333333333 947.7857142857142,380.2619047619048 1066,383 C 1184.2142857142858,385.7380952380952 1294.107142857143,355.5357142857143 1440,325.3333333333333 C 1440,325.3333333333333 1440,400 1440,400 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="text-xl font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                {subtitle}
              </motion.p>
            </div>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Button 
                className="bg-gradient-primary font-medium"
                size="lg"
                asChild
              >
                <Link href={ctaLink}>
                  {ctaText}
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link href={{ pathname: "/leistungen" }}>
                  Leistungen entdecken
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative mx-auto aspect-video overflow-hidden rounded-xl lg:aspect-square"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20" />
            <Image
              src={imageSrc}
              alt="Professionelle Physiotherapie auf Amrum"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 