import React, { useState } from "react";

export function CountryFilter() {
  const [selected, setSelected] = useState("NGN");
  return (
    <div className="flex gap-2 mb-4">
      <button
        className={`px-4 py-1 rounded border ${
          selected === "NGN" ? "bg-primary text-white" : "bg-white"
        }`}
        onClick={() => setSelected("NGN")}
      >
        NGN
      </button>
      <button
        className={`px-4 py-1 rounded border ${
          selected === "GH" ? "bg-primary text-white" : "bg-white"
        }`}
        onClick={() => setSelected("GH")}
      >
        GH
      </button>
    </div>
  );
}
