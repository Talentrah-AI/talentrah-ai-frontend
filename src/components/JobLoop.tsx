'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import EmptyState from './EmptyState';
import JobListView from './JobListView';
import { useModal } from '@/context/ModalContext';
import PreviewResumeModal from '@/components/modal/PreviewResumeModal';

const JobLoop = () => {
  const [hasJobLoop, setHasJobLoop] = useState(false);
  const { isOpen, modalType } = useModal(); // Access modal state

  const handleCreateJobLoop = () => {
    // Simulate API call success
    toast.success('Job Loop created successfully!', {
      description: 'You can now start tracking your job applications.',
      duration: 5000,
    });
    // Toggle state to show JobListView
    setHasJobLoop(true); // This will re-render the component and show JobListView
  };

  return (
    <div className="w-full justify-center mx-auto">
      {!hasJobLoop ? (
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

export default JobLoop;
