"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  language: string;
  country: string;
  timezone: string;
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  profileData,
  onSave,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState(profileData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold">
              Edit profile
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* First Name & Last Name Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleSelectChange("role", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Super Admin">Super Admin</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Moderator">Moderator</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <Select
                value={formData.language}
                onValueChange={(value) => handleSelectChange("language", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country & Timezone Row */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    handleSelectChange("country", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="United Kingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <Select
                  value={formData.timezone}
                  onValueChange={(value) =>
                    handleSelectChange("timezone", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GMT+1 (Lagos)">GMT+1 (Lagos)</SelectItem>
                    <SelectItem value="GMT-5 (EST)">GMT-5 (EST)</SelectItem>
                    <SelectItem value="GMT-8 (PST)">GMT-8 (PST)</SelectItem>
                    <SelectItem value="GMT+0 (London)">
                      GMT+0 (London)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 bg-blue-600 hover:bg-blue-700"
            >
              Save edit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
