"use client"

import { useEffect, useState, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

/**
 * Content component that uses useSearchParams
 */
function LoadingBarContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset loading state when route changes
    setIsLoading(true)
    setProgress(0)

    // Simulate progress
    const incrementInterval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we approach 90%
        const increment = Math.max(1, 10 - Math.floor(prev / 10))
        const nextProgress = prev + increment

        if (nextProgress >= 90) {
          clearInterval(incrementInterval)
          return 90
        }
        return nextProgress
      })
    }, 100)

    // Complete the progress animation
    const timeout = setTimeout(() => {
      setProgress(100)
      const completeTimeout = setTimeout(() => {
        setIsLoading(false)
      }, 200) // Hide after completion animation
      return () => clearTimeout(completeTimeout)
    }, 500)

    return () => {
      clearInterval(incrementInterval)
      clearTimeout(timeout)
    }
  }, [pathname, searchParams])

  if (!isLoading && progress === 0) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50"
      style={{ width: `${progress}%`, transformOrigin: "left" }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        transition: { duration: isLoading ? 0.2 : 0.5 }
      }}
      transition={{ duration: 0.3 }}
    />
  )
}

/**
 * A loading bar component that shows progress during page transitions
 */
export function LoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarContent />
    </Suspense>
  )
} 