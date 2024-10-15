import React, { useState } from 'react';
import { Search } from 'lucide-react';
import api from '../services/api';

interface Artista {
  id: string;
  nombreArtistico: string;
  genero: string;
  descripcion: string;
}

const BusquedaArtistas: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [artistas, setArtistas] = useState<Artista[]>([]);

  const handleBusqueda = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.get(`/artistas/buscar?q=${busqueda}`);
      setArtistas(response.data);
    } catch (error) {
      console.error('Error al buscar artistas:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Búsqueda de Artistas</h1>
      <form onSubmit={handleBusqueda} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar artistas por nombre o género"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artistas.map((artista) => (
          <div key={artista.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{artista.nombreArtistico}</h2>
            <p className="text-gray-600 mb-2">{artista.genero}</p>
            <p className="text-gray-600">{artista.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusquedaArtistas;