import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SearchableDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export function SearchableDropdown({ value, onChange, options, placeholder }: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          className="w-full h-[40px] px-3 border border-[#DDE1E6] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown className="h-4 w-4 text-[#717A84]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-[8px] shadow-lg border border-[#DDE1E6] max-h-60 overflow-auto">
          {filteredOptions.length === 0 ? (
            <div className="px-4 py-2 text-[14px] text-gray-500">No results found</div>
          ) : (
            filteredOptions.map((option) => (
              <div
                key={option}
                className="px-4 py-2 text-[14px] cursor-pointer hover:bg-[#F0F7FF] text-[#515D68]"
                onClick={() => {
                  onChange(option);
                  setSearchQuery('');
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
} 