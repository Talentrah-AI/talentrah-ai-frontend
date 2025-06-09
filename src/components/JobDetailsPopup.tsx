import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { GlobeIcon, CrownIcon, UserPlus, CalendarIcon,  MapPinIcon, ClockIcon } from 'lucide-react';

type JobDetailsPopupProps = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
  }

export default function JobDetailsPopup({ open, onClose, onConfirm}: JobDetailsPopupProps){

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="w-[557px] !max-w-none h-[734px] p-0 overflow-hidden rounded-lg [&>button]:hidden"
         style={{ width: "557px" }}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-500 p-5 text-white rounded-xl ">
              <DialogTitle className="text-xl font-semibold">Senior UI/UX Designer</DialogTitle>
              <p className="text-sm ">Company: Coronado Solutions</p>
              <div className="text-xs text-white mt-2 flex flex-wrap gap-x-1 gap-y-1">
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>Lagos, Nigeria |</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>Full-time |</span>
            </div>
            <div className="flex items-center gap-1">
              <GlobeIcon className="w-3.5 h-3.5" />
              <span>Remote |</span>
            </div>
            <div className="flex items-center gap-1">
              <CrownIcon className="w-3.5 h-3.5" />
              <span>Senior |</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>2+ years Experience |</span>
            </div>
            <div className="flex items-center gap-1">
              <UserPlus className="w-3.5 h-3.5" />
              <span>29,000 Total applicant</span>
            </div>
          </div>
            </div>

            <div className="p-6 space-y-4 text-sm">
              <section>
                <h3 className="font-semibold text-base mb-2">📌 Job Details</h3>
                <p className="font-light text-gray-500">This position requires you to work closely with product managers and 
                  engineers to design user-centered experiences that meet business goals. 
                  You will be responsible for conducting user testing, analyzing feedback, 
                  and iterating on designs to enhance usability. You will also contribute 
                  to the development of design systems, ensuring consistency and scalability 
                  across digital products.</p>
                <p className="mt-2 font-semibold">Salary: ₦600,000</p>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">✅ Job Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 font-light text-gray-500">
                  <li>Design user-friendly interfaces for web and mobile apps.</li>
                  <li>Conduct user research and usability testing to improve designs.</li>
                  <li>Collaborate with developers to ensure pixel-perfect implementation.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-base mb-2">🛠️ Required Skills</h3>
                <ul className="list-disc list-inside space-y-1 font-light text-gray-500">
                  <li>Proficiency in Figma, Sketch, or Adobe XD.</li>
                  <li>Strong understanding of UX principles and accessibility.</li>
                  <li>Experience working in Agile environments.</li>
                </ul>
              </section>

              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>Deadline: 02 - Feb - 2025</span>
                <span>🗓️ Posted: 12 - Dec - 2024</span>
              </div>
            </div>

            <div className="p-4 border-t flex justify-end">
              <DialogClose asChild>
                <Button variant="outline" onClick={onConfirm}>Close</Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
