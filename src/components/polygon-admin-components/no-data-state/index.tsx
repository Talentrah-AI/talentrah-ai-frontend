import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react'

const NoDataState = ({ tabType, setCreateTab }: { tabType: string, setCreateTab:Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-blue-50 p-4">
        <FileText className="h-8 w-8 text-blue-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium">No {tabType} yet</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">
        {tabType === 'admins'
          ? "You haven't added any admins to manage Talentrah. Assign admins to help oversee users, roles, and platform activities."
          : tabType === 'permissions'
            ? "You haven't added any permissions yet. Permissions define what actions users can perform in the system."
            : "You haven't added any roles yet. Roles help organize permissions for different types of administrators."}
      </p>
      {tabType && (
        <Button onClick={() => setCreateTab(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add an admin
        </Button>
      )}
    </div>
  );
};

export default NoDataState