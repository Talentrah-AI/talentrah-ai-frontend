"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface SubscriptionCanceledModalProps {
  isOpen: boolean
  onClose: () => void
  expiryDate: string
  onResubscribe: () => void
  onExploreFeatures: () => void
}

export function SubscriptionCanceledModal({
  isOpen,
  onClose,
  expiryDate,
  onResubscribe,
  onExploreFeatures,
}: SubscriptionCanceledModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-[259px] md:h-[220px] md:w-[533px]">
        <DialogHeader className="gap-2 items-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogTitle className="flex items-center gap-2 text-center">
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Subscription Canceled
          </DialogTitle>
          <DialogDescription className="text-center">
            Your plan will remain active until {expiryDate}. You can resubscribe anytime.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col md:flex-row sm:gap-3 overflow-hidden w-full gap-2">
          <Button variant="outline" className="flex-1" onClick={onExploreFeatures}>
            Explore features
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex-1" onClick={onResubscribe}>
            Re-subscribe
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

