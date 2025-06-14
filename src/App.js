import React, { useState } from 'react';
import UserSelectionScreen from './components/UserSelectionScreen';
import OwnerDashboard from './components/OwnerDashboard';
import DriverDashboard from './components/DriverDashboard';
import ClientDashboard from './components/ClientDashboard';
import './styles.css'; // Corregido para coincidir con el archivo importado en index.js

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <UserSelectionScreen setCurrentPage={setCurrentPage} />;
      case 'owner':
        return <OwnerDashboard setCurrentPage={setCurrentPage} />;
      case 'driver':
        return <DriverDashboard setCurrentPage={setCurrentPage} />;
      case 'client':
        return <ClientDashboard setCurrentPage={setCurrentPage} />;
      default:
        return <UserSelectionScreen setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;

// DONE