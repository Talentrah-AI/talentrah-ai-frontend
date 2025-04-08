// src/app/(userdashboard)/job-setup/page.tsx
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import JobSetupContent from './JobSetupContent';

export default function JobSetupPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <JobSetupContent />
    </Suspense>
  );
}