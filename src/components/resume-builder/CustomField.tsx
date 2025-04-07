'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Trash } from 'lucide-react';
import { useState } from 'react';

export function AdditionalFields() {
  const [fields, setFields] = useState<
    { id: string; label: string; value: string }[]
  >([]);

  const addField = () => {
    const newField = {
      id: `field-${Date.now()}`,
      label: '',
      value: '',
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (
    id: string,
    key: 'label' | 'value',
    newValue: string
  ) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [key]: newValue } : field
      )
    );
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.id} className="flex gap-2">
          <div className="flex-1">
            <Input
              placeholder="Custom field"
              value={field.label}
              onChange={(e) => updateField(field.id, 'label', e.target.value)}
              className="mb-2"
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeField(field.id)}
            className="h-9 w-9 shrink-0 self-start cursor-pointer "
          >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Remove field</span>
          </Button>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border border-dashed border-blue-300 rounded-lg text-blue-500 py-3 cursor-pointer"
        onClick={addField}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add custom fields
      </Button>
    </div>
  );
}
