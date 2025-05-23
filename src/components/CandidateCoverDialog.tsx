import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Copy, X, Calendar, Download } from "lucide-react";
  import { useState } from "react";
  import { toast } from "sonner";
  
  interface CoverLetterDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    position?: string;
    dateCreated?: string;
    coverLetterText: string;
    downloadUrl: string;
  }
  
  export default function CoverLetterDialog({
    open,
    onOpenChange,
    position = "UI/UX Designer",
    dateCreated = "01/01/2025",
    coverLetterText,
    downloadUrl,
  }: CoverLetterDialogProps) {
    const handleCopy = () => {
      navigator.clipboard.writeText(coverLetterText);
      toast.success("Cover letter copied to clipboard");
    };
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[649px] !max-w-none h-[649.5px] p-0 overflow-hidden rounded-lg"
  style={{ width: "649px" }}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <DialogTitle>Cover letter</DialogTitle>
              {/* <DialogClose asChild>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </DialogClose> */}
            </div>
  
            <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-md mb-4 text-sm font-medium">
              <span>{position}</span>
              <span className="flex items-center gap-1 text-xs">
                <Calendar className="w-3 h-3"/> Created: {dateCreated}</span>
            </div>

            <div className='flex justify-end px-2 mt-2 mb-4 gap-1'>
              <button
                onClick={handleCopy}
                className="text-xs px-2 py-2 text-gray-500 border-gray-500 flex items-center gap-2 rounded-md "
              >
                <Copy className="w-4 h-4" />
                 Copy
              </button>

            </div>

            <div className="bg-gray-50 p-4 rounded-md text-xs text-gray-500 leading-relaxed whitespace-pre-wrap border relative">
              {coverLetterText}

            </div>
  
            <div className="flex justify-between mt-6 gap-4">
              <DialogClose asChild>
                <Button variant="outline" className="w-70">Cancel</Button>
              </DialogClose>
              <a href={downloadUrl} download className="w-70">
                <Button className="gap-2 w-full">
                  <Download />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  