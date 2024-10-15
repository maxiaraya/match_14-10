import React from 'react';
import { Link } from 'react-router-dom';
import { Music, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Bienvenido a Matchart</h1>
        <p className="text-xl mb-12 text-center">Conectando artistas independientes con los mejores escenarios</p>
        
        <div className="flex justify-center space-x-8 mb-16">
          <Link to="/registro-artista" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300">
            Soy Artista
          </Link>
          <Link to="/registro-escenario" className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition duration-300">
            Tengo un Escenario
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-20 p-8 rounded-lg">
            <Music className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Para Artistas</h2>
            <p>Encuentra los mejores escenarios para mostrar tu talento. Conecta con lugares que se ajusten a tu estilo y agenda.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-8 rounded-lg">
            <MapPin className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Para Escenarios</h2>
            <p>Descubre artistas talentosos para tu venue. Llena tus fechas disponibles con actuaciones increíbles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;