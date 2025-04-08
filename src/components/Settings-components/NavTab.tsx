"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: "account", label: "Profile settings" },
    { id: "notification", label: "Notification settings" },
    { id: "pricing", label: "Pricing plans" },
    { id: "security", label: "Log in & Security settings" },
    { id: "contact", label: "Contact us" },
  ]

  const navRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (!navRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = navRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
  }

  const handleScroll = (direction: "left" | "right") => {
    if (!navRef.current) return

    const scrollAmount = 150
    navRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    // Initial check
    checkScroll()

    // Add event listeners
    nav.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    // Clean up
    return () => {
      nav.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Left scroll button */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md md:hidden"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
      )}

      {/* Navigation tabs */}
      <div
        ref={navRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-4 scroll-smooth whitespace-nowrap w-full max-w-screen md:whitespace-normal "
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <div className="flex space-x-2 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                " px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#0967D2] to-[#09CBD2] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md md:hidden"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  )
}

