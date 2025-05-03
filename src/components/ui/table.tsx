'use client';

import { FreeButton, PremiumButton } from './crownButton';

interface Candidate {
  fullName: string;
  email: string;
  metrics: {
    applications: number;
    shortlisted: number;
    rejected: number;
  };
  subscription: string;
  completion: string;
}

interface TableProps {
  data: Candidate[];
}

export function Table({ data }: TableProps) {
  const getCompletionColor = (completion: string) => {
    const value = parseInt(completion);
    if (value >= 80) return 'bg-green-500';
    if (value >= 60) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="mt-4 bg-white rounded-2xl overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="rounded h-[20px] w-[20px] border-gray-300" />
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Email Address
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Job Application Metrics
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Subscription Type
            </th>
            <th className="px-6 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Profile Completion
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded h-[20px] w-[20px] border-gray-300" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                {candidate.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                {candidate.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-[4px] w-[113px] h-[32px] bg-white p-1 px-1 py-1 rounded-lg shadow">
                  <span className="px-3 py-1 w-[33px] h-[24px] bg-[#FCEFE6] text-orange-800 rounded-lg text-sm">
                    {candidate.metrics.applications}
                  </span>
                  <span className="px-3 py-1 w-[33px] h-[24px] bg-green-100 text-green-800 rounded-lg text-sm">
                    {candidate.metrics.shortlisted}
                  </span>
                  <span className="px-3 py-1 w-[33px] h-[24px] bg-[#E6F0FB] text-gray-800 rounded-lg text-sm">
                    {candidate.metrics.rejected}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {candidate.subscription === 'Premium' ? (
                  <PremiumButton />
                ) : (
                  <FreeButton />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className={`h-2 rounded-full ${getCompletionColor(candidate.completion)}`}
                      style={{ width: candidate.completion }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {candidate.completion}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}