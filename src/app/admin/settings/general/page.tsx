'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import GeneralSettings from '@/components/admin-settings/general/GeneralSettings';
import {
  StatsCardSection,
  ActivePlansSection,
  TransactionsPage,
  InvoiceSection,
} from '@/components/admin-settings/billings';
import SecurityAndPrivacy from '@/components/admin-settings/security/SecurityAndPrivacy';

export default function SettingsPage() {
  return (
    <div className="w-[1135px] space-y-6 bg-muted">
      <Tabs defaultValue="general" className="w-full py-[5px]">
        <div className="overflow-x-auto pb-6">
          <TabsList className="inline-flex h-[36px] items-center justify-center rounded-[12px] bg-background p-[5px]">
            <TabsTrigger
              value="general"
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-[6px] py-[5px] px[10px] text-[12px] text-grey font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[linear-gradient(90deg,#0967D2_0%,#09CBD2_80%)] data-[state=active]:text-white data-[state=active]:shadow'
              )}
            >
              General settings
            </TabsTrigger>
            <TabsTrigger
              value="subscription"
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-[6px] py-[5px] px[10px] text-[12px] text-grey font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[linear-gradient(90deg,#0967D2_0%,#09CBD2_80%)] data-[state=active]:text-white data-[state=active]:shadow'
              )}
            >
              Subscription & Billing
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className={cn(
                'inline-flex items-center justify-center whitespace-nowrap rounded-[6px] py-[5px] px[10px] text-[12px] text-grey font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[linear-gradient(90deg,#0967D2_0%,#09CBD2_80%)] data-[state=active]:text-white data-[state=active]:shadow'
              )}
            >
              Security & Privacy
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="bg-white rounded-[12px]">
          <TabsContent value="general" className="mt-0 ">
            <GeneralSettings />
          </TabsContent>
          <TabsContent
            value="subscription"
            className="mt-0 bg-muted gap-[40px]"
          >
            <StatsCardSection />
            <ActivePlansSection />
            <TransactionsPage />
            <InvoiceSection />
          </TabsContent>
          <TabsContent value="security" className="mt-0">
            <SecurityAndPrivacy />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
