'use client';

import type React from 'react';

import { TabProvider } from './context/TabContext';

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TabProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-1">{children}</main>
      </div>
    </TabProvider>
  );
}
