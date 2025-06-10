import { Search } from 'lucide-react';
import React from 'react';

const EmptySearchState = ({
  searchQuery,
  tabType,
}: {
  searchQuery: string;
  tabType: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mb-2 text-lg font-medium">No results found</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">
        No {tabType} matching &quot;
        <span className="font-medium">{searchQuery}</span>&quot; were found. Try
        adjusting your search or filter criteria.
      </p>
    </div>
  );
};

export default EmptySearchState;
