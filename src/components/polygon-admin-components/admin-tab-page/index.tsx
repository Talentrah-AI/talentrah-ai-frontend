import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, MoreVertical, Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { AdminTabProps } from '@/lib/polygon-types';



const AdminTabPage = ({
  itemsPerPage,
  setItemsPerPage,
  adminSearchQuery,
  setAdminSearchQuery,
  currentAdmins,
  setAdminToDelete,
  setDeleteAdminOpen,
  indexOfFirstItem,
  filteredAdmins,
  setCurrentPage,
  currentPage,
  indexOfLastItem,
  totalAdminPages,
  setCreateAdminOpen
}:AdminTabProps) => {
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
              className="pl-8"
              value={adminSearchQuery}
              onChange={(e) => setAdminSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {currentAdmins.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 rounded-full bg-blue-50 p-4">
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="mb-2 text-lg font-medium">No admins assigned yet</h3>
          <p className="mb-6 max-w-md text-sm text-gray-500">
            You haven't added any admins to manage Talentrah. Assign admins to
            help oversee users, roles, and platform activities.
          </p>
          <Button onClick={() => setCreateAdminOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add an admin
          </Button>
        </div>
      ) : (
        <>
          <div className="rounded-md border">
            <Table>
              <TableHeader >
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>FIRST NAME</TableHead>
                  <TableHead>LAST NAME</TableHead>
                  <TableHead>EMAIL ADDRESS</TableHead>
                  <TableHead>PHONE NUMBER</TableHead>
                  <TableHead>ROLE TYPE</TableHead>
                  <TableHead>NO OF PERMISSIONS</TableHead>
                  <TableHead>DATE ADDED</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentAdmins.map((admin) => (
                  <TableRow
                    key={admin.id}
                   
                  >
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{admin.firstName}</TableCell>
                    <TableCell>{admin.lastName}</TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>{admin.phone}</TableCell>
                    <TableCell>{admin.role}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700"
                      >
                        {admin.permissions}
                      </Badge>
                    </TableCell>
                    <TableCell>{admin.dateAdded}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/Admin-management/${admin.id}`}>
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination for admins */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to{' '}
              {Math.min(indexOfLastItem, filteredAdmins.length)} of{' '}
              {filteredAdmins.length} entries
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

              {Array.from({ length: Math.min(totalAdminPages, 3) }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}

              {totalAdminPages > 3 && <span className="mx-1">...</span>}

              {totalAdminPages > 3 && (
                <Button
                  variant={
                    currentPage === totalAdminPages ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => setCurrentPage(totalAdminPages)}
                >
                  {totalAdminPages}
                </Button>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalAdminPages))
                }
                disabled={currentPage === totalAdminPages}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminTabPage