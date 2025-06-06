import { Badge } from "@/components/ui/badge"
import React, { useState } from 'react';
import { MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import ResumeDialog from '@/components/CandidateResumeDialog';



interface ResumeCardProps {
  name: string
  updated: string
  created: string
  category: string
  isDefault?: boolean
  isAiOptimized?: boolean
}

export default function ResumeCard({
  name,
  updated,
  created,
  category,
  isDefault,
  isAiOptimized,
}: ResumeCardProps) {
  const [openResume, setOpenResume] = useState(false)
  return (
    <div className="flex items-start justify-between py-2">
      <div className="space-y-2 -ml-5">
        <div className="flex items-center justify-between mb-2">
        <h3 className=" text-lg text-black">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {isDefault && <Badge variant="secondary" className="text-green-500 bg-green-100">Default</Badge>}
          {isAiOptimized && <Badge variant="outline" className="text-blue-600 bg-blue-100">AI optimized</Badge>}
        </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Last updated: {updated} | Created: {created} | {category}
        </p>
      </div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-muted-foreground p-2 hover:bg-gray-100 rounded">
          <MoreVertical className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onSelect={() => setOpenResume(true)} className="data-[state=active]:from-blue-500">View Resume</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Download</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <ResumeDialog
        open={openResume}
        onOpenChange={setOpenResume}
        
        downloadUrl="/resume.pdf"
      />

    </div>
  )
}
