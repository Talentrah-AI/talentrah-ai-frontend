'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface EditRoleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  roleName: string;
  onSubmit: (data: any) => void;
}

export function EditRoleDialog({
  open,
  onOpenChange,
  roleName,
  onSubmit,
}: EditRoleDialogProps) {
  const [name, setName] = useState(roleName);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  useEffect(() => {
    setName(roleName);
    // In a real app, you would fetch the current permissions for this role
    // For demo purposes, we'll set some default selected permissions
    if (roleName === 'Mentor') {
      setSelectedPermissions([
        'View candidate profiles',
        'Activate/deactivate candidate accounts',
        'Manage paid subscriptions',
        'View all job applications',
      ]);
    } else {
      setSelectedPermissions([]);
    }
  }, [roleName, open]);

  const permissions = [
    'View candidate profiles',
    'Edit candidate details',
    'Activate/deactivate candidate accounts',
    'Manage paid subscriptions',
    'Delete candidate accounts',
    'View all job applications',
    'View candidate profiles',
    'View generated resumes',
    'Edit/update resumes',
    'View mentorship requests',
    'Edit mentorship profiles',
    'Create new admin roles',
    'View activity logs',
    'View mentors activity logs',
  ];

  const handlePermissionChange = (permission: string) => {
    setSelectedPermissions((prev) => {
      if (prev.includes(permission)) {
        return prev.filter((p) => p !== permission);
      } else {
        return [...prev, permission];
      }
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedPermissions(permissions);
    } else {
      setSelectedPermissions([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      roleName: name,
      permissions: selectedPermissions,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit role</DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="roleName">Role name</Label>
              <Input
                id="roleName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <Label>Permissions</Label>
                <div className="relative w-48">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </div>

              <div className="max-h-60 overflow-y-auto rounded-md border p-2">
                <div className="mb-2 flex items-center space-x-2">
                  <Checkbox
                    id="selectAll"
                    checked={selectedPermissions.length === permissions.length}
                    onCheckedChange={(checked) =>
                      handleSelectAll(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="selectAll"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select all
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {permissions.map((permission) => (
                    <div
                      key={permission}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={permission}
                        checked={selectedPermissions.includes(permission)}
                        onCheckedChange={() =>
                          handlePermissionChange(permission)
                        }
                      />
                      <label
                        htmlFor={permission}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {permission}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
