import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-200">{title}</span>
        <span>
          {isOpen ? (
            <FaChevronDown className="text-gray-400" />
          ) : (
            <FaChevronRight className="text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-2 pb-4 text-gray-400 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion; 