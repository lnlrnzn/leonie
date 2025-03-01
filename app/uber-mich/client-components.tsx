"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AboutSectionProps {
  className?: string
  children: React.ReactNode
}

export function ClientAboutSection({ 
  className, 
  children 
}: AboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("py-12 md:py-16", className)}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  )
} 