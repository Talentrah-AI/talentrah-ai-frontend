"use client";

import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AvatarSection() {
  const [avatar, setAvatar] = useState<string | null>(
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      alert("Only JPEG, PNG, and JPG images are supported");
      return;
    }

    // Check file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size must be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="border-b p-6 space-y-4 flex gap-[73px] items-center justify-start">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-black">
          Avatar
        </h2>
        <p className="text-[12px] text-[#717A84]-400">
          Update your profile photo to personalise your account
        </p>
      </div>
      <div className="flex items-center gap-6 text-[12px]">
        <div className="relative group">
          <Avatar
            className={cn(
              "h-[60px] w-[60px] cursor-pointer border-2 border-transparent transition-all duration-200",
              "group-hover:border-primary/20",
              avatar ? "" : "bg-muted"
            )}
            onClick={handleAvatarClick}
          >
            <AvatarImage src={avatar || ""} alt="Profile" />
            <AvatarFallback className="text-xl font-medium">
              {avatar ? "SF" : "?"}
            </AvatarFallback>
          </Avatar>
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            onClick={handleAvatarClick}
          >
            <span className="text-white text-xs font-medium">Change</span>
          </div>
        </div>

        <div className="space-y-1 flex-1">
          <div className="flex gap-3 mt-3">
            <Button variant="outline" size="sm" onClick={handleAvatarClick}>
              Upload Image
            </Button>
            {avatar && (
              <Button
                variant="outline"
                size="sm"
                className="border-[#E95439]"
                onClick={handleRemoveAvatar}
              >
                <Trash2 className="h-4 w-4 mr-1 text-destructive " />
              </Button>
            )}
          </div>
          <p className="text-[12px] text-[#414A53] mt-2">
            We only support JPEG, PNG, JPG. 2MB max
          </p>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/jpeg,image/png,image/jpg"
        onChange={handleFileChange}
      />
    </div>
  );
}
