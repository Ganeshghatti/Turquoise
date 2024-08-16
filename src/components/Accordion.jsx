import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between w-full p-4 text-lg font-medium text-left bg-white focus:outline-none"
        onClick={onClick}
      >
        {title}
        <span>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
