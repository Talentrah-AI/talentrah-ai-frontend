import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PermissionsProps } from '@/lib/polygon-types';
import { ChevronLeft, ChevronRight, Edit, Search, Trash2 } from 'lucide-react';



const PermissionTab = ({
  itemsPerPage,
  setItemsPerPage,
  permissionSearchQuery,
  setPermissionSearchQuery,
  currentPermissions,
  setSelectedPermission,
  setEditPermissionOpen,
  setRemovePermissionOpen,
  filteredPermissions,
  indexOfFirstItem,
  indexOfLastItem,
  setCurrentPage,
  currentPage,
  totalPermissionPages,
}:PermissionsProps) => {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2">
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
        <div className="flex flex-1 items-center gap-2 md:ml-auto md:max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 bg-white"
              value={permissionSearchQuery}
              onChange={(e) => setPermissionSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {currentPermissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-gray-500">No permissions found</p>
          </div>
        ) : (
          currentPermissions.map((permission, index) => (
            <div
              key={index}
              className="flex md:items-center flex-col justify-start md:flex-row md:justify-between rounded-lg shadow-sm bg-white p-4"
            >
              <div className="md:flex-1 pl-4 md:pl-0">
                <h3 className="font-normal text-[#515D68] text-sm  leading-[20px]  ">
                  {permission}
                </h3>
              </div>
              <div className="md:ml-4 flex items-center gap-2 justify-between ">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 cursor-pointer"
                  onClick={() => {
                    setSelectedPermission(permission);
                    setEditPermissionOpen(true);
                  }}
                >
                  <Edit />
                  Edit permission
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 cursor-pointer"
                  onClick={() => {
                    setSelectedPermission(permission);
                    setRemovePermissionOpen(true);
                  }}
                >
                  <Trash2 />
                  Remove permission
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination for permissions */}
      {filteredPermissions.length > itemsPerPage && (
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1} to{' '}
            {Math.min(indexOfLastItem, filteredPermissions.length)} of{' '}
            {filteredPermissions.length} entries
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </Button>

            {Array.from(
              { length: Math.min(totalPermissionPages, 3) },
              (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              )
            )}

            {totalPermissionPages > 3 && <span className="mx-1">...</span>}

            {totalPermissionPages > 3 && (
              <Button
                variant={
                  currentPage === totalPermissionPages ? 'default' : 'outline'
                }
                size="sm"
                onClick={() => setCurrentPage(totalPermissionPages)}
              >
                {totalPermissionPages}
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPermissionPages)
                )
              }
              disabled={currentPage === totalPermissionPages}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionTab