'use client';

import EmptyState from '@/components/EmptyState';
import JobListView from '@/components/JobListView';
import { useRouter } from 'next/navigation';
import { useJobStore } from '@/store/useJobStore';

const Tracker = () => {
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
    </div>
  );
};

export default Tracker;