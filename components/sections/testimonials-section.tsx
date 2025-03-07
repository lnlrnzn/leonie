"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Testimonial {
  id: string
  content: string
  author: string
  role?: string
  rating?: number
}

export interface TestimonialsSectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
  className?: string
}

/**
 * A testimonials section with a carousel to showcase client reviews
 */
export function TestimonialsSection({
  title = "Das sagen meine Kunden",
  subtitle = "Erfahrungen & Bewertungen",
  testimonials = defaultTestimonials,
  className,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setTimeout(() => {
        if (!isPaused) {
          goToNext()
        }
      }, 8000)
    }

    startTimer()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentIndex, isPaused])

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  // Generates stars for rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-amber-400" : "text-gray-300"
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section
      className={cn("py-16 md:py-24 relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          </div>
        </div>

        <div className="mt-12 md:mt-16 relative">
          <div className="relative overflow-hidden py-10">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full shadow-sm bg-background/80 backdrop-blur-sm transition-transform hover:scale-105"
                onClick={goToPrev}
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full shadow-sm bg-background/80 backdrop-blur-sm transition-transform hover:scale-105"
                onClick={goToNext}
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="mx-auto max-w-3xl px-8 md:px-12"
              >
                <Quote className="h-12 w-12 text-primary/20 mb-2" />
                <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentIndex].author}
                    </div>
                    {testimonials[currentIndex].role && (
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].role}
                      </div>
                    )}
                    {testimonials[currentIndex].rating && (
                      <div className="flex mt-1">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/5 to-transparent opacity-70" />
    </section>
  )
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    content:
      "Nach kurzfristiger unproblematischer Terminabsprache erhielt ich mehrere Behandlungen. Leonie ging mit großer Fachkompetenz und ihrer freundlichen, zugewandten und einfühlsamen Art auf meine krankheitsbedingten Einschränkungen ein. Ihre zusätzlichen motivierenden Übungsempfehlungen sind super alltagstauglich. Ich kann Leonie nur weiterempfehlen. Vielen lieben Dank nochmal und alles Gute!",
    author: "M HA",
    role: "",
    rating: 5,
  },
  {
    id: "testimonial-2",
    content:
      "Ich habe nach einem Verdrehungstrauma einen Meniskusriss im rechten Knie und wurde von Leonie 7 mal kompetent behandelt. Zuerst langsam durch Lockerung der muskulären Verklebungen, dann Stärkung der Muskeln um das Knie zur Stabilisierung des Gelenks. Ich hatte nach 10 Tagen weniger Schmerzen und eine viel bessere Mobilität. Vielen Dank für die Lebensqualität und vermutlich Verschiebung der Arthroskopie, falls die überhaupt noch nötig wird. Alles Gute Leonie",
    author: "Beatrix Holthuysen",
    role: "",
    rating: 5,
  },
  {
    id: "testimonial-3",
    content:
      "Sehr kompetent, unkompliziert und freundlich :-) Wir hatten innerhalb von einem Tag einen Termin für eine Massage in unserer Ferienwohnung in Norddorf. Leonie ist ausgebildete Physiotherapeutin und ist sehr gut auf unsere Bedürfnisse eingegangen. Wir empfehlen sie sehr gerne weiter und beim nächsten Besuch auf Amrum gibt's unbedingt wieder eine Massage mit Leonie.",
    author: "Michael Heck",
    role: "",
    rating: 5,
  }
] 