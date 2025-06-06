// // // components/ResumeDialog.tsx

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import mypic from "@/assets/images/mypic.jpeg"

interface ResumeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  downloadUrl?: string;
  passportImageUrl?: string;
}

export default function ResumeDialog({
  open,
  onOpenChange,
  downloadUrl = "/resume.pdf",
  passportImageUrl = "/mypic.png", // your image path here
}: ResumeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[507px] !max-w-none h-[734px] p-0 overflow-hidden rounded-lg"
         style={{ width: "507px" }}>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex justify-between items-center pb-1.5">
            <DialogTitle className="text-sm font-semibold">Resume</DialogTitle>
           </div>
          <div className="flex justify-between items-start border-b pb-1.5">
            <div className="flex-1 space-y-1 text-xs">
              <h2 className="text-sm font-semibold">Juphil A. Lamani̇lao</h2>
              <p>
                <strong className="font-semibold">Address:</strong> Sangi Interior, Brgy. Pajo, Lapu-Lapu City, Cebu
              </p>
              <p>
                <strong className="font-semibold">Mobile:</strong> 09266444223
              </p>
              <p>
                <strong className="font-semibold">Email:</strong> juphil@gmail.com
              </p>
            </div>
            {passportImageUrl && (
              <div className="ml-4">
                <Image
                  src={mypic}
                  alt="Passport"
                  width={80}
                  height={100}
                  className="rounded border border-gray-300 object-cover"
                />
              </div>
            )}
            {/* <DialogClose asChild>
              <button className="text-gray-400 hover:text-gray-600 absolute top-4 right-4">
                <X className="w-4 h-4" />
              </button>
            </DialogClose> */}
          </div>

          <Section title="OBJECTIVE" >
            To secure a cooperative education in the field of Chemical Engineering that will challenge
            and strengthen my education and professional skills.
          </Section>

          <Section title="PROFESSIONAL SKILLS">
            <ul className="list-disc ml-5 text-[0.625rem] space-y-1">
              <li>Bachelor’s degree in Chemical Engineering</li>
              <li>Proficient in Microsoft Office (Word, Excel, PowerPoint)</li>
              <li>Knowledgeable in Turboc & Matlab</li>
            </ul>
          </Section>

          <Section title="EDUCATIONAL BACKGROUND">
            <ResumeList
              data={[
                { label: "Tertiary:", value: "Cebu Institute of Technology (CIT), 2006 – present" },
                { label: "Secondary:", value: "Saint Scholastica’s Academy (SSA-T), 2002 – 2006" },
                { label: "Elementary:", value: "Bulacao Elementary School, 1996 – 2002" },
              ]}
            />
          </Section>

          <Section title="PERSONAL INFORMATION">
            <p className="text-[0.625rem] ">
              Single. Born on July 29, 1989 – Bulacao, Talisay City, Cebu. Filipino citizen, Roman Catholic.
              Good communication skills in English and Filipino. Able to learn quickly; demonstrated initiative 
              and persistence. Dependable, analytical and hardworking.
            </p>
          </Section>

          <Section title="SEMINARS ATTENDED">
            <ResumeList
              data={[
                {
                  label: "Pre – OJT Orientation Seminar",
                  value: "CIT, N. Bacalso Avenue, Oct 22, 2009",
                },
                {
                  label: "Practical Approaches to Laboratory Waste Management",
                  value: "CIT, N. Bacalso Avenue, Feb 20, 2010",
                },
              ]}
            />
          </Section>

          <Section title="AFFILIATION">
            <ul className="list-disc ml-5 text-[0.625rem]">
              <li>Member, Junior Philippine Institute of Chemical Engineering (CIT-JPIChe)</li>
              <li>Member, Young Environmentalist Society (CIT Chapter)</li>
            </ul>
          </Section>

          <div className="flex justify-center pt-4">
            <a href={downloadUrl} download>
              <Button className="gap-2 w-100 text-sm">
                <DownloadIcon /> Download
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="text-[0.625rem]">
      <h3 className="font-semibold border-b mb-1">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function ResumeList({ data }: { data: { label: string; value: string }[] }) {
  return (
    <ul className="text-[0.625rem] space-y-1">
      {data.map((item, idx) => (
        <li key={idx}>
          <strong>{item.label}</strong> {item.value}
        </li>
      ))}
    </ul>
  );
}













// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";

// interface ResumeDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   downloadUrl?: string;
// }

// export default function ResumeDialog({
//   open,
//   onOpenChange,
//   downloadUrl = "/resume.pdf",
// }: ResumeDialogProps) {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="w-[507px] !max-w-none h-[734px] p-0 overflow-hidden rounded-lg"
//          style={{ width: "507px" }}>
//         <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
//           <div className="flex justify-between items-center border-b pb-3">
//             <DialogTitle className="text-xl font-semibold">Resume</DialogTitle>
//           </div>

//           {/* HEADER */}
//           <div className="space-y-1">
//             <h2 className="text-sm font-semibold">Juphil A. Lamani̇lao</h2>
//             <p className="text-xs text-gray-600">
//               City Add: Sangi Interior, Brgy. Pajo, Lapu-Lapu City, Cebu
//               <br />
//               Mobile: 09266444223
//               <br />
//               Email: juphil@gmail.com
//             </p>
//           </div>

//           {/* OBJECTIVE */}
//           <Section title="OBJECTIVE">
//             To secure a cooperative education in the field of Chemical Engineering that will challenge and 
//             strengthen my education and professional skills.
//           </Section>

//           {/* PROFESSIONAL SKILLS */}
//           <Section title="PROFESSIONAL SKILLS">
//             <ul className="list-disc ml-5 text-sm space-y-1">
//               <li>Bachelor’s degree in Chemical Engineering</li>
//               <li>Proficient in Microsoft Office (Word, Excel, PowerPoint)</li>
//               <li>Knowledgeable in Turboc & Matlab</li>
//             </ul>
//           </Section>

//           {/* EDUCATION */}
//           <Section title="EDUCATIONAL BACKGROUND">
//             <ResumeList
//               data={[
//                 { label: "Tertiary:", value: "Cebu Institute of Technology (CIT), 2006 – present" },
//                 { label: "Secondary:", value: "Saint Scholastica’s Academy (SSA-T), 2002 – 2006" },
//                 { label: "Elementary:", value: "Bulacao Elementary School, 1996 – 2002" },
//               ]}
//             />
//           </Section>

//           {/* PERSONAL INFORMATION */}
//           <Section title="PERSONAL INFORMATION">
//             <p className="text-sm text-gray-700">
//               Single. Born on July 29, 1989 – Bulacao, Talisay City, Cebu. Filipino citizen, Roman Catholic.
//               Good communication skills in both oral & written English & Filipino. Able to learn quickly;
//               demonstrated initiative & persistence. Dependable, analytical and hardworking.
//             </p>
//           </Section>

//           {/* SEMINARS ATTENDED */}
//           <Section title="SEMINARS ATTENDED">
//             <ResumeList
//               data={[
//                 {
//                   label: "Pre – OJT Orientation Seminar",
//                   value: "CIT, N. Bacalso Avenue, Oct 22, 2009",
//                 },
//                 {
//                   label: "Practical Approaches to Laboratory Waste Management",
//                   value: "Feb 20, 2010",
//                 },
//               ]}
//             />
//           </Section>

//           {/* AFFILIATIONS */}
//           <Section title="AFFILIATION">
//             <ul className="list-disc ml-5 text-sm">
//               <li>Member, Junior Philippine Institute of Chemical Engineering (CIT-JPIChe)</li>
//               <li>Member, Young Environmentalist Society (CIT Chapter)</li>
//             </ul>
//           </Section>

//           {/* Footer */}
//           <div className="flex justify-center border-t pt-4">
//             <a href={downloadUrl} download>
//               <Button className="gap-2 w-70">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
//                   />
//                 </svg>
//                 Download
//               </Button>
//             </a>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Utility components
// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <h3 className="font-semibold text-sm text-gray-800 border-b border-gray-200 mb-1">{title}</h3>
//       <div>{children}</div>
//     </div>
//   );
// }

// function ResumeList({ data }: { data: { label: string; value: string }[] }) {
//   return (
//     <ul className="text-sm space-y-1">
//       {data.map((item, idx) => (
//         <li key={idx}>
//           <strong>{item.label}</strong> {item.value}
//         </li>
//       ))}
//     </ul>
//   );
// }

























// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogClose,
//   } from "@/components/ui/dialog"
//   import { Button } from "@/components/ui/button"
//   import { X } from "lucide-react"
//   import Image from "next/image"
//   import resume from '@/assets/images/resume-preview.png'

  
//   interface ResumeDialogProps {
//     open: boolean
//     onOpenChange: (open: boolean) => void
//     imageUrl?: string
//     downloadUrl?: string
//   }
  
//   export default function ResumeDialog({
//     open,
//     onOpenChange,
//     imageUrl = "/resume-preview.png",
//     downloadUrl = "/resume.pdf",
//   }: ResumeDialogProps) { 
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent className="max-w-xl p-0 overflow-hidden">
//           <div className="relative bg-white rounded-lg shadow-md">
//             <div className="flex justify-between items-center p-4 border-b">
//               <DialogTitle>Resume</DialogTitle>
//               <DialogClose asChild>
//                 {/* <button className="text-gray-400 hover:text-gray-600">
//                   <X className="w-5 h-5" />
//                 </button> */}
//               </DialogClose>
//             </div>
//             <Image
//               src={resume}
//               alt="Resume preview"
//               width={507}
//               height={734}       
//               className="object-contain"
//             />
//             <div className="flex justify-center p-4 border-t">
//               <a href={downloadUrl} download>
//                 <Button className="gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
//                     />
//                   </svg>
//                   Download
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     )
//   }
  