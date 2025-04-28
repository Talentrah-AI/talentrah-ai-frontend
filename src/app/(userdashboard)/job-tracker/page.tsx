'use client';

import EmptyState from '@/components/EmptyState';
import JobListView from '@/components/JobListView';
import { useModal } from '@/context/ModalContext';
import PreviewResumeModal from '@/components/modal/PreviewResumeModal';
import { useRouter } from 'next/navigation';
import { useJobStore } from '@/store/useJobStore';

const Tracker = () => {
  const { isOpen, modalType } = useModal(); // Access modal state
  const router = useRouter();
  const {savedJobs, appliedJobs, draftJobs} = useJobStore()
  const handleCreateJobLoop = () => {
    router.push('/jobdashboard/job-setup');
  };

  return (
    <div className="w-full justify-center mx-auto">
      {savedJobs.length === 0 && appliedJobs.length === 0 && draftJobs.length === 0 ? (
        <EmptyState
          title="No job applications yet? Let's get started!"
          description="Start by creating a job loop then add your applications, all in one place. Stay organized and take control of your job search with confidence!"
          actionLabel="Create Job Loop"
          onAction={handleCreateJobLoop}
        />
      ) : (
        <JobListView />
      )}
      {/* Conditionally render the modal when "View resume used" is clicked */}
      {isOpen && modalType === 'resume' && <PreviewResumeModal />}
    </div>
  );
};

export default Tracker;