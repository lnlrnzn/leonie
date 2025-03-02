"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React, { useEffect, useState, createContext, useContext } from "react"
import { TherapyIcon } from "@/components/ui/icons/therapy-icons"

// Create context to share animation state with child components
const AnimationContext = createContext({ shouldAnimateImmediately: false });

export function ClientPriceSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section or second section
  const isHeroSection = !!className?.includes('pt-');
  const isSecondSection = !!className?.includes('bg-muted/30') && !isHeroSection;
  const shouldAnimateImmediately = isHeroSection || isSecondSection;
  
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections and second sections, trigger animation immediately
  useEffect(() => {
    if (shouldAnimateImmediately) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimateImmediately]);

  // Ensure context value is always a boolean
  const contextValue = { shouldAnimateImmediately: !!shouldAnimateImmediately };

  return (
    <AnimationContext.Provider value={contextValue}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        {...(shouldAnimateImmediately 
          ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
          : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
        )}
        transition={{ duration: 0.4 }}
        className={cn("py-12 md:py-16", className)}
      >
        <div className="container px-4 md:px-6">
          {children}
        </div>
      </motion.section>
    </AnimationContext.Provider>
  )
}

export function ClientPriceTableRow({
  name,
  description,
  duration,
  price,
  icon,
  index,
  isEven
}: {
  name: string
  description?: string
  duration: string
  price: string
  icon?: "massage" | "physiotherapy" | "rehabilitation" | "yoga" | "wellness" | "manual-therapy" | "acupuncture"
  index: number
  isEven: boolean
}) {
  // Get animation context to know if we should animate immediately
  const { shouldAnimateImmediately } = useContext(AnimationContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For rows in the second section, animate immediately with staggered delay
  useEffect(() => {
    if (shouldAnimateImmediately) {
      // Stagger the animations slightly based on index
      const timer = setTimeout(() => setShouldAnimate(true), 100 + index * 50);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimateImmediately, index]);

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      {...(shouldAnimateImmediately 
        ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 } }
      )}
      transition={{ duration: 0.25 }}
      className={isEven ? "bg-background" : "bg-muted/20"}
    >
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <TherapyIcon name={icon} className="h-4 w-4 text-primary" />
            </div>
          )}
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-muted-foreground hidden md:table-cell">
        {description || "-"}
      </td>
      <td className="px-4 py-4 text-muted-foreground">
        {duration}
      </td>
      <td className="px-4 py-4 text-right font-medium">
        {price}
      </td>
    </motion.tr>
  )
} 