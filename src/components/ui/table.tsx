"use client"

import * as React from "react"

<<<<<<< HEAD
import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
=======
interface Candidate {
  id?: number;
  fullName: string;
  email: string;
  usageCredit?: string; // Optional for Candidates page
  completion?: string; // Optional for Overview page
  metrics: { applications: number; shortlisted: number; rejected: number };
  subscription: string;
  signUpDate?: string; // Optional since Overview lacks it
}

interface TableProps {
  data: Candidate[];
  showUsageCredit?: boolean; // Toggle between usageCredit and completion
}

export function Table({ data, showUsageCredit = false }: TableProps) {
  const getUsageCreditColor = (usageCredit: string | undefined) => {
    if (!usageCredit || typeof usageCredit !== 'string') {
      return 'bg-gray-100 text-gray-700';
    }
    if (usageCredit.includes('8/10')) return 'bg-blue-100 text-blue-700';
    if (usageCredit.includes('2/10') || usageCredit.includes('0/10')) return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  // Helper for progress bar color
  const getCompletionBarColor = (completion: string | undefined) => {
    if (!completion) return 'bg-gray-200';
    const percent = parseInt(completion);
    if (percent >= 80) return 'bg-green-500';
    if (percent >= 60) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[40px]">
              <input type="checkbox" className="rounded h-4 w-4 border-gray-300" />
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
              Full Name
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px] hidden sm:table-cell">
              Email Address
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
              Usage Credit
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
              Job Application Metrics
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px] hidden md:table-cell">
              Subscription Type
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
              Sign-up Date
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[40px]"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate) => (
            <tr key={candidate.id ?? candidate.email} className="hover:bg-gray-50">
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                <input type="checkbox" className="rounded h-4 w-4 border-gray-300" />
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-black">
                {candidate.fullName}
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-black hidden sm:table-cell">
                {candidate.email}
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-semibold ${getUsageCreditColor(candidate.usageCredit)}`}
                >
                  {candidate.usageCredit || 'N/A'}
                </span>
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                <div className="flex gap-1 sm:gap-2 bg-white shadow py-2 px-2 rounded-lg border-gray-300 w-[117px] h-[37px]">
                  <span className="px-1 sm:px-2 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-semibold min-w-[24px] text-center">
                    {candidate.metrics.applications ?? 'N/A'}
                  </span>
                  <span className="px-1 sm:px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold min-w-[24px] text-center">
                    {candidate.metrics.shortlisted ?? 'N/A'}
                  </span>
                  <span className="px-1 sm:px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold min-w-[24px] text-center">
                    {candidate.metrics.rejected ?? 'N/A'}
                  </span>
                </div>
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap hidden md:table-cell">
                {candidate.subscription === 'Premium' ? (
                  <PremiumButton />
                ) : (
                  <FreeButton />
                )}
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-black">
                {candidate.signUpDate || 'N/A'}
              </td>
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-right">
                <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-gray-400"
                  >
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
>>>>>>> 6fd4aebee9016e2d82952320d893b6aa47babb61
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
