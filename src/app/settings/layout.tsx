"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className=" pt-[64px]">
          <div className="h-full ">{children}</div>
        </main>
      </div>
    </div>
  );
}
