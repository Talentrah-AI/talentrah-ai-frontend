import React from "react";
import { StatsCard } from "./StatsCard";
import { Users } from "lucide-react";

export function StatsCardSection() {
  return (
    <section className="flex flex-wrap gap-[12px] my-8">
      <StatsCard
        title="Total active users"
        value="862"
        filterLabel="Today"
        icon={Users}
        iconBg="bg-blue-100 text-blue-600"
      />
      <StatsCard
        title="Your total revenue for April"
        value="₦2,430.00"
        filterLabel="This month"
        icon={Users}
        iconBg="bg-cyan-100 text-cyan-600"
      />
      <StatsCard
        title="Number of failed payments"
        value="13"
        filterLabel="This month"
        icon={Users}
        iconBg="bg-orange-100 text-orange-600"
      />
    </section>
  );
}
