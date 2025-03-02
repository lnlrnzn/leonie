"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export function ClientSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section
  const isHeroSection = className?.includes('pt-');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, we'll use a useEffect to trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      {...(isHeroSection 
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

export function ClientLegalSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section
  const isHeroSection = className?.includes('pt-');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, we'll use a useEffect to trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      {...(isHeroSection 
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

export function ClientContactSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section
  const isHeroSection = className?.includes('pt-');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, we'll use a useEffect to trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      {...(isHeroSection 
        ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
      )}
      transition={{ duration: 0.4 }}
      className={cn("py-12 md:py-16", className)}
      data-autofill="false"
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  )
} 