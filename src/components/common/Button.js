import React from 'react';

const CommonButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default CommonButton;