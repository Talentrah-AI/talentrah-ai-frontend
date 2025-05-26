"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full space-y-6">
      <div className="overflow-x-auto pb-2">
        <TabsList className="h-10 w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="general"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            )}
          >
            General settings
          </TabsTrigger>
          <TabsTrigger
            value="subscription"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            )}
          >
            Subscription & Billing
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className={cn(
              "rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            )}
          >
            Security & Privacy
          </TabsTrigger>
        </TabsList>
      </div>
      {children}
    </div>
  );
}