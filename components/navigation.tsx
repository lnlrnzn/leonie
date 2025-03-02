"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoadingBar } from "@/components/loading-bar"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Startseite", href: { pathname: "/" } },
    { name: "Über Mich", href: { pathname: "/uber-mich" } },
    { name: "Leistungen", href: { pathname: "/leistungen" } },
    { name: "Preisliste", href: { pathname: "/preisliste" } },
    { name: "Kontakt", href: { pathname: "/kontakt" } },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <LoadingBar />
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={{ pathname: "/" }} className="font-heading text-2xl font-bold text-primary">
          <HeaderWord>Leonie</HeaderWord> <HeaderWord>Schlör</HeaderWord>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href.pathname}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === item.href.pathname 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground",
              )}
              aria-current={pathname === item.href.pathname ? "page" : undefined}
            >
              <HeaderWord>{item.name}</HeaderWord>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href={{ pathname: "/" }} className="font-heading text-2xl font-bold text-primary">
                <HeaderWord>Leonie</HeaderWord> <HeaderWord>Schlör</HeaderWord>
              </Link>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="container flex flex-col px-4 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href.pathname}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-4 transition-colors hover:text-primary block border-b border-muted",
                      pathname === item.href.pathname ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={pathname === item.href.pathname ? "page" : undefined}
                  >
                    <HeaderWord>{item.name}</HeaderWord>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 + 0.1 }}
              >
                <Button className="w-full bg-gradient-primary" size="lg" asChild>
                  <Link href={{ pathname: "/kontakt" }}>
                    Termin vereinbaren
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeaderWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block group">
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-0 group-hover:delay-300"></span>
    </span>
  )
}

