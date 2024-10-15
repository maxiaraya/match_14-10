import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegistroArtista from './pages/RegistroArtista';
import RegistroEscenario from './pages/RegistroEscenario';
import Login from './pages/Login';
import GestionEscenarios from './pages/GestionEscenarios';
import BusquedaArtistas from './pages/BusquedaArtistas';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro-artista" element={<RegistroArtista />} />
            <Route path="/registro-escenario" element={<RegistroEscenario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gestion-escenarios" element={<GestionEscenarios />} />
            <Route path="/busqueda-artistas" element={<BusquedaArtistas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;