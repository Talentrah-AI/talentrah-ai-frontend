import React, { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DeleteConfirmationDialog from '../modals/DeleteConfirmationDialog';
import SuccessModal from '../modals/SuccessModal';

const initialTiers = [
  {
    plan: 'Freemium',
    currency: 'NGN',
    monthly: '₦0',
    annual: '₦0',
    updated: 'Apr 10, 2025; 10:00 PM',
    features: 'Basic access, Basic access, Basic access',
    users: '1,203',
  },
  {
    plan: 'Essentials',
    currency: 'NGN',
    monthly: '₦2,000',
    annual: '₦100,000',
    updated: 'Apr 10, 2025; 10:00 PM',
    features: 'Basic access, Basic access, Basic access',
    users: '1,203',
  },
  {
    plan: 'Advanced',
    currency: 'NGN',
    monthly: '₦5,000',
    annual: '₦150,000',
    updated: 'Apr 10, 2025; 10:00 PM',
    features: 'Basic access, Basic access, Basic access',
    users: '1,203',
  },
  {
    plan: 'Professional',
    currency: 'NGN',
    monthly: '₦10,000',
    annual: '₦200,000',
    updated: 'Apr 10, 2025; 10:00 PM',
    features: 'Basic access, Basic access, Basic access',
    users: '1,203',
  },
];

export function ActivePlansSection() {
  const [country, setCountry] = useState('NGN');
  const [tiers, setTiers] = useState(initialTiers);
  const [modalOpen, setModalOpen] = useState(false);
  const [Id, setId] = useState<number>(17);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Placeholder for form state
  const [form, setForm] = useState({
    plan: '',
    currency: country,
    monthly: '',
    annual: '',
    updated: new Date().toLocaleString(),
    features: [''], // Initialize with one empty feature
    users: '0',
    country: 'Nigeria',
  });

  const countryFlags: Record<string, string> = {
    NGN: '/images/nigeria.png',
    GH: '/images/ghana.png',
    USA: '/images/usa.png',
    KA: '/images/kenya.png',
  };

  const handleAddFeature = () => {
    setForm((prev) => ({
      ...prev,
      features: [...prev.features, ''],
    }));
  };

  const handleRemoveFeature = (index: number) => {
    if (form.features.length > 1) {
      setForm((prev) => ({
        ...prev,
        features: prev.features.filter((_, i) => i !== index),
      }));
    }
  };

  const handleFeatureChange = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.map((feature, i) =>
        i === index ? value : feature
      ),
    }));
  };

  const handleAddTier = () => {
    // Validate that at least 3 features are filled
    const validFeatures = form.features.filter((f) => f.trim() !== '');
    if (validFeatures.length < 3) {
      alert('Please add at least 3 features');
      return;
    }

    setTiers([...tiers, { ...form, features: validFeatures.join(', ') }]);
    setModalOpen(false);
    setForm({
      plan: '',
      currency: country,
      monthly: '',
      annual: '',
      updated: new Date().toLocaleString(),
      features: [''],
      users: '0',
      country: 'Nigeria',
    });
  };

  const handleDelete = (Id: number) => {
    setTiers(tiers.filter((_, i) => i !== Id));
    setOpenDeleteDialog(false);
    setSuccessModalOpen(true);
  };

  return (
    <section className="my-8 px-4 py-8 text-[12px] w-[1135px]">
      <h2 className="font-bold text-[16px] my-8 ">YOUR ACTIVE PLANS</h2>
      <div className="flex justify-between items-center mb-4">
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="w-[160px] h-[48px] rounded-[12px] border-2 border-white shadow bg-white flex items-center gap-2">
            <div>
              {country && (
                <Image
                  src={countryFlags[country]}
                  alt={country}
                  width={34}
                  height={17}
                />
              )}
            </div>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="rounded-[18px] p-[8px] ">
            <SelectItem value="NGN"> Nigeria</SelectItem>
            <SelectItem value="GH"> Ghana</SelectItem>
            <SelectItem value="USA"> USA</SelectItem>
            <SelectItem value="KA"> Kenya</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-[#0967D2] text-white rounded-[12px] px-6 py-3 flex items-center gap-2 text-base font-semibold shadow"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="w-5 h-5 mr-2" /> Add new tier
        </Button>
      </div>
      <div className="bg-white rounded-[12px] border-none p-6 text-[12px]">
        <table className="min-w-full">
          <thead>
            <tr className="text-muted-foreground text-[12px] font-bold">
              <th className="text-left py-2 px-4">PLAN TIERS</th>
              <th className="text-left py-2 px-4">CURRENCY</th>
              <th className="text-left py-2 px-4">MONTHLY PRICE</th>
              <th className="text-left py-2 px-4">ANNUAL PRICE</th>
              <th className="text-left py-2 px-4">LAST UPDATED</th>
              <th className="text-left py-2 px-4">FEATURES</th>
              <th className="text-left py-2 px-4">ACTIVE USERS</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, idx) => (
              <tr key={idx} className="border-none last:border-0">
                <td className="py-3 px-4 font-medium">{tier.plan}</td>
                <td className="py-3 px-4">{tier.currency}</td>
                <td className="py-3 px-4">{tier.monthly}</td>
                <td className="py-3 px-4">{tier.annual}</td>
                <td className="py-3 px-4">{tier.updated}</td>
                <td className="py-3 px-4">
                  {tier.features}{' '}
                  <span className="text-blue-600 cursor-pointer">see more</span>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-green-50 text-green-600 rounded-[8px] px-4 py-1 font-semibold shadow text-[12px] inline-block border border-green-100">
                    {tier.users}
                  </span>
                </td>
                <td className="py-3 px-4 relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 rounded-[8px] hover:bg-gray-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="rounded-[18px] p-[8px] "
                    >
                      <DropdownMenuItem onClick={() => setModalOpen(true)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => (setOpenDeleteDialog(true), setId(idx))}
                        className="text-red-600"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
            <DeleteConfirmationDialog
              open={openDeleteDialog}
              onClose={() => setOpenDeleteDialog(false)}
              onConfirm={() => handleDelete(Id)}
              itemCount={tiers.length}
            />

            <SuccessModal
              open={successModalOpen}
              onClose={() => setSuccessModalOpen(false)}
            />
          </tbody>
        </table>
      </div>
      {/* Modal for Add/Edit Tier */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-[16px] p-8 w-full max-w-[634px] max-h-[744px] shadow-lg relative flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[16px] font-bold">Add a new tier</h2>
              <button
                className="text-gray-500 text-[24px] hover:text-gray-600"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTier();
              }}
              className="space-y-6 overflow-y-auto pr-2 flex-1"
            >
              {/* Tier Name */}
              <div>
                <label className="block text-sm font-bold text-black-700 mb-1">
                  Tier name
                </label>
                <input
                  className="w-full h-[50px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Enter tier name (e.g., Starter, Pro, Plus)"
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                  required
                />
              </div>

              {/* Pricing Section */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-black-700 mb-1">
                    Monthly price
                  </label>
                  <div className="relative items-center">
                    <span className="absolute left-3 top-3 text-gray-500">
                      ₦
                    </span>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-3.5 pl-8 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      placeholder="0"
                      value={form.monthly}
                      onChange={(e) =>
                        setForm({ ...form, monthly: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black-700 mb-1">
                    Annual price (Optional)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">
                      ₦
                    </span>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-3.5 pl-8 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      placeholder="0"
                      value={form.annual}
                      onChange={(e) =>
                        setForm({ ...form, annual: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-bold text-black-700 mb-1">
                  Features
                </label>
                {form.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                      placeholder={`Feature ${index + 1}`}
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      required
                    />
                    {form.features.length > 1 && (
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <div className="flex justify-between">
                  <p className="text-xs text-gray-500">
                    You must add at least 3 features
                  </p>
                  <button
                    type="button"
                    className="flex items-center text-blue-600 text-sm"
                    onClick={handleAddFeature}
                  >
                    <span className="text-lg">+</span> Add more features
                  </button>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex w-full justify-between gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="px-6 py-2 border-gray-300 w-[277px]"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white w-[277px]"
                >
                  Add tier
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
