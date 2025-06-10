import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';

interface ProfileImageProps {
  initialImage?: string;
  onImageChange?: (imageUrl: string) => void;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  initialImage = 'https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png',
  onImageChange,
}) => {
  const [image, setImage] = useState<string>(initialImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const optimizeImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Create canvas for resizing
          const canvas = document.createElement('canvas');

          // Set dimensions (max 300px width/height while maintaining aspect ratio)
          const MAX_SIZE = 300;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_SIZE) {
              height = Math.round((height * MAX_SIZE) / width);
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width = Math.round((width * MAX_SIZE) / height);
              height = MAX_SIZE;
            }
          }

          canvas.width = width;
          canvas.height = height;

          // Draw resized image to canvas
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);

          // Convert to data URL (PNG format with good quality)
          const optimizedDataUrl = canvas.toDataURL('image/png', 0.9);
          resolve(optimizedDataUrl);
        };

        img.onerror = () => {
          reject(new Error('Failed to load image'));
        };

        img.src = event.target?.result as string;
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please select an image file.',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Show loading toast
      toast({
        title: 'Processing image',
        description: 'Please wait while we optimize your image...',
      });

      // Optimize the image
      const optimizedImage = await optimizeImage(file);

      // Update state with the new image
      setImage(optimizedImage);

      // Call the callback if provided
      if (onImageChange) {
        onImageChange(optimizedImage);
      }

      // Show success toast
      toast({
        title: 'Image updated',
        description: 'Your profile image has been updated successfully.',
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: 'Error',
        description: 'Failed to process the image. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative w-24 h-24 rounded-full overflow-hidden bg-yellow-400 cursor-pointer border-2 border-yellow-500"
        onClick={handleImageClick}
      >
        {image ? (
          <Image
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-xl">?</span>
          </div>
        )}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-white shadow-md hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick();
                }}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change profile picture</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ProfileImage;
