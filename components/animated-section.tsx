"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function AnimatedSection({ 
  children, 
  className,
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) {
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 50;
    
    const variants = {
      hidden: {},
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: delay * 0.1
        }
      }
    };
    
    switch (direction) {
      case "up":
        variants.hidden = { opacity: 0, y: distance };
        break;
      case "down":
        variants.hidden = { opacity: 0, y: -distance };
        break;
      case "left":
        variants.hidden = { opacity: 0, x: distance };
        break;
      case "right":
        variants.hidden = { opacity: 0, x: -distance };
        break;
      default:
        variants.hidden = { opacity: 0, y: distance };
    }
    
    return variants;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

