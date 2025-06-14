import React from 'react';
import CommonButton from './common/Button';

const UserSelectionScreen = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-red-500 mb-4 text-center">TransportLink</h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-md">
        Gestioná, conectá y mové todo desde una sola app.
      </p>

      <div className="w-full max-w-sm space-y-6">
        <CommonButton onClick={() => setCurrentPage('owner')} className="bg-gray-800 text-white border border-gray-700 hover:border-red-500">
          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>Soy Dueño</span>
          </div>
        </CommonButton>

        <CommonButton onClick={() => setCurrentPage('driver')} className="bg-gray-800 text-white border border-gray-700 hover:border-red-500">
          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17v1a2 2 0 002 2h14a2 2 0 002-2v-1m-6-10L9 7m4-2l-4 2m6 4H9m6 4H9"></path>
            </svg>
            <span>Soy Chofer</span>
          </div>
        </CommonButton>

        <CommonButton onClick={() => setCurrentPage('client')} className="bg-gray-800 text-white border border-gray-700 hover:border-red-500">
          <div className="flex items-center justify-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Soy Cliente</span>
          </div>
        </CommonButton>
      </div>
    </div>
  );
};

export default UserSelectionScreen;