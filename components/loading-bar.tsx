"use client"

import { useState, useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

// Client component that uses useSearchParams
function LoadingBarContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Reset loading state when the route changes
  useEffect(() => {
    setIsLoading(true)
    setProgress(0)
    
    // Complete loading faster (300ms instead of 500ms)
    const timer = setTimeout(() => {
      setIsLoading(false)
      setProgress(100)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          // Increase the rate of progress (15 instead of 10)
          const diff = Math.random() * 15
          return Math.min(oldProgress + diff, 90)
        })
      }, 150) // Faster updates (150ms instead of 300ms)

      return () => {
        clearInterval(timer)
      }
    }
  }, [isLoading])

  if (!isLoading && progress === 0) return null

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-nude-200 z-50">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out hover:bg-nude-600"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Wrapper component with Suspense boundary
export function LoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarContent />
    </Suspense>
  )
}

