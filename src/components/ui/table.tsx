'use client';

import { FreeButton, PremiumButton } from './crownButton';

interface Candidate {
  fullName: string;
  email: string;
  usageCredit: string;
  metrics: {
    applications: number;
    shortlisted: number;
    rejected: number;
  };
  subscription: string;
  signUpDate: string;
}

interface TableProps {
  data: Candidate[];
}

export function Table({ data }: TableProps) {
  const getUsageCreditColor = (usageCredit: string) => {
    if (usageCredit.includes('8/10')) return 'bg-blue-100 text-blue-700';
    if (usageCredit.includes('2/10') || usageCredit.includes('0/10')) return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="mt-4 bg-white rounded-2xl overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input type="checkbox" className="rounded h-[20px] w-[20px] border-gray-300" />
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Email Address
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Usage Credit
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Job Application Metrics
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Subscription Type
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Sign-up Date
            </th>
            <th className="px-1 py-3 text-left text-[12px] font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((candidate, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" className="rounded h-[20px] w-[20px] border-gray-300" />
              </td>
              <td className="px-1 py-4 whitespace-nowrap text-sm text-black">
                {candidate.fullName}
              </td>
              <td className="px-1 py-4 whitespace-nowrap text-sm text-black">
                {candidate.email}
              </td>
              <td className="px-1 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getUsageCreditColor(candidate.usageCredit)}`}>{candidate.usageCredit}</span>
              </td>
              <td className="px-1 py-4 whitespace-nowrap">
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-semibold min-w-[28px] text-center">{candidate.metrics.applications}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-semibold min-w-[28px] text-center">{candidate.metrics.shortlisted}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold min-w-[28px] text-center">{candidate.metrics.rejected}</span>
                </div>
              </td>
              <td className="px-1 py-4 whitespace-nowrap">
                {candidate.subscription === 'Premium' ? (
                  <PremiumButton />
                ) : (
                  <FreeButton />
                )}
              </td>
              <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-700">
                {candidate.signUpDate}
              </td>
              <td className="px-1 py-4 whitespace-nowrap text-right">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
                    <circle cx="12" cy="5" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="19" r="1.5"/>
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