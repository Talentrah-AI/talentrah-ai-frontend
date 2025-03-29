"use client";

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { LockKeyhole } from "lucide-react"
import { LoadingSpinner } from "./loading-spinner"

interface TemplateCardProps {
    id: string
    image: string
    lock?: string
    type: "free" | "premium"
}

export function TemplateCard({ id, image, lock, type }: TemplateCardProps) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)

    const handleSelect = () => {
        if (lock) {
            alert("This template is locked!");
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            router.push("/personal-information");
        }, 1000);
    };

    return (
        <div
            className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer relative"
            onClick={handleSelect}
        >
            {isLoading && <LoadingSpinner />}
            <div className="aspect-[3/4] relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={`${type === "premium" ? "Premium" : "Free"} Template ${id}`}
                    fill
                    className="object-cover"
                    onLoad={() => setImageLoading(false)}
                />
                {lock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                        <LockKeyhole className="h-6 w-6 text-white" />
                    </div>
                )}
            </div>
        </div>
    )
}