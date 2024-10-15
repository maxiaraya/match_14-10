import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music size={24} />
          <span className="text-xl font-bold">Matchart</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/artistas" className="hover:text-purple-200">Artistas</Link></li>
            <li><Link to="/escenarios" className="hover:text-purple-200">Escenarios</Link></li>
            <li><Link to="/login" className="hover:text-purple-200">Iniciar Sesión</Link></li>
            <li><Link to="/registro-artista" className="hover:text-purple-200">Registro</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;