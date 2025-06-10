'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Filter, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import RolesTab from '../roles-tab';
import { toast } from '@/hooks/use-toast';
import PermissionTab from '../permission-tab';
import AdminTabPage from '../admin-tab-page';
import { CreateRoleDialog, RoleProps } from '../dilogs-modal/create-role-modal';
import {
  AdminFormData,
  CreateAdminDialog,
} from '../dilogs-modal/create-admin-modal';
import { EditRoleDialog } from '../dilogs-modal/edit-role-modal';
import { AddPermissionDialog } from '../dilogs-modal/add-permission-modal';
import { EditPermissionDialog } from '../dilogs-modal/edit-permission-modal';
import { RemovePermissionDialog } from '../dilogs-modal/remove-permission-modal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AdminProps, RolesProps } from '@/lib/polygon-types';

const MainContentDashboard = () => {
  const [activeTab, setActiveTab] = useState('roles');
  // const router = useRouter();
  const [createAdminOpen, setCreateAdminOpen] = useState<boolean>(false);
  const [createRoleOpen, setCreateRoleOpen] = useState<boolean>(false);
  const [editRoleOpen, setEditRoleOpen] = useState<boolean>(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  // Add these state variables inside the AdminManagement component, with the other state variables
  const [permissions, setPermissions] = useState<string[]>([
    'View candidate profiles',
    'Edit candidate details',
    'Activate/deactivate candidate accounts',
    'Manage paid subscriptions',
    'Delete candidate accounts',
    'View all job applications',
    'Edit/update resumes',
    'Edit mentorship profiles',
    'Create new admin roles',
    'View activity logs',
    'View mentors activity logs',
  ]);
  const [addPermissionOpen, setAddPermissionOpen] = useState<boolean>(false);
  const [editPermissionOpen, setEditPermissionOpen] = useState<boolean>(false);
  const [removePermissionOpen, setRemovePermissionOpen] =
    useState<boolean>(false);
  const [selectedPermission, setSelectedPermission] = useState<string | null>(
    null
  );
  const [admins, setAdmins] = useState<AdminProps[]>([
    {
      id: 1,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Support Agent',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 2,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Support Agent',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 3,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Admin',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 4,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Admin',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 5,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Finance Manager',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 6,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Support Agent',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 7,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Finance Manager',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 8,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Admin',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 9,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Admin',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
    {
      id: 10,
      firstName: 'Andrew',
      lastName: 'Elorza',
      email: 'andrewelorza@gmail.com',
      phone: '09021213456',
      role: 'Admin',
      permissions: 12,
      dateAdded: '12/05/2025, 10:00AM',
    },
  ]);
  const roles: RolesProps[] = [
    { name: 'Admins', permissions: 20, count: 5 },
    { name: 'Mentors', permissions: 20, count: 8 },
    { name: 'Support agent', permissions: 20, count: 12 },
    { name: 'Admin', permissions: 20, count: 5 },
    { name: 'Admin', permissions: 20, count: 5 },
    { name: 'Admin', permissions: 20, count: 5 },
    { name: 'Admin', permissions: 20, count: 5 },
  ];

  // Add these new state variables for search, delete, and pagination
  const [adminSearchQuery, setAdminSearchQuery] = useState('');
  const [roleSearchQuery, setRoleSearchQuery] = useState('');
  const [permissionSearchQuery, setPermissionSearchQuery] = useState('');
  const [roleTypeFilter, setRoleTypeFilter] = useState<string | null>(null);
  const [permissionsFilter, setPermissionsFilter] = useState<number | null>(
    null
  );
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [calendarType, setCalendarType] = useState<'from' | 'to'>('from');
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const [deleteAdminOpen, setDeleteAdminOpen] = useState<boolean>(false);
  const [deleteRoleOpen, setDeleteRoleOpen] = useState<boolean>(false);
  const [adminToDelete, setAdminToDelete] = useState<AdminProps | null>(null);
  const [roleToDelete, setRoleToDelete] = useState<RolesProps | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch =
      admin.firstName.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.lastName.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.phone.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.role.toLowerCase().includes(adminSearchQuery.toLowerCase());

    const matchesRoleType = !roleTypeFilter || admin.role === roleTypeFilter;
    const matchesPermissions =
      !permissionsFilter || admin.permissions === permissionsFilter;
    const adminDate = new Date(admin.dateAdded.split(',')[0]);
    const matchesDateRange =
      (!dateRange.from || adminDate >= dateRange.from) &&
      (!dateRange.to || adminDate <= dateRange.to);

    return (
      matchesSearch && matchesRoleType && matchesPermissions && matchesDateRange
    );
  });

  // Filter roles based on search query
  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(roleSearchQuery.toLowerCase())
  );

  // Filter permissions based on search query
  const filteredPermissions = permissions.filter((permission) =>
    permission.toLowerCase().includes(permissionSearchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentAdmins = filteredAdmins.slice(indexOfFirstItem, indexOfLastItem);
  const currentRoles = filteredRoles.slice(indexOfFirstItem, indexOfLastItem);
  const currentPermissions = filteredPermissions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalAdminPages = Math.ceil(filteredAdmins.length / itemsPerPage);
  const totalRolePages = Math.ceil(filteredRoles.length / itemsPerPage);
  const totalPermissionPages = Math.ceil(
    filteredPermissions.length / itemsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    adminSearchQuery,
    roleSearchQuery,
    permissionSearchQuery,
    activeTab,
    roleTypeFilter,
    permissionsFilter,
  ]);

  // Handle delete admin
  const handleDeleteAdmin = () => {
    if (adminToDelete) {
      // Remove the admin from the list
      const updatedAdmins = admins.filter(
        (admin) => admin.id !== adminToDelete.id
      );

      // Check if the current page would be empty after deletion
      const currentPageItemCount = filteredAdmins.filter(
        (admin) =>
          admin.id !== adminToDelete.id &&
          filteredAdmins.indexOf(admin) >= indexOfFirstItem &&
          filteredAdmins.indexOf(admin) < indexOfLastItem
      ).length;

      // If this was the last item on the page and not the first page, go to previous page
      if (currentPageItemCount === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      setAdmins(updatedAdmins);

      // Close the dialog
      setDeleteAdminOpen(false);

      // Show a success toast
      toast({
        title: 'Admin deleted',
        description: `${adminToDelete.firstName} ${adminToDelete.lastName} has been removed`,
      });

      // Reset the admin to delete
      setAdminToDelete(null);
    }
  };

  // Handle delete role
  const handleDeleteRole = () => {
    if (roleToDelete) {
      // Remove the role from the list

      // Check if the current page would be empty after deletion
      const currentPageItemCount = filteredRoles.filter(
        (role) =>
          role.name !== roleToDelete.name &&
          filteredRoles.indexOf(role) >= indexOfFirstItem &&
          filteredRoles.indexOf(role) < indexOfLastItem
      ).length;

      // If this was the last item on the page and not the first page, go to previous page
      if (currentPageItemCount === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
      // Update the roles state
      // This is a mock implementation since we're not actually updating the roles array in state
      console.log('Deleting role:', roleToDelete);

      // Close the dialog
      setDeleteRoleOpen(false);

      // Show a success toast
      toast({
        title: 'Role deleted',
        description: `${roleToDelete.name} role has been removed`,
      });

      // Reset the role to delete
      setRoleToDelete(null);
    }
  };

  const handleEditRole = (roleName: string) => {
    setSelectedRole(roleName);
    setEditRoleOpen(true);
  };

  const handleCreateAdmin = (data: AdminFormData) => {
    // In a real app, you would send this data to your API
    console.log('Creating admin with data:', data);
    setCreateAdminOpen(false);

    // For demo purposes, add the new admin to the list
    const newAdmin = {
      id: admins.length + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      role: data.roleType,
      permissions: 12,
      dateAdded: new Date().toLocaleString(),
    };

    setAdmins([...admins, newAdmin]);
  };

  const handleCreateRole = (data: RoleProps) => {
    // In a real app, you would send this data to your API
    console.log('Creating role with data:', data);
    setCreateRoleOpen(false);
  };

  const handleUpdateRole = (data: RoleProps) => {
    // In a real app, you would send this data to your API
    console.log('Updating role with data:', data);
    setEditRoleOpen(false);
  };

  // Add these handler functions inside the AdminManagement component, after the other handler functions
  const handleAddPermission = (data: { name: string }) => {
    // In a real app, you would send this data to your API
    console.log('Adding permission:', data.name);
    setPermissions([...permissions, data.name]);
    setAddPermissionOpen(false);
  };

  const handleEditPermission = (data: { name: string }) => {
    // In a real app, you would send this data to your API
    console.log('Editing permission:', selectedPermission, 'to', data.name);
    if (selectedPermission) {
      const updatedPermissions = permissions.map((p) =>
        p === selectedPermission ? data.name : p
      );
      setPermissions(updatedPermissions);
    }
    setEditPermissionOpen(false);
  };

  const handleRemovePermission = () => {
    // In a real app, you would send this data to your API
    console.log('Removing permission:', selectedPermission);
    if (selectedPermission) {
      const updatedPermissions = permissions.filter(
        (p) => p !== selectedPermission
      );
      setPermissions(updatedPermissions);
    }
    // Check if the current page would be empty after deletion
    const currentPageItemCount = filteredPermissions.filter(
      (permission) =>
        permission !== selectedPermission &&
        filteredPermissions.indexOf(permission) >= indexOfFirstItem &&
        filteredPermissions.indexOf(permission) < indexOfLastItem
    ).length;

    // If this was the last item on the page and not the first page, go to previous page
    if (currentPageItemCount === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    setRemovePermissionOpen(false);
  };

  const handleApplyFilter = () => {
    // This will trigger the useEffect to filter the data
    toast({
      title: 'Filters applied',
      description: 'The data has been filtered based on your criteria',
    });
  };

  const handleClearFilter = () => {
    setRoleTypeFilter(null);
    setPermissionsFilter(null);
    setDateRange({ from: undefined, to: undefined });
    setAdminSearchQuery('');

    toast({
      title: 'Filters cleared',
      description: 'All filters have been reset',
    });
  };
  // / Handle select all admins

  // Handle select admin

  const handleOpenCalendar = (type: 'from' | 'to') => {
    setCalendarType(type);
    setCalendarOpen(true);
  };

  const handleSelectDate = (date: Date) => {
    if (calendarType === 'from') {
      setDateRange({ ...dateRange, from: date });
    } else {
      setDateRange({ ...dateRange, to: date });
    }
  };

  const formatDate = (date?: Date) => {
    if (!date) return 'Select date';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-[20px] md:text-2xl font-medium">
          Admin Management
        </h1>
        <div className="flex gap-4 md:gap-2 ">
          <Button
            onClick={() => {
              if (activeTab === 'admins') {
                setCreateAdminOpen(true);
              } else if (activeTab === 'roles') {
                setCreateRoleOpen(true);
              } else if (activeTab === 'permissions') {
                setAddPermissionOpen(true);
              }
            }}
            className="flex-1 h-[40px] border border-[#0967D2] text-[#0967D2]"
            variant="outline"
          >
            <Plus className="mr-2 h-4 w-4" />
            {activeTab === 'admins'
              ? 'Add an admin'
              : activeTab === 'roles'
                ? 'Create a role'
                : 'Add permission'}
          </Button>
          <Button className="flex-1 h-[40px] flex items-center">
            <Filter className=" h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="roles" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6  shadow-md rounded-[12px] bg-white p-2 gap-2 h-[40px] transition-colors duration-500">
          <TabsTrigger
            value="roles"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400 cursor-pointer data-[state=active]:text-white transition-colors duration-500'
            )}
          >
            Roles
          </TabsTrigger>
          <TabsTrigger
            value="admins"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400  cursor-pointer data-[state=active]:text-white transition-colors duration-500'
            )}
          >
            Admins
          </TabsTrigger>
          <TabsTrigger
            value="permissions"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400  cursor-pointer data-[state=active]:text-white transition-colors duration-500'
            )}
          >
            Permissions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="roles">
          <RolesTab
            currentRoles={currentRoles}
            handleEditRole={handleEditRole}
            setDeleteRoleOpen={setDeleteRoleOpen}
            setRoleToDelete={setRoleToDelete}
            filteredRoles={filteredRoles}
            itemsPerPage={itemsPerPage}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalRolePages={totalRolePages}
            roleSearchQuery={roleSearchQuery}
            setRoleSearchQuery={setRoleSearchQuery}
            setItemsPerPage={setItemsPerPage}
            roles={roles}
            setCreateRoleOpen={setCreateRoleOpen}
          />
        </TabsContent>
        <TabsContent value="permissions">
          <PermissionTab
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            permissionSearchQuery={permissionSearchQuery}
            setPermissionSearchQuery={setPermissionSearchQuery}
            currentPermissions={currentPermissions}
            setSelectedPermission={setSelectedPermission}
            setEditPermissionOpen={setEditPermissionOpen}
            setRemovePermissionOpen={setRemovePermissionOpen}
            filteredPermissions={filteredPermissions}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPermissionPages={totalPermissionPages}
            permissions={permissions}
            setAddPermissionOpen={setAddPermissionOpen}
          />
        </TabsContent>
        <TabsContent value="admins">
          <AdminTabPage
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            adminSearchQuery={adminSearchQuery}
            setAdminSearchQuery={setAdminSearchQuery}
            currentAdmins={currentAdmins}
            setAdminToDelete={setAdminToDelete}
            setDeleteAdminOpen={setDeleteAdminOpen}
            indexOfFirstItem={indexOfFirstItem}
            filteredAdmins={filteredAdmins}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            indexOfLastItem={indexOfLastItem}
            totalAdminPages={totalAdminPages}
            setCreateAdminOpen={setCreateAdminOpen}
            admins={admins}
            setRoleTypeFilter={setRoleTypeFilter}
            roleTypeFilter={roleTypeFilter}
            permissionsFilter={permissionsFilter}
            setPermissionsFilter={setPermissionsFilter}
            handleApplyFilter={handleApplyFilter}
            handleClearFilter={handleClearFilter}
            dateRange={dateRange}
            formatDate={formatDate}
            handleOpenCalendar={handleOpenCalendar}
            calendarOpen={calendarOpen}
            setCalendarOpen={setCalendarOpen}
            handleSelectDate={handleSelectDate}
          />
        </TabsContent>
      </Tabs>

      {/* keep the exixting dialog */}

      <CreateRoleDialog
        open={createRoleOpen}
        onOpenChange={setCreateRoleOpen}
        onSubmit={handleCreateRole}
      />

      <CreateAdminDialog
        open={createAdminOpen}
        onOpenChange={setCreateAdminOpen}
        onSubmit={handleCreateAdmin}
      />
      <EditRoleDialog
        open={editRoleOpen}
        onOpenChange={setEditRoleOpen}
        roleName={selectedRole || ''}
        onSubmit={handleUpdateRole}
      />

      <AddPermissionDialog
        open={addPermissionOpen}
        onOpenChange={setAddPermissionOpen}
        onSubmit={handleAddPermission}
      />

      <EditPermissionDialog
        open={editPermissionOpen}
        onOpenChange={setEditPermissionOpen}
        permissionName={selectedPermission || ''}
        onSubmit={handleEditPermission}
      />

      <RemovePermissionDialog
        open={removePermissionOpen}
        onOpenChange={setRemovePermissionOpen}
        onConfirm={handleRemovePermission}
        title={'Remove permission?'}
        desc={'Are you sure you want to remove this permission?'}
        deleteNote={' Yes, remove permission'}
      />
      <RemovePermissionDialog
        open={deleteAdminOpen}
        onOpenChange={setDeleteAdminOpen}
        onConfirm={handleDeleteAdmin}
        title={'Delete Admin'}
        desc={
          'Are you sure you want to delete this admin? This action cannot be undone.'
        }
        deleteNote={'Delete'}
      />

      {/* Add delete role dialog */}
      <AlertDialog open={deleteRoleOpen} onOpenChange={setDeleteRoleOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Role</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this role? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteRole}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MainContentDashboard;
