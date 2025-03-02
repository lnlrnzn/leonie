"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  isHero?: boolean // Explicit prop to indicate hero section
}

type VariantProps = {
  opacity: number
  y?: number
  x?: number
}

const getVariants = (direction: string = "up", distance: number = 40) => {
  const variants: {
    hidden: VariantProps
    visible: VariantProps
  } = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  if (direction === "up") {
    variants.hidden = { ...variants.hidden, y: distance }
    variants.visible = { ...variants.visible, y: 0 }
  } else if (direction === "down") {
    variants.hidden = { ...variants.hidden, y: -distance }
    variants.visible = { ...variants.visible, y: 0 }
  } else if (direction === "left") {
    variants.hidden = { ...variants.hidden, x: distance }
    variants.visible = { ...variants.visible, x: 0 }
  } else if (direction === "right") {
    variants.hidden = { ...variants.hidden, x: -distance }
    variants.visible = { ...variants.visible, x: 0 }
  }

  return variants
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  isHero = false // Default to false
}: AnimatedSectionProps) {
  // Also check className for hero sections for backward compatibility
  const isHeroSection = isHero || className?.includes('pt-');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);

  const variants = getVariants(direction)

  return (
    <motion.div
      className={cn("w-full", className)}
      variants={variants}
      initial="hidden"
      {...(isHeroSection 
        ? { animate: shouldAnimate ? "visible" : "hidden" }
        : { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
      )}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

