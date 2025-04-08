"use client"

import { useState } from "react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface CancellationFeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (reason: string, details?: string) => void
}

export function CancellationFeedbackModal({ isOpen, onClose, onSubmit }: CancellationFeedbackModalProps) {
  const [reason, setReason] = useState<string>("")
  const [details, setDetails] = useState<string>("")

  const handleSubmit = () => {
    onSubmit(reason, details)
    setReason("")
    setDetails("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md min-h-[484px]">
        <DialogHeader className="gap-2">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogTitle>We&apos;re sad to see you go!</DialogTitle>
          <DialogDescription className="text-red-500">
            * Could you tell us why? Your feedback helps us improve.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <RadioGroup value={reason} onValueChange={setReason}>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
              <RadioGroupItem value="too_expensive" id="too_expensive" />
              <Label htmlFor="too_expensive">Too expensive</Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
              <RadioGroupItem value="not_using" id="not_using" />
              <Label htmlFor="not_using">Not using the features</Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
              <RadioGroupItem value="found_another" id="found_another" />
              <Label htmlFor="found_another">Found another tool</Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
              <RadioGroupItem value="others" id="others" />
              <Label htmlFor="others">Others</Label>
            </div>
          </RadioGroup>

          {reason === "others" && (
            <div className="space-y-2">
              <Label htmlFor="details" className="text-red-500">
                * Can you give us more details?
              </Label>
              <Textarea
                id="details"
                placeholder="Type here"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col md:flex-row md:gap-2 ">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={!reason || (reason === "others" && !details)}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

