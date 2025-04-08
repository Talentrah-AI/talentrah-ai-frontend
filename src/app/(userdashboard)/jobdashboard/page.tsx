// src/app/(userdashboard)/jobdashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/modal/WelcomeModal";
import { AIApplyPopup } from "@/components/AIApplyPopup";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showAIApplyPopup, setShowAIApplyPopup] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "recommended" | "saved" | "top-matched" | "recent"
  >("recommended");

  const searchParams = useSearchParams();
  const router = useRouter();

  const jobTitle = searchParams.get("jobTitle") || "Unknown Job";
  const location = searchParams.get("location") || "Unknown Location";

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
                <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="w-full py-[15px] rounded-t-[24px]">
                <AutoApply />
              </div>
              <div className="space-y-4 w-full flex flex-col items-center">
                <JobList activeTab={activeTab} />
              </div>
            </div>

            {/* User Profile */}
            <div className="col-span-4">
              <UserProfile />
            </div>
          </div>
        </div>
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
        jobTitle={jobTitle}
        location={location}
      />
    </>
  );
}
