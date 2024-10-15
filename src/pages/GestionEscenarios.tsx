import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import api from '../services/api';

interface Escenario {
  id: string;
  nombreLugar: string;
  tipoEscenario: string;
  ubicacion: string;
  capacidad: number;
}

const GestionEscenarios: React.FC = () => {
  const [escenarios, setEscenarios] = useState<Escenario[]>([]);

  useEffect(() => {
    const fetchEscenarios = async () => {
      try {
        const response = await api.get('/escenarios');
        setEscenarios(response.data);
      } catch (error) {
        console.error('Error al obtener escenarios:', error);
      }
    };

    fetchEscenarios();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gestión de Escenarios</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {escenarios.map((escenario) => (
          <div key={escenario.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{escenario.nombreLugar}</h2>
            <p className="text-gray-600 mb-2">{escenario.tipoEscenario}</p>
            <p className="text-gray-600 mb-2">{escenario.ubicacion}</p>
            <p className="text-gray-600 mb-4">Capacidad: {escenario.capacidad}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 flex items-center">
              <Calendar className="mr-2" size={18} />
              Gestionar Disponibilidad
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionEscenarios;