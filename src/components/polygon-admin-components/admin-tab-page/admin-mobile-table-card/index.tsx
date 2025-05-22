'use-client';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import React from 'react'
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { AdminCard } from '@/lib/polygon-types';

const AdminMobileCard = ({
  isMobile,
  setAdminToDelete,
  setDeleteAdminOpen,
  admin,
}: AdminCard) => {
  return (
    <div>
      {isMobile && (
        <>
          <div className="bg-white rounded-lg  p-4 mb-3 min-h-[216px] shadow-md">
            <div className="flex items-start justify-between mb-3">
              <Checkbox />
              <div className="grid  gap-2 grid-cols-1 sm:grid-cols-2 grid-rows-7 sm:grid-rows-4 flex-1  ml-2 h-full">
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    Full Name
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.firstName}
                  </p>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    last name
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.lastName}
                  </p>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    email address
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.email}
                  </p>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    phone number
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.phone}
                  </p>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    role type
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.role}
                  </p>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    permissions
                  </h2>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    {admin.permissions}
                  </Badge>
                </div>
                <div className=" px-2 space-y-2">
                  <h2 className="text-[#717A84] text-[16px] leading-[12px] capitalize font-normal">
                    date posted
                  </h2>
                  <p className="text-[#08121D] text-[16px] leading-[12px] capitalize font-normal">
                    {admin.dateAdded}
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/admin-management/${admin.id}`}>
                      View details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Send email</DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => {
                      setAdminToDelete(admin);
                      setDeleteAdminOpen(true);
                    }}
                  >
                    Delete admin
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminMobileCard