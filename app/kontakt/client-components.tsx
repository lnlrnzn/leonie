"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useState } from "react"

// Context for sharing animation state between parent and children
export const HeroSectionContext = React.createContext({ 
  isHeroSection: false, 
  shouldAnimate: false 
});

export function ClientContactCard({
  icon,
  title,
  content,
  linkText,
  linkHref,
  delay
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  linkText?: string
  linkHref?: string
  delay: number
}) {
  // Use the hero section context
  const { isHeroSection, shouldAnimate } = React.useContext(HeroSectionContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      {...(isHeroSection
        ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
      )}
      transition={{ delay, duration: 0.25 }}
      className="rounded-xl border bg-background p-6 shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="font-medium">{title}</h3>
      <div className="text-muted-foreground mt-1">
        {content}
      </div>
      {linkText && linkHref && (
        <Button variant="link" className="px-0 h-auto mt-2" asChild>
          <a href={linkHref}>{linkText}</a>
        </Button>
      )}
    </motion.div>
  )
}

export function ClientContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border bg-background p-6 md:p-8 shadow-sm"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Schreiben Sie Mir</h2>
          <p className="text-muted-foreground">
            Füllen Sie das Formular aus und ich melde mich schnellstmöglich bei Ihnen.
          </p>
        </div>

        <form className="space-y-4" data-autofill="false">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Vorname
              </label>
              <input
                id="first-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Max"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Nachname
              </label>
              <input
                id="last-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Mustermann"
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="max.mustermann@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="+49 123 4567890"
              autoComplete="tel"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Betreff
            </label>
            <input
              id="subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Terminanfrage"
              required
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nachricht
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ihre Nachricht an uns..."
              required
              autoComplete="off"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              Ich akzeptiere die <Link href={{ pathname: "/datenschutz" }} className="text-primary underline">Datenschutzerklärung</Link>
            </label>
          </div>
          <Button type="submit" className="w-full">
            Nachricht senden
          </Button>
        </form>
      </div>
    </motion.div>
  )
}

export function ClientFaqItem({
  question,
  answer,
  index
}: {
  question: string
  answer: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      className="rounded-lg border p-6"
    >
      <h3 className="font-medium">{question}</h3>
      <p className="mt-2 text-muted-foreground">{answer}</p>
    </motion.div>
  )
}

export function ClientContactSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section (default to false if className is undefined)
  const isHeroSection = className?.includes('pt-') ?? false;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);

  // Provide the hero section context to children
  const contextValue = { isHeroSection, shouldAnimate };

  return (
    <HeroSectionContext.Provider value={contextValue}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        {...(isHeroSection 
          ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
          : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
        )}
        transition={{ duration: 0.4 }}
        className={className}
      >
        <div className="container px-4 md:px-6">
          {children}
        </div>
      </motion.section>
    </HeroSectionContext.Provider>
  )
} 