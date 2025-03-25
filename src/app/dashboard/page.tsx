// src/app/dashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/WelcomeModal";
import { AdditionalQuestionsPopup } from "@/components/AdditionalQuestionsPopup"; // Import the new component
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showQuestionsPopup, setShowQuestionsPopup] = useState(false); // State for the new pop-up

  useEffect(() => {
    // Check if this is the first visit for the Welcome Modal
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowWelcomeModal(true);
    }

    // Check if the user has seen the Additional Questions pop-up before
    const hasSeenQuestionsPopup = localStorage.getItem("hasSeenQuestionsPopup");
    if (!hasSeenQuestionsPopup) {
      setShowQuestionsPopup(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem("hasVisitedBefore", "true");
  };

  const handleCloseQuestionsPopup = () => {
    setShowQuestionsPopup(false);
    localStorage.setItem("hasSeenQuestionsPopup", "true");
  };

  const handleConfirmQuestionsPopup = () => {
    // Placeholder for handling the "Answer now" action
    // Future integration: Redirect to a form or API call to answer questions
    console.log("Proceeding to answer additional questions");
    setShowQuestionsPopup(false);
    localStorage.setItem("hasSeenQuestionsPopup", "true");
  };

  return (
    <>
      <div
        className={`transition-opacity duration-200 ${
          showWelcomeModal || showQuestionsPopup ? "opacity-50" : ""
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
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />

      {/* Additional Questions Pop-up */}
      <AdditionalQuestionsPopup
        isOpen={showQuestionsPopup}
        onClose={handleCloseQuestionsPopup}
        onConfirm={handleConfirmQuestionsPopup}
      />
    </>
  );
}