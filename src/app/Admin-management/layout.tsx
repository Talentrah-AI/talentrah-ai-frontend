"use client";
import { SideBar, HeaderPolygon } from '@/components/polygon-admin-components';


export default function PolygonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row" >
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <main className="flex-1  bg-gray-100">
              <div className="border">
                  < HeaderPolygon />
              </div>
        <div className="text-2xl p-6 font-semibold mb-4">
          {children}
        </div>
      </main>
    </div>
  );
}
