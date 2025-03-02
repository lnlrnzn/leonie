"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export function ClientServiceSection({ 
  className, 
  children,
  id 
}: { 
  className?: string
  children: React.ReactNode
  id?: string
}) {
  // Check if this is a hero/top section or second section
  const isHeroSection = className?.includes('pt-');
  const isSecondSection = className?.includes('bg-muted/30') && !isHeroSection;
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

  return (
    <motion.section
      id={id}
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
  )
} 