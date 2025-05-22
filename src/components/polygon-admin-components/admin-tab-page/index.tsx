import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, FileText, MoreVertical, Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { AdminTabProps } from '@/lib/polygon-types';
import { useMediaQuery } from '@/hooks/use-mediaQuery';
import AdminMobileCard from './admin-mobile-table-card';
import NoDataState from '../no-data-state';
import EmptySearchState from '../empty-search-state';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarDatePicker } from '@/components/polygon-feedback-components/feedbacks-modal/calendar-date-picker-modal';



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
  setCreateAdminOpen,
  admins,
  roleTypeFilter,
  setRoleTypeFilter,
  permissionsFilter,
  setPermissionsFilter,
  handleApplyFilter,
  handleClearFilter,
  handleOpenCalendar,
  formatDate,
  dateRange,
  calendarOpen,
  setCalendarOpen,
  handleSelectDate,
}: AdminTabProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

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
        <div className="w-full flex gap-4 md:w-auto md:gap-2">
          {/* Role type */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 flex-1 bg-[#FFFFFF]"
              >
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5.16602H2C1.72667 5.16602 1.5 4.93935 1.5 4.66602C1.5 4.39268 1.72667 4.16602 2 4.16602H14C14.2733 4.16602 14.5 4.39268 14.5 4.66602C14.5 4.93935 14.2733 5.16602 14 5.16602Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                      fill="#292D32"
                    />
                    <path
                      d="M9.33073 11.834H6.66406C6.39073 11.834 6.16406 11.6073 6.16406 11.334C6.16406 11.0607 6.39073 10.834 6.66406 10.834H9.33073C9.60406 10.834 9.83073 11.0607 9.83073 11.334C9.83073 11.6073 9.60406 11.834 9.33073 11.834Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
                <span className="text-[#B0B5BB]">Role type</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="start">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={!roleTypeFilter ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => setRoleTypeFilter(null)}
                >
                  All
                </Button>
                <Button
                  variant={roleTypeFilter === 'Admin' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => setRoleTypeFilter('Admin')}
                >
                  Admin
                </Button>
                <Button
                  variant={
                    roleTypeFilter === 'Support Agent' ? 'default' : 'ghost'
                  }
                  className="justify-start"
                  onClick={() => setRoleTypeFilter('Support Agent')}
                >
                  Support Agent
                </Button>
                <Button
                  variant={
                    roleTypeFilter === 'Finance Manager' ? 'default' : 'ghost'
                  }
                  className="justify-start"
                  onClick={() => setRoleTypeFilter('Finance Manager')}
                >
                  Finance Manager
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          {/* permissions */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 flex-1 bg-[#FFFFFF]"
              >
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5.16602H2C1.72667 5.16602 1.5 4.93935 1.5 4.66602C1.5 4.39268 1.72667 4.16602 2 4.16602H14C14.2733 4.16602 14.5 4.39268 14.5 4.66602C14.5 4.93935 14.2733 5.16602 14 5.16602Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
                      fill="#292D32"
                    />
                    <path
                      d="M9.33073 11.834H6.66406C6.39073 11.834 6.16406 11.6073 6.16406 11.334C6.16406 11.0607 6.39073 10.834 6.66406 10.834H9.33073C9.60406 10.834 9.83073 11.0607 9.83073 11.334C9.83073 11.6073 9.60406 11.834 9.33073 11.834Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
                <span className="text-[#B0B5BB]">No. of permissions</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="start">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={!permissionsFilter ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => setPermissionsFilter(null)}
                >
                  All
                </Button>
                <Button
                  variant={permissionsFilter === 12 ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => setPermissionsFilter(12)}
                >
                  12
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex md:flex-wrap gap-2 items-center w-full md:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-4 md:gap-2 flex-1 bg-[#FFFFFF]"
            onClick={() => handleOpenCalendar('from')}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm text-[#B0B5BB]">
              From: {formatDate(dateRange.from)}
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 flex-1 bg-[#FFFFFF]"
            onClick={() => handleOpenCalendar('to')}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-sm text-[#B0B5BB]">
              To: {formatDate(dateRange.to)}
            </span>
          </Button>
        </div>

        <CalendarDatePicker
          open={calendarOpen}
          onOpenChange={setCalendarOpen}
          onSelectDate={handleSelectDate}
        />
        <Button
          size="sm"
          className="bg-teal-500 hover:bg-teal-600 h-[40px] md:h-auto"
          onClick={handleApplyFilter}
        >
          Apply filter
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleClearFilter}
          className="h-[40px] md:h-auto"
        >
          Clear filter
        </Button>

        <div className="flex flex-1 items-center gap-2 md:ml-auto md:max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 bg-white"
              value={adminSearchQuery}
              onChange={(e) => setAdminSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {currentAdmins.length === 0 ? (
        <TableRow>
          <TableCell colSpan={9} className="p-0 border-b-0">
            {admins.length === 0 ? (
              <NoDataState tabType="admins" setCreateTab={setCreateAdminOpen} />
            ) : adminSearchQuery ? (
              <EmptySearchState
                searchQuery={adminSearchQuery}
                tabType="admins"
              />
            ) : (
              <div className="py-8 text-center text-gray-500">
                No admins found
              </div>
            )}
          </TableCell>
        </TableRow>
      ) : (
        <>
          <div>
            {currentAdmins.map((admin) => (
              <AdminMobileCard
                isMobile={isMobile}
                setAdminToDelete={setAdminToDelete}
                setDeleteAdminOpen={setDeleteAdminOpen}
                admin={admin}
              />
            ))}
          </div>
          <div className="rounded-md  hidden md:block shadow-sm bg-white">
            <Table>
              <TableHeader>
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
                  <>
                    <TableRow key={admin.id}>
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
                          <DropdownMenuContent
                            align="end"
                            avoidCollisions={false}
                          >
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/admin/admin-management/${admin.id}`}
                              >
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
                  </>
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