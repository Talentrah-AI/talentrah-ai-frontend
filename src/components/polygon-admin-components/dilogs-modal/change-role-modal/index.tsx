'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';

interface ChangeRoleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  admin: {
    firstName: string;
    lastName: string;
    currentRole: string;
  };
  onSubmit: (data: { roleType: string; confirmed: boolean }) => void;
}

export function ChangeRoleDialog({
  open,
  onOpenChange,
  admin,
  onSubmit,
}: ChangeRoleDialogProps) {
  const [roleType, setRoleType] = useState(admin.currentRole || '');
  const [confirmed, setConfirmed] = useState(false);

  // Reset the form when the dialog opens
  useEffect(() => {
    if (open) {
      setRoleType(admin.currentRole || '');
      setConfirmed(false);
    }
  }, [open, admin.currentRole]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      roleType,
      confirmed,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change user role</DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <p className="text-sm text-gray-600">
              Select a new role for this user from the options below. Their
              permissions will update immediately after saving
            </p>

            {roleType && (
              <Alert className="bg-blue-50 text-blue-800 border-blue-200">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Twenty three (23) permissions will be given to{' '}
                  {admin.firstName} {admin.lastName} as a{' '}
                  {roleType.toLowerCase()}
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" value={admin.firstName} disabled />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" value={admin.lastName} disabled />
              </div>
            </div>

            <div>
              <Label htmlFor="roleType">Role type</Label>
              <Select value={roleType} onValueChange={setRoleType} required>
                <SelectTrigger id="roleType">
                  <SelectValue placeholder="Choose role type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Supervisor">Supervisor</SelectItem>
                  <SelectItem value="Support Agent">Support Agent</SelectItem>
                  <SelectItem value="Finance Manager">
                    Finance Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="confirmed"
                checked={confirmed}
                onCheckedChange={(checked) => setConfirmed(!!checked)}
              />
              <label
                htmlFor="confirmed"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I understand this change takes effect immediately
              </label>
            </div>
          </div>

          <DialogFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!roleType || !confirmed}>
              Update Role
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
