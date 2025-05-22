"use client"

import { useState } from "react"
import { Check, ChevronDown, MapPin } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { CancelConfirmationModal } from "./modals/Cancellation-confirmation-modal"
import { CancellationFeedbackModal } from "./modals/cancellation-feedback-modal"
import { SubscriptionCanceledModal } from "./modals/subscription-canceled-modal"

interface PricingPlan {
  name: string
  price: {
    monthly: {
      NGN: number
      USD: number
      CAD: number
    }
    annually: {
      NGN: number
      USD: number
      CAD: number
    }
  }
  features: string[]
}

const plans: PricingPlan[] = [
  {
    name: "Essential",
    price: {
      monthly: {
        NGN: 9000,
        USD: 9,
        CAD: 9,
      },
      annually: {
        NGN: 8000,
        USD: 8,
        CAD: 8,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
  {
    name: "Advanced",
    price: {
      monthly: {
        NGN: 9000,
        USD: 19,
        CAD: 19,
      },
      annually: {
        NGN: 8000,
        USD: 17,
        CAD: 17,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
  {
    name: "Professional",
    price: {
      monthly: {
        NGN: 5000,
        USD: 29,
        CAD: 29,
      },
      annually: {
        NGN: 4500,
        USD: 26,
        CAD: 26,
      },
    },
    features: [
      "Upload & analyze up to 5 resumes/month",
      "AI-powered resume scoring",
      "Job description match analysis",
      "Basic resume improvement suggestions",
      "Save & download optimized resumes",
    ],
  },
]

const countries = [
  { name: "Nigeria", code: "NGN", symbol: "₦" },
  { name: "United States", code: "USD", symbol: "$" },
  { name: "Canada", code: "CAD", symbol: "$" },
  { name: "Afghanistan", code: "USD", symbol: "$" },
  { name: "Albania", code: "USD", symbol: "$" },
  { name: "Algeria", code: "USD", symbol: "$" },
  { name: "Andorra", code: "USD", symbol: "$" },
  { name: "Angola", code: "USD", symbol: "$" },
  { name: "Argentina", code: "USD", symbol: "$" },
  { name: "Armenia", code: "USD", symbol: "$" },
  { name: "Armenia", code: "USD", symbol: "$" },
]

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activePlan, setActivePlan] = useState("Advanced")

  // Modal states
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showCanceledModal, setShowCanceledModal] = useState(false)

  const filteredCountries = searchQuery
    ? countries.filter((country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : countries

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country)
    setCountryDropdownOpen(false)
    setSearchQuery("")
  }

  const handleCancelSubscription = () => {
    setShowCancelConfirmation(true)
  }

  const handleConfirmCancel = () => {
    setShowCancelConfirmation(false)
    setShowFeedbackModal(true)
  }

  const handleFeedbackSubmit = (reason: string, details?: string) => {
    console.log("Cancellation reason:", reason, details)
    setShowFeedbackModal(false)
    setShowCanceledModal(true)
    setActivePlan("")
  }

  const handleResubscribe = () => {
    setShowCanceledModal(false)
    setActivePlan("Advanced")
  }

  const handleExploreFeatures = () => {
    setShowCanceledModal(false)
  }

  const getButtonText = (planName: string) => {
    if (planName === activePlan) {
      return "Cancel subscription"
    }
    if (activePlan) {
      return "Upgrade"
    }
    return "Subscribe"
  }

  const handlePlanAction = (planName: string) => {
    if (planName === activePlan) {
      handleCancelSubscription()
    } else {
      setActivePlan(planName)
    }
  }

  const formatPrice = (price: number) => {
    if (selectedCountry.code === "NGN") {
      return `₦${price.toLocaleString()}`
    }
    return `${selectedCountry.symbol}${price}`
  }

  return (
    <div className="p-6 ">
      <div className="flex justify-center space-x-4 items-center text-[20px]">
        <span className={`font-medium ${!isAnnual ? "text-blue-600" : "text-gray-500"}`}>Monthly</span>
        <Switch checked={isAnnual} onCheckedChange={() => setIsAnnual(!isAnnual)} />
        <span className={`font-medium ${isAnnual ? "text-blue-600" : "text-gray-500"}`}>Annually</span>
      </div>

      <div className="relative w-full max-w-xs mx-auto mb-[16px]">
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-2 shadow-md shadow-[#292D320D] rounded-[12px] bg-white cursor-pointer"
          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{selectedCountry.name}</span>
          </div>
          <ChevronDown size={16} />
        </button>

        {countryDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-[467px] overflow-auto ">
            <div className="p-2  flex items-center">
              <span>   
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66659 14.4987C11.1644 14.4987 13.9999 11.6632 13.9999 8.16536C13.9999 4.66756 11.1644 1.83203 7.66659 1.83203C4.16878 1.83203 1.33325 4.66756 1.33325 8.16536C1.33325 11.6632 4.16878 14.4987 7.66659 14.4987Z" stroke="#90989F" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.6666 15.1654L13.3333 13.832" stroke="#90989F" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-1  rounded-md text-[12px] outline-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {filteredCountries.map((country) => (
              <button
                key={country.name}
                className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => handleCountrySelect(country)}
              >
                {country.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-7 md:max-h-[485px] md:px-5">
        {plans.map((plan) => {
          const isActive = plan.name === activePlan
          const price = isAnnual
            ? plan.price.annually[selectedCountry.code as keyof typeof plan.price.annually]
            : plan.price.monthly[selectedCountry.code as keyof typeof plan.price.monthly]

          return (
            <div
              key={plan.name}
              className={`rounded-lg overflow-hidden  md:p-[20px] transition-colors duration-150  ${
                isActive ? "bg-gradient-to-t from-[#0967D2] to-[#09CBD2] text-white rounded-[32px]" : "bg-white border border-[#EFF0F2]"
              }`}
            >
              {isActive && (
                <div className=" py-1 px-4 text-right mt-[10px] md:mt-0 ">
                  <span className="text-xs font-medium bg-[#07A2A8] text-white  ml-auto px-4 py-2  rounded-full cursor-pointer">Active</span>
                </div>
              )}

              <div className="p-6">
                <div className={`${isActive ? "" : "text-gray-500"} text-[12px]`}>{plan.name}</div>

                <div className="mt-2 flex items-baseline">
                  <span className="text-[44px] font-bold">{formatPrice(price)}</span>
                  <span className={`ml-1 text-[12px] ${isActive ? "text-blue-100" : "text-gray-500"}`}>per month</span>
                </div>

                <Button
                  className={`w-full mt-4 text-[16px] cursor-pointer ${
                    isActive ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handlePlanAction(plan.name)}
                >
                  {getButtonText(plan.name)}
                </Button>

                <div className="mt-6">
                  <div className={`text-[12px] font-medium mb-4 ${isActive ? "text-blue-100" : "text-gray-500"}`}>
                    FEATURES
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`mr-2 mt-1 rounded-full p-1 ${isActive ? "bg-blue-400" : "bg-blue-100"}`}>
                          <Check size={12} className={isActive ? "text-white" : "text-blue-600"} />
                        </div>
                        <span className="text-[16px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modals */}
      <CancelConfirmationModal
        isOpen={showCancelConfirmation}
        onClose={() => setShowCancelConfirmation(false)}
        onConfirm={handleConfirmCancel}
      />

      <CancellationFeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleFeedbackSubmit}
      />

      <SubscriptionCanceledModal
        isOpen={showCanceledModal}
        onClose={() => setShowCanceledModal(false)}
        expiryDate="02/08/2025"
        onResubscribe={handleResubscribe}
        onExploreFeatures={handleExploreFeatures}
      />
    </div>
  )
}

