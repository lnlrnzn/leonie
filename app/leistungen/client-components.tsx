"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

export function ClientServiceSection({ 
  className, 
  children,
  id 
}: { 
  className?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("py-12 md:py-16", className)}
    >
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  )
} 