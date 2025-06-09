import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type DeleteJobDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function DeleteJobDialog({ open, onClose }: DeleteJobDialogProps) {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleDelete = () => {
    // You can also run your deletion logic here
    setShowSuccessDialog(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessDialog(false);
    onClose(); // close the main dialog too
  };

  return (
    <>
      {/* First Dialog: Confirm Deletion */}
      <Dialog open={open && !showSuccessDialog} onOpenChange={onClose}>
        <DialogContent>
          <DialogTitle>Delete Job?</DialogTitle>
          <p>Are you sure you want to delete this job?</p>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="border px-4 py-2 rounded">
              Cancel
            </button>
            <button onClick={handleDelete} className="bg-blue-600 text-white px-4 py-2 rounded">
              Yes, Delete Job
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Second Dialog: Deleted Successfully */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="text-center">
          <DialogTitle>🚀 Deleted successfully</DialogTitle>
          <p className="text-sm mt-2">
            The job has been removed from the system. If you need to restore or recreate the job, please add a new listing.
          </p>
          <button onClick={handleSuccessClose} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
            Continue
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
