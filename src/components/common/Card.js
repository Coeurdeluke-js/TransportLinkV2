import React from 'react';

const CommonCard = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-800 rounded-2xl shadow-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default CommonCard;