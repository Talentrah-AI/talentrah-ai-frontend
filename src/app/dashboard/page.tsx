// src/app/dashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/WelcomeModal";
import { AIApplyPopup } from "@/components/AIApplyPopup"; // Import the new component
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showAIApplyPopup, setShowAIApplyPopup] = useState(false); // State for the AI Apply pop-up

  const searchParams = useSearchParams();
  const router = useRouter();

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
    // Remove the query parameter from the URL
    router.push("/dashboard");
  };

  const handleConfirmAIApply = () => {
    // Placeholder for AI apply functionality
    // Future API integration: Trigger AI to apply for similar jobs
    // Example: await fetch('/api/jobs/apply-ai', { method: 'POST', body: JSON.stringify({ userId }) });
    console.log("AI Apply triggered");
    setShowAIApplyPopup(false);
    router.push("/dashboard");
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
      />
    </>
  );
}