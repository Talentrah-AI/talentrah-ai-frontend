
import React from 'react';
import Image from 'next/image';
import polygon from '@/assets/images/Polygon.png';
import { ClipboardList, LogOut, Home, Users, GraduationCap, Settings, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import CandidatesPage from '@/app/candidates/[CandidatesId]/page';


function CandidateSidebar({ isOpen }: { isOpen: boolean }) {
    
  return (
    
    <aside className={`bg-blue-900 text-white flex flex-col justify-between transition-all duration-300 
        ${isOpen ? 'w-65' : 'w-0 overflow-hidden'} 
        ${isOpen ? 'px-4' : ''}`}>
            {/* Only show sidebar content if open */}
            {isOpen && (
            <>
            <div>
            <div className="p-4 text-2xl font-bold flex items-center gap-2">
            <Image
            src={polygon}
            width={100}
            height={100}
            alt="Profile image of Andrew Erekosima"

            />
            </div>
            <nav className="space-y-2 px-4">
            <a href="#" className="flex items-center gap-2 py-2"><Home className="w-4 h-4" /> Overview</a>
            <Link href='/candidates' className="flex items-center gap-2 py-2 bg-white text-blue-900 rounded px-2"><Users className="w-4 h-4" /> Candidates</Link>
            <a href="#" className="flex items-center gap-2 py-2"><ClipboardList className="w-4 h-4" /> Job management</a>
            <a href="#" className="flex items-center gap-2 py-2"><GraduationCap className="w-4 h-4" /> Mentorship request</a>
            <a href="#" className="flex items-center gap-2 py-2"><Settings className="w-4 h-4" /> Admin Management</a>
            <a href="#" className="flex items-center gap-2 py-2"><MessageCircle className="w-4 h-4" /> Feedbacks management</a>
            <a href="#" className="flex items-center gap-2 py-2"><Settings className="w-4 h-4" /> Settings</a>
            </nav>
            </div>
            <div className="p-4 flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            <button className="text-sm">Logout</button>
            </div>
            </>
            )}
    </aside>
    
  )
}

export default CandidateSidebar

