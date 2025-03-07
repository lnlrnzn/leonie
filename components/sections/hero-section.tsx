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
  showRating?: boolean
}

/**
 * A modern, attractive hero section component with animations
 */
export function HeroSection({
  title = "Physiotherapie für dein Wohlbefinden",
  subtitle = "Professionelle Behandlung auf Amrum",
  description = "Erlebe hochwertige physiotherapeutische Behandlungen in entspannter Atmosphäre. Ich helfe dir dabei, Schmerzen zu lindern und deine Mobilität zu verbessern.",
  ctaText = "Termin vereinbaren",
  ctaLink = { pathname: "/kontakt" },
  imageSrc = "/hero.jpg",
  showRating = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="text-xl font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
              >
                {subtitle}
              </motion.p>
            </div>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              {description}
            </motion.p>
            
            <motion.div
              className="flex flex-col w-full sm:w-auto gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            >
              <Button 
                className="bg-gradient-primary font-medium w-full sm:w-auto"
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
                className="w-full sm:w-auto"
                asChild
              >
                <Link href={{ pathname: "/leistungen" }}>
                  Leistungen entdecken
                </Link>
              </Button>
            </motion.div>
            
            {showRating && (
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <div className="flex items-center mb-1">
                  <div className="flex text-amber-400">
                    {/* 4 volle Sterne */}
                    {[...Array(4)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    
                    {/* 1 Stern zu 80% gefüllt */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient id="partialStar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="80%" stopColor="#f59e0b" />
                          <stop offset="80%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path 
                        fill="url(#partialStar)" 
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-medium">
                  19 Bewertungen (4.8 / 5)
                </p>
              </motion.div>
            )}
          </div>
          <motion.div 
            className="relative mx-auto w-full overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video lg:aspect-square"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20" />
            <Image
              src={imageSrc}
              alt="Leonie Schlör - Physiotherapie auf Amrum mit professionellen Behandlungen in entspannter Atmosphäre"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              fetchPriority="high"
              loading="eager"
              quality={85}
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 