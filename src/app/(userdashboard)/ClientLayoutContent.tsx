// src/app/(userdashboard)/ClientLayoutContent.tsx
'use client';

import { ModalProvider } from '@/context/ModalContext';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import { DialogProvider } from '@/context/DialogContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import GlobalModal from '@/components/GlobalModal';
import { useDialog } from '@/context/DialogContext';

export default function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a new QueryClient instance for each component instance
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <SubscriptionProvider>
          <DialogProvider>
            <ClientLayout>{children}</ClientLayout>
          </DialogProvider>
        </SubscriptionProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}

// Separate component to use context hooks after providers are initialized
function ClientLayout({ children }: { children: React.ReactNode }) {
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