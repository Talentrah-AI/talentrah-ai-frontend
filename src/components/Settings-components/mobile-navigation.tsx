"use client"

import { cn } from "@/lib/utils"

interface MobileNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function MobileNavigation({ activeTab, setActiveTab }: MobileNavigationProps) {
  const tabs = [
    { id: "account", label: "Profile settings" },
    { id: "notification", label: "Notification settings" },
    { id: "pricing", label: "Pricing plans" },
    { id: "security", label: "Log in & Security settings" },
    { id: "contact", label: "Contact us" },
  ]

  return (
    <div className="max-w-full  pb-2 scrollbar-hide">
      <div className="flex space-x-2 md:min-w-max overflow-hidden border w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "md:whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

