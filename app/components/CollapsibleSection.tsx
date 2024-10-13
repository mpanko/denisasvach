import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type CollapsibleSectionProps = {
  title: string;
  items: Array<{
    year: number;
    title: string;
    type?: string;
    description?: string;
    location?: string;
  }>;
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="relative overflow-hidden">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="pl-4 border-l-2 border-gray-200 transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600">
                {item.year}
                {item.type && ` | ${item.type}`}
                {item.description && ` | ${item.description}`}
                {item.location && ` | ${item.location}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollapsibleSection;