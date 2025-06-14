import React, { useState } from 'react';
import CommonCard from './common/Card';
import CommonButton from './common/Button';

const OwnerDashboard = ({ setCurrentPage }) => {
  const [activeVehicles] = useState([
    { id: 1, name: 'Remis 001', status: 'Activo', location: 'Av. Siempre Viva 123' },
    { id: 2, name: 'Camión 002', status: 'Inactivo', location: 'Taller' },
    { id: 3, name: 'Taxi 003', status: 'Activo', location: 'Centro' },
  ]);

  const [income] = useState({ daily: '$1,200', weekly: '$7,500' });
  const [notifications] = useState(['Vencimiento seguro Remis 001', 'Mantenimiento Camión 002']);
  const [activeSection, setActiveSection] = useState('Flota');

  const renderSection = () => {
    switch (activeSection) {
      case 'Flota':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Vehículos</h3>
            {activeVehicles.map(vehicle => (
              <CommonCard key={vehicle.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-white text-lg">{vehicle.name}</p>
                  <p className="text-gray-400 text-sm">{vehicle.status} - {vehicle.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  vehicle.status === 'Activo' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {vehicle.status}
                </span>
              </CommonCard>
            ))}
            <CommonButton className="bg-red-500 text-white">
              Agregar Vehículo
            </CommonButton>
          </div>
        );
      case 'Finanzas':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Resumen de Ingresos</h3>
            <CommonCard className="p-4">
              <p className="text-gray-400">Diario:</p>
              <p className="text-white text-2xl font-bold">{income.daily}</p>
            </CommonCard>
            <CommonCard className="p-4">
              <p className="text-gray-400">Semanal:</p>
              <p className="text-white text-2xl font-bold">{income.weekly}</p>
            </CommonCard>
          </div>
        );
      case 'Alertas':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Notificaciones</h3>
            {notifications.map((notif, index) => (
              <CommonCard key={index} className="p-4">
                <p className="text-white">{notif}</p>
              </CommonCard>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 p-6 space-y-4 flex flex-col">
        <h2 className="text-2xl font-bold text-red-500 mb-6">Dueño</h2>
        {['Flota', 'Choferes', 'Finanzas', 'Alertas'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-200 ${
              activeSection === section ? 'bg-red-500 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            {section}
          </button>
        ))}
        <div className="mt-auto">
          <CommonButton onClick={() => setCurrentPage('home')} className="bg-gray-700 text-white hover:bg-gray-600">
            Volver
          </CommonButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard del Dueño</h1>
        {renderSection()}
      </div>
    </div>
  );
};

export default OwnerDashboard;