'use client';

import { FreeButton, PremiumButton } from './crownButton';

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
              Job Application Metrics
            </th>
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px] hidden md:table-cell">
              Subscription Type
            </th>
            {/* Profile Completion or Usage Credit */}
            <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
              {showUsageCredit ? 'Usage Credit' : 'Profile Completion'}
            </th>
            {/* Remove sign-up date for overview */}
            {/* <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px] hidden lg:table-cell">
              Sign-up Date
            </th> */}
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
              {/* Profile Completion or Usage Credit */}
              <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                {showUsageCredit ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold ${getUsageCreditColor(candidate.usageCredit)}`}
                  >
                    {candidate.usageCredit || 'N/A'}
                  </span>
                ) : (
                  <div className="flex items-center gap-2 min-w-[100px]">
                    <span className="text-xs font-semibold text-gray-900 min-w-[32px]">
                      {candidate.completion || 'N/A'}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${getCompletionBarColor(candidate.completion)}`}
                        style={{ width: candidate.completion ? candidate.completion : '0%' }}
                      ></div>
                    </div>
                  </div>
                )}
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
    </div>
  );
}