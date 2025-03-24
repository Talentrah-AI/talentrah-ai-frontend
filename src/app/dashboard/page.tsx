"use client";

import { JobTabs } from "@/components/JobTabs";
import { JobList } from "@/components/JobList";
import { UserProfile } from "@/components/UserProfile";
import { AutoApply } from "@/components/AutoApply";
import { useState, useEffect } from "react";
import { WelcomeModal } from "@/components/WelcomeModal";

export default function DashboardPage() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
    if (!hasVisitedBefore) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem("hasVisitedBefore", "true");
  };

  return (
    <>
      <div
        className={`transition-opacity duration-200 ${
          showWelcomeModal ? "opacity-50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 w-[824px] h-[946px] rounded-t-[24px] bg-[#F8F8F8] flex flex-col px-4">
              <div className=" w-full  py-[15px] rounded-t-[24px]">
                <JobTabs />
                <AutoApply />
              </div>
              <div className="flex-1 overflow-y-auto  ">
                <JobList />
              </div>
            </div>

            <div className="col-span-4">
              <UserProfile />
            </div>
          </div>
        </div>
      </div>

      {showWelcomeModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs animate-fade-in" />
      )}
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />
    </>
  );
}
