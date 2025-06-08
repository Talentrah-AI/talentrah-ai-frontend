'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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

interface AddMentorModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: string) => void;
}

export function AddMentorModal({ open, onClose }: AddMentorModalProps) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const allFieldsFilled = Object.values(formData).every(
    (field) => field.trim() !== ''
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="default">+ Add a mentor</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className="text-lg font-semibold">Add a mentor</h2>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your digit"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role type</Label>
            <Select onValueChange={handleRoleChange} value={formData.role}>
              <SelectTrigger>
                <SelectValue placeholder="Choose role type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mentor">Mentor</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>

            {allFieldsFilled && (
              <p className="text-sm text-muted-foreground pt-2">
                Twenty three (23) permissions will be given to{' '}
                {formData.firstName} {formData.lastName} as a mentor
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">+ Add a mentor</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
