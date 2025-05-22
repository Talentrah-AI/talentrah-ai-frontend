import { Dispatch, SetStateAction } from 'react';

export interface FeedbackProps {
  selectedFeedbacks: string[];
  setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
  handleSendEmail: () => void;
  handleExport: (format: 'PDF' | 'EXCEL' | 'CSV') => void;
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  statusFilterOpen: boolean;
  setStatusFilterOpen: Dispatch<SetStateAction<boolean>>;
  statusFilter: string | null;
  setStatusFilter: Dispatch<SetStateAction<string | null>>;
  handleOpenCalendar: (type: 'from' | 'to') => void;
  formatDate: (date?: Date) => string;
  isMobile: boolean;
  handleApplyFilter: () => void;
  handleClearFilter: () => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  paginatedFeedbacks: Feedback[];
  handleSelectAll: () => void;
  handleSelectFeedback: (id: string) => void;
  handleEditStatus: (feedback: Feedback) => void;
  setCurrentFeedback: Dispatch<SetStateAction<Feedback | null>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
}

// Types
export interface Feedback {
  id: string;
  fullName: string;
  email: string;
  category: string;
  feedback: string;
  status: 'Pending' | 'Resolved';
  date: string;
}

export interface AdminProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: number;
  dateAdded: string;
  phone: string;

}

export interface RolesProps {
  name: string;
  count: number;
  permissions: number;
}

export interface PermissionsProps {
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  permissionSearchQuery: string;
  setPermissionSearchQuery: Dispatch<SetStateAction<string>>;
  currentPermissions: string[];
  setSelectedPermission: Dispatch<SetStateAction<string | null>>;
  setEditPermissionOpen: Dispatch<SetStateAction<boolean>>;
  setRemovePermissionOpen: Dispatch<SetStateAction<boolean>>;
  filteredPermissions: string[];
  indexOfFirstItem: number;
  indexOfLastItem: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPermissionPages: number;
  permissions: string[];
  setAddPermissionOpen: Dispatch<SetStateAction<boolean>>;
}
export interface RoleTabProps {
  currentRoles: RolesProps[];
  handleEditRole: (roleName: string) => void;
  setDeleteRoleOpen: Dispatch<SetStateAction<boolean>>;
  setRoleToDelete: Dispatch<SetStateAction<RolesProps | null>>;
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
  roles: RolesProps[];
  setCreateRoleOpen: Dispatch<SetStateAction<boolean>>;
  
}


export interface AdminTabProps {
  itemsPerPage: number;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
  adminSearchQuery: string;
  setAdminSearchQuery: Dispatch<SetStateAction<string>>;
  currentAdmins: AdminProps[];
  setAdminToDelete: Dispatch<SetStateAction<AdminProps | null>>;
  setDeleteAdminOpen: Dispatch<SetStateAction<boolean>>;
  indexOfFirstItem: number;
  filteredAdmins: AdminProps[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  indexOfLastItem: number;
  totalAdminPages: number;
  setCreateAdminOpen: Dispatch<SetStateAction<boolean>>;
  admins: AdminProps[];
  roleTypeFilter: string | null;
  setRoleTypeFilter: Dispatch<SetStateAction<string | null>>;
  setPermissionsFilter: Dispatch<SetStateAction<number | null>>;
  permissionsFilter: number | null;
  handleClearFilter: () => void;
  handleApplyFilter: () => void;
  formatDate: (date?: Date) => string;
  handleOpenCalendar: (type: 'from' | 'to') => void;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  calendarOpen: boolean;
  setCalendarOpen: Dispatch<SetStateAction<boolean>>;
  handleSelectDate: (date: Date) => void;
}

export type AdminCard = {
  isMobile: boolean;
  setAdminToDelete: Dispatch<SetStateAction<AdminProps | null>>;
  setDeleteAdminOpen: Dispatch<SetStateAction<boolean>>;
  admin: AdminProps;
};

