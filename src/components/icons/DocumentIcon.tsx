
import React from "react";

interface DocumentIconProps {
  className?: string;
}

const DocumentIcon: React.FC<DocumentIconProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-1 -left-3 w-[48px] h-[60px] bg-blue-100 border border-brand-blue rounded shadow-sm transform -rotate-6 z-0"></div>
      <div className="relative w-[48px] h-[60px] bg-white border border-brand-blue rounded shadow-sm z-10">
        <div className="absolute top-3 left-3 w-9/12 h-1 bg-blue-200 rounded-full"></div>
        <div className="absolute top-7 left-3 w-7/12 h-1 bg-blue-200 rounded-full"></div>
        <div className="absolute top-11 left-3 w-10/12 h-1 bg-blue-200 rounded-full"></div>
        <div className="absolute top-[38px] left-3 w-8/12 h-1 bg-blue-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default DocumentIcon;
