"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoadingBar } from "@/components/layout/loading-bar"
import { motion, AnimatePresence } from "framer-motion"

export interface NavigationItem {
  name: string;
  href: { pathname: string };
}

/**
 * Main navigation component with responsive mobile menu
 */
export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: NavigationItem[] = [
    { name: "Startseite", href: { pathname: "/" } },
    { name: "Über Mich", href: { pathname: "/uber-mich" } },
    { name: "Leistungen", href: { pathname: "/leistungen" } },
    { name: "Preisliste", href: { pathname: "/preisliste" } },
    { name: "Kontakt", href: { pathname: "/kontakt" } },
  ]

  // Handle scroll effects
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

  // Navigation item animations
  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <LoadingBar />
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href={{ pathname: "/" }} className="font-heading text-2xl font-bold text-primary">
          <HeaderWord>Physiotherapie</HeaderWord> <HeaderWord>Amrum</HeaderWord>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href.pathname}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname.pathname === item.href.pathname 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground"
              )}
              aria-current={pathname.pathname === item.href.pathname ? "page" : undefined}
            >
              <HeaderWord>{item.name}</HeaderWord>
            </Link>
          ))}
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-primary font-medium ml-2"
            asChild
          >
            <Link href={{ pathname: "/kontakt" }}>
              Termin vereinbaren
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background flex flex-col"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href={{ pathname: "/" }} className="font-heading text-2xl font-bold text-primary">
                <HeaderWord>Physiotherapie</HeaderWord> <HeaderWord>Amrum</HeaderWord>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="container flex flex-col gap-4 py-8 px-4 flex-1 overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href.pathname}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg font-medium py-3 transition-colors hover:text-primary flex items-center border-b border-muted/50",
                      pathname.pathname === item.href.pathname ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={pathname.pathname === item.href.pathname ? "page" : undefined}
                  >
                    <span className="flex-1">{item.name}</span>
                    {pathname.pathname === item.href.pathname && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-primary mr-2"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-auto pt-6">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-gradient-primary font-medium text-center"
                  asChild
                >
                  <Link href={{ pathname: "/kontakt" }}>
                    Termin vereinbaren
                  </Link>
                </Button>
              </div>
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