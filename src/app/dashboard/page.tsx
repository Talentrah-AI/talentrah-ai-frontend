// src/app/dashboard/page.tsx
"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { WelcomeModal } from "@/components/WelcomeModal";
import { AdditionalQuestionsPopup } from "@/components/AdditionalQuestionsPopup";
import { JobBoardQuestionsPopup } from "@/components/JobBoardQuestionsPopup";
import { ApplicationUpdatedPopup } from "@/components/ApplicationUpdatedPopup";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showQuestionsPopup, setShowQuestionsPopup] = useState(false);
  const [showJobBoardQuestionsPopup, setShowJobBoardQuestionsPopup] = useState(false);
  const [showApplicationUpdatedPopup, setShowApplicationUpdatedPopup] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Check if this is the first visit for the Welcome Modal
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowWelcomeModal(true);
    }

    // Show the Additional Questions pop-up on every page load
    setShowQuestionsPopup(true);
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem("hasVisitedBefore", "true");
  };

  const handleCloseQuestionsPopup = () => {
    setShowQuestionsPopup(false);
    // Optionally, you can still set this flag if needed for other logic
    localStorage.setItem("hasSeenQuestionsPopup", "true");
  };

  const handleConfirmQuestionsPopup = () => {
    setShowQuestionsPopup(false);
    // Optionally, you can still set this flag if needed for other logic
    localStorage.setItem("hasSeenQuestionsPopup", "true");
    // Show the Job Board Questions pop-up after confirming the first pop-up
    setShowJobBoardQuestionsPopup(true);
  };

  const handleCloseJobBoardQuestionsPopup = () => {
    setShowJobBoardQuestionsPopup(false);
  };

  const handleSubmitJobBoardQuestions = async (answers: { reason: string; authorized: string }) => {
    try {
      // Placeholder for API integration: Send answers to the server
      // Example API call:
      // const response = await fetch('/api/submit-job-answers', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     userId: 'user-id-placeholder', // Replace with actual user ID
      //     jobId: 'job-id-placeholder', // Replace with actual job ID
      //     answers: {
      //       reason: answers.reason,
      //       authorized: answers.authorized,
      //     },
      //   }),
      // });
      // if (!response.ok) throw new Error('Failed to submit answers');

      // Log the answers for now (remove this in production)
      console.log("Job board questions submitted:", answers);

      // Optionally store answers in localStorage for temporary data persistence
      // This is a placeholder for actual database storage
      localStorage.setItem("jobBoardAnswers", JSON.stringify(answers));

      // Close the Job Board Questions pop-up and show the Application Updated pop-up
      setShowJobBoardQuestionsPopup(false);
      setShowApplicationUpdatedPopup(true);
    } catch (error) {
      console.error("Error submitting job board answers:", error);
      // Optionally show an error message to the user
      alert("Failed to submit your answers. Please try again.");
    }
  };

  const handleCloseApplicationUpdatedPopup = () => {
    setShowApplicationUpdatedPopup(false);
    // Ensure the URL is clean (in case there are query parameters)
    router.push("/dashboard");
  };

  return (
    <>
      <div
        className={`transition-opacity duration-200 ${
          showWelcomeModal || showQuestionsPopup || showJobBoardQuestionsPopup || showApplicationUpdatedPopup
            ? "opacity-50"
            : ""
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

      {/* Job Board Questions Pop-up */}
      <JobBoardQuestionsPopup
        isOpen={showJobBoardQuestionsPopup}
        onClose={handleCloseJobBoardQuestionsPopup}
        onSubmit={handleSubmitJobBoardQuestions}
      />

      {/* Application Updated Pop-up */}
      <ApplicationUpdatedPopup
        isOpen={showApplicationUpdatedPopup}
        onClose={handleCloseApplicationUpdatedPopup}
      />
    </>
  );
}