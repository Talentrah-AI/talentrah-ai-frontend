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
