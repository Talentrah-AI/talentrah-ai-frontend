<<<<<<< HEAD
'use client';

import { AutoApply } from '@/components/AutoApply';
import { JobList } from '@/components/JobList';
import { JobTabs } from '@/components/JobTabs';
import { WelcomeModal } from '@/components/modal/WelcomeModal';
import { UserProfile } from '@/components/UserProfile';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'recommended' | 'saved' | 'top-matched' | 'recent'
  >('recommended');
  // const [savedJobs, setSavedJobs] = useState<string[]>([]); // Stores saved job IDs

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  // Save/Unsave job function
  // const toggleSaveJob = (jobId: string) => {
  //   setSavedJobs((prev) =>
  //     prev.includes(jobId)
  //       ? prev.filter((id) => id !== jobId)
  //       : [...prev, jobId]
  //   );
  // };

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto xs:w-[375px] xs:h-[819px]">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 w-[824px] h-[946px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
              <div className=" w-full  py-[15px] rounded-t-[24px]">
                <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <AutoApply />
              </div>
              <div className="flex-1 overflow-y-auto  ">
                <JobList
                  activeTab={activeTab}
                  // savedJobs={savedJobs}
                  // toggleSaveJob={toggleSaveJob}
                />
              </div>
            </div>

=======
// src/app/(userdashboard)/jobdashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/WelcomeModal";
import { AIApplyPopup } from "@/components/AIApplyPopup";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showAIApplyPopup, setShowAIApplyPopup] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const jobTitle = searchParams.get("jobTitle") || "Unknown Job"; // Default if not provided
  const location = searchParams.get("location") || "Unknown Location"; // Default if not provided

  useEffect(() => {
    // Check if this is the first visit for the Welcome Modal
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowWelcomeModal(true);
    }

    // Check for the showPopup query parameter to show the AI Apply pop-up
    const shouldShowPopup = searchParams.get("showPopup") === "true";
    setShowAIApplyPopup(shouldShowPopup);
  }, [searchParams]);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem("hasVisitedBefore", "true");
  };

  const handleCloseAIApplyPopup = () => {
    setShowAIApplyPopup(false);
    router.push("/jobdashboard"); // Reset URL to remove query params
  };

  const handleConfirmAIApply = () => {
    // Placeholder for AI apply functionality
    console.log(`AI Apply triggered for ${jobTitle} at ${location}`);
    setShowAIApplyPopup(false);
    router.push("/jobdashboard"); // Reset URL after confirmation
  };

  return (
    <>
      <div
        className={`transition-opacity duration-200 ${
          showWelcomeModal || showAIApplyPopup ? "opacity-50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto pl-3">
          <div className="grid grid-cols-12 gap-6">
            {/* Job List Container */}
            <div className="col-span-8 w-[824px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
              <div className="w-full py-[15px] rounded-t-[24px] flex justify-center">
                <JobTabs />
              </div>
              <div className="w-full py-[15px] rounded-t-[24px]">
                <AutoApply />
              </div>
              <div className="space-y-4 w-full flex flex-col items-center">
                <JobList />
              </div>
            </div>

            {/* User Profile */}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
            <div className="col-span-4">
              <UserProfile />
            </div>
          </div>
        </div>
<<<<<<< HEAD
        {/* <div className="w-full h-screen bg-black opacity-50 absolute top-0 left-0 z-50"></div> */}
      </div>

      {showWelcomeModal && (
        <div className="w-full xs:w-[375px] xs:h-[819px] sm:w-[375px] sm:h-[819px] h-screen bg-purple-50/5 backdrop-blur-[3px] fixed inset-0 top-0 left-0 z-50 transition-opacity duration-200"></div>
      )}
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />
    </>
  );
}
=======
      </div>

      {/* Welcome Modal */}
      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs animate-fade-in" />
      )}
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseWelcomeModal} />

      {/* AI Apply Pop-up */}
      <AIApplyPopup
        isOpen={showAIApplyPopup}
        onClose={handleCloseAIApplyPopup}
        onConfirm={handleConfirmAIApply}
        jobTitle={jobTitle} // Pass jobTitle to the popup
        location={location} // Pass location to the popup
      />
    </>
  );
}
>>>>>>> b7a5e52850faecb387c63a04dac16b6be2b06078
