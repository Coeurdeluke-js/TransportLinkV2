import React, { useState } from 'react';
import CommonCard from './common/Card';
import CommonButton from './common/Button';
import CommonSwitch from './common/Switch';

const DriverDashboard = ({ setCurrentPage }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [assignedTrips] = useState([
    { id: 1, origin: 'Calle Falsa 123', destination: 'Av. Siempre Viva 456', time: '10:30 AM' },
    { id: 2, origin: 'Plaza Central', destination: 'Estación de Tren', time: '11:45 AM' },
  ]);
  const [currentRoute] = useState('Ruta actual: Calle Falsa 123 -> Av. Siempre Viva 456 (ETA: 15 min)');

  const handleToggleOnline = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col">
      <h1 className="text-3xl font-bold text-red-500 mb-8">Dashboard del Chofer</h1>

      <CommonCard className="mb-6">
        <CommonSwitch
          isOn={isOnline}
          handleToggle={handleToggleOnline}
          label={`Estado: ${isOnline ? 'Activo' : 'Inactivo'}`}
        />
      </CommonCard>

      <CommonCard className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Viajes Asignados Hoy</h3>
        {assignedTrips.length > 0 ? (
          <div className="space-y-3">
            {assignedTrips.map(trip => (
              <div key={trip.id} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-white font-medium">Origen: {trip.origin}</p>
                <p className="text-gray-300 text-sm">Destino: {trip.destination}</p>
                <p className="text-gray-300 text-sm">Hora: {trip.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No hay viajes asignados por ahora.</p>
        )}
      </CommonCard>

      <CommonCard className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Ruta Actual</h3>
        <p className="text-gray-300">{currentRoute}</p>
        <div className="w-full h-48 bg-gray-800 rounded-lg mt-4 flex items-center justify-center text-gray-500">
          {/* Placeholder para el mapa */}
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a4 4 0 115.656-5.656l1.414 1.414M4 13.343S4 13.343 4 13.343a4 4 0 000 5.656l3.414-3.414m-4.243-4.243a4 4 0 015.656 0L17.657 6.343a4 4 0 010 5.656l-3.414 3.414m-4.243-4.243a4 4 0 000 5.656l3.414-3.414"></path>
          </svg>
        </div>
      </CommonCard>

      <div className="flex flex-col space-y-4 mt-auto">
        <CommonButton className="bg-red-500 text-white">
          Finalizar Viaje
        </CommonButton>
        <CommonButton className="bg-gray-700 text-white hover:bg-gray-600">
          Reportar Incidente
        </CommonButton>
        <CommonButton onClick={() => setCurrentPage('home')} className="bg-gray-700 text-white hover:bg-gray-600">
          Volver
        </CommonButton>
      </div>
    </div>
  );
};

export default DriverDashboard;