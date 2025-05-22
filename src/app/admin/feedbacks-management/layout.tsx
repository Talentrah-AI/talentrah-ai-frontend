"use client";
import { HeaderPolygon } from '@/components/polygon-admin-components';
import SideBar from '@/components/polygon-admin-components/sidebar';
import { useState } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';




export default function PolygonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
  })
{
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col lg:flex-row" >
      {/* Sidebar */}
        {/* Sidebar */}
            <div className=' hidden md:flex min-h-screen'>
              <SideBar />
            </div>
      
            {/* Mobile sidebar */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetContent side="left" className="w-74 p-0 min-h-screen">
                <SideBar />
              </SheetContent>
            </Sheet>
      {/* Main Content */}
      <main className="flex-1  bg-gray-100">
              <div className="border">
                  < HeaderPolygon setSidebarOpen={setSidebarOpen}/>
              </div>
        <div className="text-2xl p-6 font-semibold mb-4">
          {children}
        </div>
      </main>
    </div>
  );
}
