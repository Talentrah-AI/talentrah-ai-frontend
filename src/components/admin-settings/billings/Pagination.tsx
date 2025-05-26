import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];

    pages.push(
      <button
        key="prev"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-sm"
      >
        <ChevronLeft size={16} />
      </button>
    );

    // First page
    pages.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`w-10 h-10 flex items-center justify-center rounded-md ${
          currentPage === 1 ? "bg-blue-600 text-white" : "bg-white shadow-sm"
        }`}
      >
        1
      </button>
    );

    // Middle pages with ellipsis
    if (totalPages > 5) {
      if (currentPage > 3) {
        pages.push(
          <span
            key="ellipsis1"
            className="w-10 h-10 flex items-center justify-center"
          >
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        if (i > 1 && i < totalPages) {
          pages.push(
            <button
              key={i}
              onClick={() => onPageChange(i)}
              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                currentPage === i
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow-sm"
              }`}
            >
              {i}
            </button>
          );
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span
            key="ellipsis2"
            className="w-10 h-10 flex items-center justify-center"
          >
            ...
          </span>
        );
      }
    } else {
      // Display all pages if total pages is small
      for (let i = 2; i < totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${
              currentPage === i
                ? "bg-blue-600 text-white"
                : "bg-white shadow-sm"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    // Last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === totalPages
              ? "bg-blue-600 text-white"
              : "bg-white shadow-sm"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    pages.push(
      <button
        key="next"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow-sm"
      >
        <ChevronRight size={16} />
      </button>
    );

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 mb-6">
      {renderPageNumbers()}
    </div>
  );
};
