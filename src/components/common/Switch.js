import React from 'react';

const CommonSwitch = ({ isOn, handleToggle, label }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-white text-lg font-medium">{label}</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
          isOn ? 'bg-red-500' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
            isOn ? 'translate-x-7' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default CommonSwitch;