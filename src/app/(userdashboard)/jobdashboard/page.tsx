// src/app/(userdashboard)/jobdashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/modal/WelcomeModal";
import { AIApplyPopup } from "@/components/modal/AIApplyPopupModal";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";

function DashboardContainer() {
  // const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showAIApplyPopup, setShowAIApplyPopup] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openModal, isOpen } = useModal();

  const jobTitle = searchParams.get("jobTitle") || "Unknown Job";
  const location = searchParams.get("location") || "Unknown Location";

  useEffect(() => {
    // Check if this is the first visit for the Welcome Modal
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      openModal(<WelcomeModal />);
    }

    // Check for the showPopup query parameter to show the AI Apply pop-up
    const shouldShowPopup = searchParams.get("showPopup") === "true";
    setShowAIApplyPopup(shouldShowPopup);
  }, []);

 

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
          isOpen || showAIApplyPopup ? "opacity-50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-[16px]">
            {/* Job List Container */}
            <div className=" w-[824px] h-[946px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
              <div className="w-full py-[15px] rounded-t-[24px] flex justify-center">
                <JobTabs />
              </div>
              <div className="w-full py-[15px] rounded-t-[24px]">
                <AutoApply />
              </div>
              <div className="space-y-4 w-full flex flex-col items-center overflow-y-auto">
                <JobList />
              </div>
            </div>

            {/* User Profile */}
            <div className="">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>

      {/* AI Apply Pop-up */}
      <AIApplyPopup
        isOpen={showAIApplyPopup}
        onClose={handleCloseAIApplyPopup}
        onConfirm={handleConfirmAIApply}
        jobTitle={jobTitle}
        location={location}
      />
    </>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContainer />
    </Suspense>
  );
}