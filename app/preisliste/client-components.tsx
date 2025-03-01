"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"
import { TherapyIcon } from "@/components/ui/icons/therapy-icons"

export function ClientPriceSection({ 
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
  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
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