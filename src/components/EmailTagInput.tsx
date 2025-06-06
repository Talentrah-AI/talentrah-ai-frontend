import { useState, useRef } from "react";
import { X } from "lucide-react";

export default function EmailTagInput() {
  const [emails, setEmails] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const[emailTo, setEmailTo] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      if (validateEmail(input.trim())) {
        setEmails([...emails, input.trim()]);
        setInput("");
      }
    }
    if (e.key === "Backspace" && !input) {
      setEmails(emails.slice(0, -1));
    }
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const [showAll, setShowAll] = useState(false);
  const visibleEmails = showAll ? emails : emails.slice(0, 3);
  const remainingCount = emails.length - 3;

  return (
    <div className="border p-3 rounded-md w-full max-w-lg">
      <label className="text-sm text-gray-600 mb-1 block">
      {emails.length <= 1 ? " " : "Email:"}
      </label>
      <div className="flex flex-wrap items-center gap-2">
        {emails.slice(0, 3).map((email, index) => (
          <div
            key={index}
            className="bg-gray-200 text-sm px-2 py-1 rounded flex items-center"
          >
            {email}
            <button
              onClick={() => removeEmail(index)}
              className="ml-2 text-gray-500 hover:text-red-500"
            >
              <X size={14} />
            </button>
          </div>
        ))}

        {emails.length > 3 && (
          <span className="text-blue-600 text-sm px-2 py-1 rounded bg-blue-100">
            +{emails.length - 3} <button className="underline">View more</button>
          </span>
        )}

        <input
          ref={inputRef}
          className="flex-1 min-w-[150px] outline-none p-1"
          placeholder="Type and press Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
