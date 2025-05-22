'use client';

import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Search, Trash2 } from 'lucide-react';
import { ChangeRoleDialog } from '@/components/polygon-admin-components/dilogs-modal/change-role-modal';
import { toast } from '@/components/ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// interface PageProps {
//   params: {
//     id: string;
//   };
// }
export default function AdminDetails() {
  // const router = useRouter();
  const [activeTab, setActiveTab] = useState('permissions');
  const [changeRoleOpen, setChangeRoleOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [admin, setAdmin] = useState({
    // id: params.id,
    firstName: 'Daniel',
    lastName: 'Stephan',
    email: 'danielstephan123@gmail.com',
    phone: '09023561002',
    currentRole: 'Admin',
    profileImage:
      'https://res.cloudinary.com/dk5mfu099/image/upload/v1746600553/2d4e3c4ddee47bbb4418cde62a68b01bb316e9e7_opvt3j.jpg',
  });

  const [permissions, setPermissions] = useState([
    'View candidate profiles',
    'Edit candidate details',
    'Activate/deactivate candidate accounts',
    'Manage paid subscriptions',
    'Delete candidate accounts',
    'View all job applications',
    'View candidate profiles',
    'View candidate profiles',
    'View candidate profiles',
  ]);

  const [activityLogs, setActivityLogs] = useState([
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
    {
      deviceName: 'iPhone 12 Pro MAX, 265GB, Tony Red',
      dateTime: '12/05/2025, 10:00AM',
      location: 'Nigeria',
      action: 'Cover letter created',
      description:
        'Submitted an application for the UX/UI Designer position at Company X',
    },
  ]);

  // Add these new state variables for filtering and pagination
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleChangeRole = (data: { roleType: string; confirmed: boolean }) => {
    if (data.confirmed) {
      // Update the admin's role
      setAdmin({
        ...admin,
        currentRole: data.roleType,
      });

      // Close the dialog
      setChangeRoleOpen(false);

      // Show a success toast
      toast({
        title: 'Role updated',
        description: `${admin.firstName} ${admin.lastName}'s role has been updated to ${data.roleType}`,
      });
    }
  };

  const handleRemovePermission = (permission: string) => {
    // Remove the permission from the list
    const updatedPermissions = permissions.filter((p) => p !== permission);
    setPermissions(updatedPermissions);

    // Show a success toast
    toast({
      title: 'Permission removed',
      description: `"${permission}" permission has been removed from ${admin.firstName} ${admin.lastName}`,
    });
  };

  // Filter permissions based on search query
  const filteredPermissions = permissions.filter((permission) =>
    permission.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter activity logs based on search query and date range
  const filteredActivityLogs = activityLogs.filter((log) => {
    const matchesSearch =
      log.deviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.location.toLowerCase().includes(searchQuery.toLowerCase());

    // If no date filters are applied, just use the search filter
    if (!fromDate && !toDate) return matchesSearch;

    // Parse the log date
    const logDate = new Date(log.dateTime.split(',')[0]);

    // Apply date filters if they exist
    const afterFromDate = fromDate ? logDate >= new Date(fromDate) : true;
    const beforeToDate = toDate ? logDate <= new Date(toDate) : true;

    return matchesSearch && afterFromDate && beforeToDate;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPermissions = filteredPermissions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const currentActivityLogs = filteredActivityLogs.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPermissionsPages = Math.ceil(
    filteredPermissions.length / itemsPerPage
  );
  const totalActivityPages = Math.ceil(
    filteredActivityLogs.length / itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, fromDate, toDate]);

  const handleApplyFilter = () => {
    // This function is called when the Apply filter button is clicked
    // The filtering is already handled by the useEffect and filter functions
    toast({
      title: 'Filters applied',
      description: 'Activity log has been filtered based on your criteria',
    });
  };

  const handleClearFilter = () => {
    setFromDate('');
    setToDate('');
    setSearchQuery('');
    toast({
      title: 'Filters cleared',
      description: 'All filters have been reset',
    });
  };

  // Keep the return JSX but update the relevant parts
  return (
    <>
      {/* Keep the header section the same */}
      <div className="mb-8 rounded-[22px] bg-[#0967D2] h-24 w-full "></div>

      <div className="relative -mt-16 mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
        <div className="relative ml-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white">
          <img
            src={
              admin.profileImage ||
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1746600767/profile-pic_zl0v3b.jpg'
            }
            alt={`${admin.firstName} ${admin.lastName}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="ml-4 flex-1 md:mt-5 ">
          <h1 className="text-[16px] md:text-xl font-bold text-[#08121D]">
            {admin.firstName} {admin.lastName}
          </h1>
          <div className="flex  mt-1 flex-row md:items-center md:gap-4  text-xs text-[#08121D] font-normal gap-3">
            <div className="flex items-center gap-2 ">
              <span>
                <Mail className="w-4 h-4" />
              </span>
              <span>{admin.email}</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span>
                <Phone className="w-4 h-4" />
              </span>
              <span>{admin.phone}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mr-auto flex-1 md:mt-6">
          <span className="rounded-md bg-[#E6FBE9] px-2 py-1 text-xs font-medium text-[#07A81A] shadow-sm ">
            {admin.currentRole}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setChangeRoleOpen(true)}
            className="text-[#08121D] text-xs bg-white"
          >
            Change role
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="permissions"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="mb-6">
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity log</TabsTrigger>
        </TabsList>

        {/* Update the search and filter section */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {activeTab === 'activity' && (
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-sm whitespace-nowrap">From:</span>
                <div className="relative">
                  <Input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-36"
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-sm whitespace-nowrap">To:</span>
                <div className="relative">
                  <Input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-36"
                  />
                </div>
              </div>

              <Button
                size="sm"
                className="bg-teal-500 hover:bg-teal-600"
                onClick={handleApplyFilter}
              >
                Apply filter
              </Button>

              <Button variant="outline" size="sm" onClick={handleClearFilter}>
                Clear filter
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="permissions">
          <div className="space-y-4">
            {currentPermissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-gray-500">No permissions found</p>
              </div>
            ) : (
              currentPermissions.map((permission, index) => (
                <div
                  key={index}
                  className="flex md:items-center md:justify-between rounded-lg border bg-white p-4 text-[#515D68] text-sm leading-[16px] flex-col md:flex-row justify-start"
                >
                  <span>{permission}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 "
                    onClick={() => handleRemovePermission(permission)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove permission
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Add pagination for permissions */}
          {filteredPermissions.length > itemsPerPage && (
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Showing {indexOfFirstItem + 1}-
                  {Math.min(indexOfLastItem, filteredPermissions.length)} of{' '}
                  {filteredPermissions.length}
                </span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) =>
                    setItemsPerPage(Number.parseInt(value))
                  }
                >
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from(
                  { length: Math.min(totalPermissionsPages, 3) },
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

                {totalPermissionsPages > 3 && <span className="mx-1">...</span>}

                {totalPermissionsPages > 3 && (
                  <Button
                    variant={
                      currentPage === totalPermissionsPages
                        ? 'default'
                        : 'outline'
                    }
                    size="sm"
                    onClick={() => setCurrentPage(totalPermissionsPages)}
                  >
                    {totalPermissionsPages}
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalPermissionsPages)
                    )
                  }
                  disabled={currentPage === totalPermissionsPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="activity">
          {currentActivityLogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-gray-500">No activity logs found</p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>DEVICE NAME</TableHead>
                    <TableHead>DATE & TIME</TableHead>
                    <TableHead>LOCATION</TableHead>
                    <TableHead>ACTIONS</TableHead>
                    <TableHead>DESCRIPTION</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentActivityLogs.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell>{log.deviceName}</TableCell>
                      <TableCell>{log.dateTime}</TableCell>
                      <TableCell>{log.location}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Add pagination for activity logs */}
          {filteredActivityLogs.length > itemsPerPage && (
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Showing {indexOfFirstItem + 1}-
                  {Math.min(indexOfLastItem, filteredActivityLogs.length)} of{' '}
                  {filteredActivityLogs.length}
                </span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) =>
                    setItemsPerPage(Number.parseInt(value))
                  }
                >
                  <SelectTrigger className="w-16">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from(
                  { length: Math.min(totalActivityPages, 3) },
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

                {totalActivityPages > 3 && <span className="mx-1">...</span>}

                {totalActivityPages > 3 && (
                  <Button
                    variant={
                      currentPage === totalActivityPages ? 'default' : 'outline'
                    }
                    size="sm"
                    onClick={() => setCurrentPage(totalActivityPages)}
                  >
                    {totalActivityPages}
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, totalActivityPages)
                    )
                  }
                  disabled={currentPage === totalActivityPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <ChangeRoleDialog
        open={changeRoleOpen}
        onOpenChange={setChangeRoleOpen}
        admin={{
          firstName: admin.firstName,
          lastName: admin.lastName,
          currentRole: admin.currentRole,
        }}
        onSubmit={handleChangeRole}
      />
    </>
  );
};


