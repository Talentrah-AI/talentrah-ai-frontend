import { Badge } from "@/components/ui/badge"
import React, { useState } from 'react';
import { MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import CoverLetterDialog from '@/components/CandidateCoverDialog';


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
  const [openLetter, setOpenLetter] = useState(false)
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
        <DropdownMenuItem onSelect={() => setOpenLetter(true)} className="data-[state=active]:from-blue-500">View Cover letter</DropdownMenuItem>
        <DropdownMenuItem>Download</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <CoverLetterDialog
        open={openLetter}
        onOpenChange={setOpenLetter}
        coverLetterText={`Dear Hiring Manager,\n\nI am writing to express my interest in the Product Designer position at your company, as advertised. With a background in creating intuitive user interfaces for web and mobile applications, I am excited about the opportunity to contribute my skills and knowledge to your team. 
            \nIn my current role at ProDevs, I have successfully collaborated with cross-functional teams to deliver exceptional designs that prioritize user experience and drive business success. I have also actively contributed to the development of the company's design system, ensuring consistency and scalability across multiple projects. 
            \nWith a Bachelor's degree in Applied Science and certifications in Product, I believe I have the qualifications and expertise to excel in this role. I am proficient in industry-standard tools such as Figma and have a deep passion for creating seamless products that elevate user satisfaction.
            \nI am confident that my skills and experience make me a strong candidate for this position. I am eager to bring my creative vision and problem-solving abilities to your team and contribute to the success of your projects. Thank you for considering my application.`}
        downloadUrl="/cover-letter.pdf"
    />


    </div>
  )
}
