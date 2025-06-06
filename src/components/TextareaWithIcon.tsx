import React from 'react';
import { 
  RotateCcw, 
  RotateCw, 
  Type, 
  Bold, 
  Italic,
  Underline,
  Strikethrough,
  Code
} from 'lucide-react';

interface TextareaWithIconProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
  label?: string;
}

const TextareaWithIcon: React.FC<TextareaWithIconProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-t-lg">
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <RotateCcw size={16} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <RotateCw size={16} className="text-gray-600" />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Type size={16} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Bold size={16} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Italic size={16} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Underline size={16} className="text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Strikethrough size={16} className="text-gray-600" />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <button className="p-1.5 hover:bg-gray-200 rounded-md transition-colors">
            <Code size={16} className="text-gray-600" />
          </button>
        </div>
        <textarea
          className={`w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-b-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextareaWithIcon;