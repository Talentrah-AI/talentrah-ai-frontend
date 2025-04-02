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

            <div className="col-span-4">
              <UserProfile />
            </div>
          </div>
        </div>
        {/* <div className="w-full h-screen bg-black opacity-50 absolute top-0 left-0 z-50"></div> */}
      </div>

      {showWelcomeModal && (
        <div className="w-full xs:w-[375px] xs:h-[819px] sm:w-[375px] sm:h-[819px] h-screen bg-purple-50/5 backdrop-blur-[3px] fixed inset-0 top-0 left-0 z-50 transition-opacity duration-200"></div>
      )}
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseModal} />
    </>
  );
}
