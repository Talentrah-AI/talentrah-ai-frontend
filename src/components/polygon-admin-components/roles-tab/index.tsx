import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SquarePen, Trash2 } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react'
import { RolesProps } from '../main-content';


interface RoleTabProps {
  currentRoles: RolesProps[];
  handleEditRole: (roleName: string) => void;
  setDeleteRoleOpen: Dispatch<SetStateAction<boolean>>;
  setRoleToDelete: Dispatch<any>;
  filteredRoles: RolesProps[];
  itemsPerPage: number;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalRolePages: number;
  setRoleSearchQuery: Dispatch<SetStateAction<string>>;
  roleSearchQuery: string;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
}
const RolesTab = ({
  currentRoles,
  handleEditRole,
  setDeleteRoleOpen,
  setRoleToDelete,
  filteredRoles,
  itemsPerPage,
  indexOfFirstItem,
  indexOfLastItem,
  setCurrentPage,
  currentPage,
  totalRolePages,
  roleSearchQuery,
  setRoleSearchQuery,
  setItemsPerPage,
}: RoleTabProps) => {
  return (
    <div>
      {' '}
      <div className="mb-6 flex flex-col gap-4 md:flex-row ">
        <div className="flex items-center gap-2 ">
          <span className="text-sm">Show</span>
          <Select
            value={itemsPerPage.toString()}
            onValueChange={(value) => setItemsPerPage(Number.parseInt(value))}
          >
            <SelectTrigger className="w-19 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm">entries</span>
        </div>
        <div className="flex flex-1 items-center gap-2 md:ml-auto md:max-w-md ">
          <div className="relative flex-1 bg-white rounded-2xl">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 "
              value={roleSearchQuery}
              onChange={(e) => setRoleSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {currentRoles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-gray-500">No roles found</p>
          </div>
        ) : (
          currentRoles.map((role, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 flex-col md:flex-row md:justify-between rounded-lg  bg-white p-4"
            >
              <div className="flex flex-1 gap-3  w-full ">
                <div className="flex-1">
                  <h3 className="font-bold text-[#515D68] text-sm ">
                    {role.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 ">
                  <Badge className="bg-white text-[#B64F06] shadow-sm p-0.5 ">
                    <span className="bg-[#FCEFE6] text-xs rounded-lg p-0.5">
                      {role.permissions} permissions
                    </span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white text-[#07A81A] shadow-sm p-0.5"
                  >
                    <span className="bg-[#E6FBE9] text-xs rounded-lg p-0.5">
                      {role.count} {role.name.toLowerCase()}
                    </span>
                  </Badge>
                </div>
              </div>
              <div className="ml-4 flex items-center gap-2 flex-1 md:flex-0  w-full justify-between md:justify-start">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500"
                  onClick={() => handleEditRole(role.name)}
                >
                  <SquarePen />
                  Edit role
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600"
                  onClick={() => {
                    setRoleToDelete(role);
                    setDeleteRoleOpen(true);
                  }}
                >
                  <Trash2 className="text-red-700" />
                  Remove role
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Pagination for roles */}
      {filteredRoles.length > itemsPerPage && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1} to{' '}
            {Math.min(indexOfLastItem, filteredRoles.length)} of{' '}
            {filteredRoles.length} entries
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: Math.min(totalRolePages, 3) }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            {totalRolePages > 3 && <span className="mx-1">...</span>}

            {totalRolePages > 3 && (
              <Button
                variant={currentPage === totalRolePages ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(totalRolePages)}
              >
                {totalRolePages}
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalRolePages))
              }
              disabled={currentPage === totalRolePages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolesTab