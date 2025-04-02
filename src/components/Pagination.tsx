"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPaginationRange = () => {
    const range = [];
    const maxVisiblePages = 5;
    const ellipsis = "...";

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      const leftBound = Math.max(currentPage - 1, 1);
      const rightBound = Math.min(currentPage + 1, totalPages);

      range.push(1);
      if (leftBound > 2) range.push(ellipsis);
      for (let i = leftBound; i <= rightBound; i++) {
        if (i !== 1 && i !== totalPages) range.push(i);
      }
      if (rightBound < totalPages - 1) range.push(ellipsis);
      range.push(totalPages);
    }

    return range;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-[5px]">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`w-8 h-8 rounded-lg border p-2.5 gap-2.5 flex items-center justify-center ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-none"
            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer border-gray-300 "
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {getPaginationRange().map((item, index) =>
        item === "..." ? (
          <span key={index} className="px-2 py-1">
            {item}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(item as number)}
            className={`w-8 h-8 rounded-lg border p-2.5 gap-2.5 flex items-center justify-center font-medium text-xs leading-4 tracking-normal ${
              currentPage === item
                ? "bg-[#0967D2] text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 rounded-lg border p-2.5 gap-2.5 flex items-center justify-center ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-none"
            : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer border-gray-300 "
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
