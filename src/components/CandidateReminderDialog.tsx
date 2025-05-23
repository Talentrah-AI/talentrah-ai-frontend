import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { useState } from "react"
  
  interface ReminderDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
  } 

  const ReminderDialog: React.FC<ReminderDialogProps> = ({ open, onOpenChange })=> {
    const [selectedIndex, setSelectedIndex] = useState(0)
  
    const reminderOptions = [
      "Complete your profile",
      "Create a resume",
      "Generate a cover letter",
      "Apply for jobs",
      "Upgrade your plan",
      "Book a mentorship session",
    ]
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md px-6 py-5">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <DialogTitle className="text-base font-medium text-gray-900">
                Send reminder to{" "}
                <span className="text-blue-600 font-medium">Andrew</span>
              </DialogTitle>
            </div>
          </DialogHeader>
  
          {/* Reminder Options */}
          <div className="flex flex-col space-y-3 mt-4">
            {reminderOptions.map((option, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-default "
                onClick={() => setSelectedIndex(index)}
              >
                <span className="text-sm text-gray-800">{option}</span>
                <div
                  className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                    selectedIndex === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedIndex === index && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
  
          {/* Message Box */}
          <div className="mt-5">
            <span className="text-sm font-medium text-gray-700">Message</span>
            <div className="mt-2 border rounded-md p-3 text-sm text-gray-800 bg-gray-50">
              Hi [Candidate Name], we noticed you haven’t completed your profile.
              A complete profile increases your chances of landing interviews. Log
              in now to finish!
            </div>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <Button
              variant="outline"
              className="text-gray-700 border-gray-300 bg-white hover:bg-gray-100"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Send reminder
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  export default ReminderDialog
  