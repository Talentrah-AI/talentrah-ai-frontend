import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'

interface ComboboxProps {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder?: string
}

export function Combobox({ value, onChange, options, placeholder }: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const comboboxRef = useRef<HTMLDivElement>(null)

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={comboboxRef}>
      <div className="relative w-full">
        <input
          type="text"
          className="w-full h-[40px] px-3 border border-[#DDE1E6] rounded-[8px] text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          value={query}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown className="h-4 w-4 text-[#717A84]" aria-hidden="true" />
        </button>
      </div>
      
      {isOpen && (
        <ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-[8px] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
          {filteredOptions.length === 0 && query !== '' ? (
            <li className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </li>
          ) : (
            filteredOptions.map((option) => (
              <li
                key={option}
                className={`relative cursor-pointer select-none py-2 pl-10 pr-4 hover:bg-[#0967D2] hover:text-white ${
                  value === option ? 'bg-[#F0F7FF]' : ''
                }`}
                onClick={() => {
                  onChange(option)
                  setQuery(option)
                  setIsOpen(false)
                }}
              >
                <span className={`block truncate ${value === option ? 'font-medium' : 'font-normal'}`}>
                  {option}
                </span>
                {value === option && (
                  <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                    value === option ? 'text-[#0967D2]' : ''
                  }`}>
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
} 