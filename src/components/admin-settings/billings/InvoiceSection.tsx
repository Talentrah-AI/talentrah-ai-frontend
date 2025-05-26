import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function InvoiceSection() {
  const [email, setEmail] = useState('billing@talentrah.com');
  const [company, setCompany] = useState('Talentrah');
  const [modalOpen, setModalOpen] = useState(false);
  const [editField, setEditField] = useState<'email' | 'company' | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleEdit = (field: 'email' | 'company') => {
    setEditField(field);
    setInputValue(field === 'email' ? email : company);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editField === 'email') setEmail(inputValue);
    if (editField === 'company') setCompany(inputValue);
    setModalOpen(false);
    setEditField(null);
  };

  return (
    <section className="my-8 p-6 rounded-xl bg-white text-black shadow-sm border border-none max-w-xl">
      <h3 className="text-[15px] font-bold uppercase tracking-wide text-muted-foreground mb-1">
        INVOICE SETTINGS
      </h3>
      <p className="text-[13px] text-muted-foreground mb-6">
        Customize how invoices are sent to users after payments. Automatically
        generate PDFs and send via email.
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">
              Auto-generate invoice after payment
            </div>
          </div>
          <Switch
            defaultChecked
            className="data-[state=checked]:bg-[#07A2A8]"
          />
        </div>
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <div className="text-lg font-semibold">Include tax details</div>
          </div>
          <Switch
            defaultChecked
            className="data-[state=checked]:bg-[#07A2A8] "
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Label className="block text-sm mb-1 text-muted-foreground">
              Default sender email
            </Label>
            <Input
              type="email"
              value={email}
              readOnly
              className="bg-white border rounded-[8px] text-grey"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-6 min-w-[56px]"
            onClick={() => handleEdit('email')}
          >
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <Label className="block text-sm mb-1 text-muted-foreground">
              Company name
            </Label>
            <Input
              type="text"
              value={company}
              readOnly
              className="bg-white border rounded-[8px] text-grey"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-6 min-w-[56px]"
            onClick={() => handleEdit('company')}
          >
            Edit
          </Button>
        </div>
      </div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Edit {editField === 'email' ? 'Email' : 'Company Name'}
            </DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <Label className="mb-1 block">
              {editField === 'email' ? 'Email' : 'Company Name'}
            </Label>
            <Input
              type={editField === 'email' ? 'email' : 'text'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <Button onClick={handleSave} type="button">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
