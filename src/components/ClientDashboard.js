import React, { useState } from 'react';
import CommonCard from './common/Card';
import CommonButton from './common/Button';
import CommonInput from './common/Input';

const ClientDashboard = ({ setCurrentPage }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [serviceType, setServiceType] = useState('remis');
  const [showVehicleTracking, setShowVehicleTracking] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRequestService = () => {
    if (origin && destination) {
      setShowVehicleTracking(true);
    } else {
      alert('Por favor, ingresa origen y destino.');
    }
  };

  const handleRateService = (stars) => {
    setRating(stars);
    alert(`Has calificado con ${stars} estrellas. ¡Gracias!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10 flex flex-col">
      <h1 className="text-3xl font-bold text-red-500 mb-8">Dashboard del Cliente</h1>

      {!showVehicleTracking ? (
        <CommonCard className="mb-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">Solicitar Servicio</h3>
          <CommonInput
            placeholder="Origen"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <CommonInput
            placeholder="Destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
          >
            <option value="remis">Remis</option>
            <option value="carga">Carga</option>
            <option value="mudanza">Mudanza</option>
            <option value="taxi">Taxi</option>
          </select>
          <CommonButton onClick={handleRequestService} className="bg-red-500 text-white">
            Solicitar
          </CommonButton>
        </CommonCard>
      ) : (
        <CommonCard className="mb-6 space-y-4">
          <h3 className="text-xl font-semibold text-white">Vehículo en Camino</h3>
          <p className="text-gray-300">Tu {serviceType} está en camino desde {origin} hacia {destination}.</p>
          <div className="w-full h-48 bg-gray-800 rounded-lg mt-4 flex items-center justify-center text-gray-500">
            {/* Placeholder para el mapa de seguimiento */}
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3v-7m6 7l4.447 2.223a1 1 0 001.447-.894V6.582a1 1 0 00-.447-.894L15 4m0 3V4m0 3l-6 3m6-3v7"></path>
            </svg>
          </div>
          <p className="text-gray-400 text-sm">Llegada estimada: 5 minutos</p>
          <CommonButton onClick={() => setShowVehicleTracking(false)} className="bg-gray-700 text-white hover:bg-gray-600">
            Cancelar Servicio
          </CommonButton>
        </CommonCard>
      )}

      <CommonCard className="mb-6 space-y-4">
        <h3 className="text-xl font-semibold text-white">Calificar Servicio</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRateService(star)}
              className={`text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-500'} focus:outline-none`}
            >
              ★
            </button>
          ))}
        </div>
        <CommonButton className="bg-gray-700 text-white hover:bg-gray-600">
          Repetir Último Viaje
        </CommonButton>
      </CommonCard>

      <CommonButton onClick={() => setCurrentPage('home')} className="bg-gray-700 text-white hover:bg-gray-600 mt-auto">
        Volver
      </CommonButton>
    </div>
  );
};

export default ClientDashboard;