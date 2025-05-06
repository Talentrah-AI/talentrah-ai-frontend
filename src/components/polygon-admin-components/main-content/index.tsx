'use client'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { FileText, Filter, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import RolesTab from "../roles-tab"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import PermissionTab from "../permission-tab"
import { Adamina } from "next/font/google"
import AdminTabPage from "../admin-tab-page"
import { CreateRoleDialog } from "../dilogs-modal/create-role-modal"
import { CreateAdminDialog } from "../dilogs-modal/create-admin-modal"
import { EditRoleDialog } from "../dilogs-modal/edit-role-modal"
import { AddPermissionDialog } from "../dilogs-modal/add-permission-modal"
import { EditPermissionDialog } from "../dilogs-modal/edit-permission-modal"
import { RemovePermissionDialog } from "../dilogs-modal/remove-permission-modal"


 export interface AdminProps
{
  id: number
  firstName: string 
  lastName: string 
  email: string 
  role: string 
  permissions: number 
  dateAdded: string 
  phone:string 
  
}

export interface RolesProps
{
  name: string 
  count: number 
  permissions: number 
  
}

const MainContentDashboard = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const router = useRouter();
  const [createAdminOpen, setCreateAdminOpen] = useState<boolean >(false);
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

  const [deleteAdminOpen, setDeleteAdminOpen] = useState<boolean>(false);
  const [deleteRoleOpen, setDeleteRoleOpen] = useState<boolean>(false);
  const [adminToDelete, setAdminToDelete] = useState<any>(null);
  const [roleToDelete, setRoleToDelete] = useState<any>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.firstName.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.lastName.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.email.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.phone.toLowerCase().includes(adminSearchQuery.toLowerCase()) ||
      admin.role.toLowerCase().includes(adminSearchQuery.toLowerCase())
  );

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
  }, [adminSearchQuery, roleSearchQuery, permissionSearchQuery, activeTab]);

  // Handle delete admin
  const handleDeleteAdmin = () => {
    if (adminToDelete) {
      // Remove the admin from the list
      const updatedAdmins = admins.filter(
        (admin) => admin.id !== adminToDelete.id
      );
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
      const updatedRoles = roles.filter(
        (role) => role.name !== roleToDelete.name
      );

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

  const handleCreateAdmin = (data: any) => {
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

  const handleCreateRole = (data: any) => {
    // In a real app, you would send this data to your API
    console.log('Creating role with data:', data);
    setCreateRoleOpen(false);
  };

  const handleUpdateRole = (data: any) => {
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
    setRemovePermissionOpen(false);
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-blue-50 p-4">
        <FileText className="h-8 w-8 text-blue-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium">No admins assigned yet</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">
        You haven't added any admins to manage Talentrah. Assign admins to help
        oversee users, roles, and platform activities.
      </p>
      <Button onClick={() => setCreateAdminOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> Add an admin
      </Button>
    </div>
  );
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
            className="flex-1 h-[40px]"
            variant="outline"
          >
            <Plus className="mr-2 h-4 w-4" />
            {activeTab === 'admins'
              ? 'Add an admin'
              : activeTab === 'roles'
                ? 'Create a role'
                : 'Add permission'}
          </Button>
          <Button className="flex-1 h-[40px]">
            <Filter className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>
      <Tabs defaultValue="roles" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6  shadow-md rounded-[12px] bg-white p-2 gap-2 h-[40px] transition-colors duration-500">
          <TabsTrigger
            value="roles"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400 data-[state=active]:text-white transition-colors duration-500'
            )}
          >
            Roles
          </TabsTrigger>
          <TabsTrigger
            value="admins"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400 data-[state=active]:text-white transition-colors duration-500'
            )}
          >
            Admins
          </TabsTrigger>
          <TabsTrigger
            value="permissions"
            className={cn(
              'data-[state=active]:bg-gradient-to-r from-blue-500 to-teal-400 data-[state=active]:text-white transition-colors duration-500'
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
      />
    </div>
  );
} 

export default MainContentDashboard