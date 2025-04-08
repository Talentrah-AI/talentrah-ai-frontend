// src/app/(userdashboard)/ClientLayoutContent.tsx
'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { useDialog } from '@/context/DialogContext';
import GlobalModal from '@/components/GlobalModal';

export default function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDialogOpen } = useDialog();

  return (
    <div className={`flex h-screen ${isDialogOpen ? 'blur-sm' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 pt-[64px]">
          <div className="h-full overflow-y-auto">{children}</div>
          <GlobalModal />
        </main>
      </div>
    </div>
  );
}