'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  function getPageNumbers() {
    const pages: (number | string)[] = [];

    pages.push(1);

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage > 3) pages.push('...');
      pages.push(i);
    }

    if (currentPage + 1 < totalPages - 1) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between py-4 gap-1.5">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn text-gray-500 hover:bg-gray-100 disabled:opacity-50 border p-1.5 rounded-2xl cursor-pointer "
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex items-center space-x-1">
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="pagination-btn text-gray-500">...</span>
            ) : (
              <button
                onClick={() => typeof page === 'number' && onPageChange(page)}
                className={`pagination-btn ${
                  currentPage === page
                    ? 'active bg-blue-500 text-white w-[33px] p-1 rounded-2xl '
                    : 'text-gray-700 hover:bg-gray-100 border w-[33px] p-1 rounded-2xl cursor-pointer'
                }`}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-btn text-gray-500 hover:bg-gray-100 disabled:opacity-50 p-1.5 rounded-2xl border cursor-pointer "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
