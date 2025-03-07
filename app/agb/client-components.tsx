"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

export function ClientLegalSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={cn("py-12 md:py-16", className)}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  )
} 