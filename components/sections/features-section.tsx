"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { TherapyIcon } from "@/components/ui/icons/therapy-icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export interface Feature {
  id: string
  icon: "massage" | "physiotherapy" | "rehabilitation" | "yoga" | "wellness" | "exercise"
  title: string
  description: string
}

export interface FeaturesSectionProps {
  title?: string
  subtitle?: string
  description?: string
  features?: Feature[]
  className?: string
}

/**
 * A features section to showcase the different therapy services offered
 */
export function FeaturesSection({
  title = "Meine Leistungen",
  subtitle = "Professionelle Therapie",
  description = "Ich biete verschiedene Behandlungsmethoden an, um Ihre Gesundheit zu verbessern und Schmerzen zu lindern.",
  features = defaultFeatures,
  className,
}: FeaturesSectionProps) {
  // Animation variants for features
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  }

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        <motion.div 
          className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
              variants={featureVariants}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <TherapyIcon name={feature.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
              {/* Decorative gradient */}
              <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-bl-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link href={{ pathname: "/leistungen" }} className="group">
              <span>Alle Leistungen entdecken</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const defaultFeatures: Feature[] = [
  {
    id: "massage",
    icon: "massage",
    title: "Massage",
    description: "Entspannende und regenerierende Massagen zur Lösung von Verspannungen und zur Förderung der Durchblutung."
  },
  {
    id: "gesundheitstraining",
    icon: "exercise",
    title: "Gesundheitstraining",
    description: "Individuelles Training zur Stärkung der Muskulatur, Verbesserung der Koordination und Förderung Ihrer Gesundheit."
  },
  {
    id: "tapen",
    icon: "rehabilitation",
    title: "Tapen",
    description: "Gezielte Unterstützung von Muskeln und Gelenken durch spezielles Tape zur Schmerzlinderung und Bewegungsoptimierung."
  }
] 