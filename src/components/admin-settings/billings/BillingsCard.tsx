import React from "react";

export function BillingsCard() {
  return (
    <div className="border rounded p-4 mb-2 shadow-sm">
      <div className="flex justify-between">
        <div>
          <div className="font-semibold">Apr 10, 2025, 10:00 PM</div>
          <div className="text-sm text-muted-foreground">Jane Doe</div>
        </div>
        <div className="text-right">
          <div className="font-semibold">₦10,000</div>
          <div className="text-green-600 text-sm">Successful</div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="text-sm">Professional (Monthly)</div>
        <button className="bg-blue-100 text-blue-700 rounded px-2 py-1 text-xs">
          Download Invoice
        </button>
      </div>
    </div>
  );
}
