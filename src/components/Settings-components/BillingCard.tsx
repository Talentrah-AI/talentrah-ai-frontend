"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { CancelConfirmationModal } from "./modals/Cancellation-confirmation-modal"
import { CancellationFeedbackModal } from "./modals/cancellation-feedback-modal"
import { SubscriptionCanceledModal } from "./modals/subscription-canceled-modal"

interface SubscriptionInfoProps {
  plan: string
  nextRenewal: string
  billingCycle: string
  onPlanChange?: (newPlan: string) => void
}

const BillingCard = ({ plan, nextRenewal, billingCycle, onPlanChange  }: SubscriptionInfoProps) => {
    const isPremium = plan === "Premium"
  const isFree = plan === "Free plan"

  // Modal states
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showCanceledModal, setShowCanceledModal] = useState(false)

  // Handle cancellation flow
  const handleCancelClick = () => {
    setShowCancelConfirmation(true)
  }

  const handleConfirmCancel = () => {
    setShowCancelConfirmation(false)
    setShowFeedbackModal(true)
  }

  const handleFeedbackSubmit = (reason: string, details?: string) => {
    // Here you would typically send this data to your backend
    console.log("Cancellation reason:", reason, details)
    setShowFeedbackModal(false)
    setShowCanceledModal(true)

    // Update the plan state
    if (onPlanChange) {
      onPlanChange("Free plan")
    }
  }

  const handleResubscribe = () => {
    setShowCanceledModal(false)
    // Logic to resubscribe
    if (onPlanChange) {
      onPlanChange("Premium")
    }
  }

  const handleExploreFeatures = () => {
    setShowCanceledModal(false)
    // Logic to navigate to features page
  }
  return (
   
    <>
    <div className="bg-gray-900 text-white  p-6  rounded-[12px] relative overflow-hidden">
    <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742800571/bg-sub_e0cny4.jpg" alt="Overlay Image" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[#02152acc]"></div>
      <div className="space-y-4 relative z-10">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Your current plan</span>
          <span className="font-medium">{plan}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Your next renewal date</span>
          <span className="font-medium">{nextRenewal}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Billing cycle</span>
          <span className="font-medium">{billingCycle}</span>
        </div>
      </div>

      {isPremium && (
        <button
          className="w-full mt-6 text-center py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 transition-colors relative z-10"
          onClick={handleCancelClick}
        >
          Cancel current subscription
        </button>
      )}

      {isFree && (
        <div className="mt-6 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-yellow-400">
            <Sparkles size={16} />
            <span className="font-medium">You&apos;re on the Free Plan</span>
          </div>

          <p className="text-sm text-gray-400">Unlock premium features to boost your job search!</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <span>AI-powered resume optimization</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <span>One-on-one mentorship calls</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <span>Unlimited applications with AI assistance</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex-1 py-2 bg-transparent border border-gray-600 rounded-md text-white hover:bg-gray-800 transition-colors">
              View plans
            </button>
            <button
              className="flex-1 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors"
              onClick={() => onPlanChange && onPlanChange("Premium")}
            >
              Upgrade
            </button>
          </div>
        </div>
      )}

      {!isPremium && !isFree && (
        <div className="mt-6 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-yellow-400">
            <Sparkles size={16} />
            <span className="font-medium">Upgrade & Save!</span>
          </div>

          <p className="text-sm text-gray-400">
            Switch to the annual plan and enjoy exclusive benefits while saving more.
          </p>

          <button className="w-full py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors">
            Upgrade to annual
          </button>
        </div>
      )}
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
      expiryDate={nextRenewal}
      onResubscribe={handleResubscribe}
      onExploreFeatures={handleExploreFeatures}
    />
  </>
  )
}

export default BillingCard