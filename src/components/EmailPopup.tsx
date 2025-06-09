import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Bold, Undo2Icon, Redo2Icon, X, Upload,
    Type, 
    Italic,
    Underline,
    Strikethrough,
    Code } from "lucide-react";
  import { useRef } from "react";
  import React, { useState } from 'react';
  import EmailTagInput from "@/components/EmailTagInput";
  import EmailDialog from '@/components/EmailDialog';
 
  type EmailPopupProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
  };
  
    const EmailPopup = ({ open, setOpen }: EmailPopupProps) =>  {
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleAttachClick = () => {
      fileInputRef.current?.click();
    };

    //FOR FILE UPLOAD 
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear file input
    }
  };
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[533px] !max-w-none h-[654px] p-6 overflow-hidden rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Send an email</DialogTitle>
            <p className="text-xs text-gray-500">
              You are about sending an email to{" "}
              <span className="text-blue-600 font-medium">John Doe</span>
            </p>
          </DialogHeader>
  
          <div className="space-y-4 mt-4">
            {/* To field */}
            <div>
              <label className="text-sm font-medium">To</label>
              <EmailTagInput />
              {/* <Input placeholder="johndoe@email.com" className="h-12" /> */}
            </div>
  
            {/* Subject field */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Subject here..." className="h-12" />
            </div>
  
            {/* Email body */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <div className="relative">
                
                {/* Editor icons */}
                <div className="absolute top-2 left-2 flex gap-2 text-gray-600">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-t-lg">
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Undo2Icon size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Redo2Icon size={16} className="text-gray-600" />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-1" />
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Type size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Bold size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Italic size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Underline size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Strikethrough size={16} className="text-gray-600" />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-1" />
                    <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
                        <Code size={16} className="text-gray-600" />
                    </button>
                    </div>
                </div>
                <Textarea
                  placeholder="Write your message..."
                  className="h-40 pr-4 pb-10 pt-15"
                />
              </div>
            </div>
  
            {/* Attach file to the right */}
          <div className="flex justify-end">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <Button
              variant="ghost"
              className="text-sm flex items-center gap-1"
              onClick={handleAttachClick}
            >
              <Upload className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Attach File</span>
            </Button>
          </div>

          {/* Show selected file */}
          {selectedFile && (
            <div className="flex items-start justify-between bg-gray-200 text-blue-800 
            px-4 py-3 rounded relative mt-2 mb-4">
              <div className="flex gap-2 text-blue-600">
                {selectedFile.name}
              </div>
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={handleRemoveFile}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
      
            {/* Footer buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setDialogOpen(true)}
              >Send email
                <EmailDialog 
                   open={dialogOpen}
                   onClose={() => setDialogOpen(false)}
                />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  export default EmailPopup
  