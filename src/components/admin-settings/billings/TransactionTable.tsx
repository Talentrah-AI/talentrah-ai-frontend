'use client';

import React, { useState } from 'react';
import { Transaction } from '../../../types/transaction';
import { Download, MoreVertical, CheckCircle, XCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'; // Adjust the import path based on your file structure
import EmailModal from './EmailModal';

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-auto bg-white rounded-[12px] py-[24px] px-[20px] text-[12px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-none gap-[15px]  ">
              <th className="py-4 px-4 font-medium text-gray-500">DATE</th>
              <th className="py-4 px-4 font-medium text-gray-500">CANDIDATE</th>
              <th className="py-4 px-4 font-medium text-gray-500">PLAN</th>
              <th className="py-4 px-4 font-medium text-gray-500">PRICE</th>
              <th className="py-4 px-4 font-medium text-gray-500">STATUS</th>
              <th className="py-4 px-4 font-medium text-gray-500">ACTION</th>
              <th className="py-4 px-4 font-medium text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-none">
                <td className="py-4 px-4">{transaction.date}</td>
                <td className="py-4 px-4">{transaction.candidate}</td>
                <td className="py-4 px-4">{transaction.plan}</td>
                <td className="py-4 px-4">{transaction.price}</td>
                <td className="py-4 px-4">
                  {transaction.status === 'Successful' ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle size={16} />
                      <span>Successful</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-600">
                      <XCircle size={16} />
                      <span>Failed</span>
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  <button className="text-blue-600 flex items-center gap-1 bg-blue-50 px-3 py-1 rounded">
                    <Download size={16} />
                    <span>Download Invoice</span>
                  </button>
                </td>
                <td className="py-4 px-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-500 p-1 rounded-[8px] hover:bg-gray-100">
                        <MoreVertical size={16} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-[180px] bg-white rounded-md shadow-lg p-1">
                      <DropdownMenuItem onClick={() => setEmailOpen(true)}>
                        email
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EmailModal open={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  );
};
