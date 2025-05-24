'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
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
import { DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';

interface CreateMentorDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: string) => void;
  onOpenChange: (open: boolean) => void;
}

export function CreateMentorDialog({
  open,
  onClose,
  onOpenChange,
}: CreateMentorDialogProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[884px] h-[473px] py-[25px] px-[28px] ">
        <DialogTitle className="text-lg font-semibold">
          Add a mentor
        </DialogTitle>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 w-[396.5px]">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                className="rounded-[12px] shadow-none border-[1.5px] border-grey text-[12px] h-[50px]"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2 w-[396.5px]">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                className="rounded-[12px] border-[1.5px] shadow-none !important border-grey text-[12px] h-[50px]"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="flex gap-[35px] w-full">
            <div className="space-y-2 w-[396.5px] ">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2 w-[396.5px]">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px]"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your digit"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role type</Label>
            <Select onValueChange={handleRoleChange} value={formData.role}>
              <SelectTrigger className="rounded-[12px] border-[1.5px] shadow-none border-grey text-[12px] h-[50px] w-full">
                <SelectValue placeholder="Choose role type" />
              </SelectTrigger>
              <SelectContent className="rounded-[18px] border[0.5px] shadow p-[8px]">
                <SelectItem
                  value="mentor"
                  className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                >
                  Mentor
                </SelectItem>
                <SelectItem
                  value="admin"
                  className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                >
                  Admin
                </SelectItem>
                <SelectItem
                  value="both"
                  className="rounded-[12px] py-[15px] px-[20px] focus:bg-[#CEE1F6] hover:text-black hover:bg-[#CEE1F6] focus:text-black"
                >
                  Both
                </SelectItem>
              </SelectContent>
            </Select>

            {allFieldsFilled && (
              <p className="flex items-center text-[12px] text-[#0967D2] p-[5px] gap-[10px] rounded-[12px] border-[#9DC2ED] border-[2px] bg-[#E6F0FB]">
                <Image
                  src="/images/information-circle.png"
                  alt="information"
                  className="w-[20px] h-[20px] !important"
                  width={20}
                  height={20}
                />
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
