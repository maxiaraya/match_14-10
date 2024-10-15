import React, { useState } from 'react';

const RegistroEscenario: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreLugar: '',
    email: '',
    password: '',
    tipoEscenario: '',
    ubicacion: '',
    direccion: '',
    capacidad: '',
    sonidoDisponible: '',
    ventaComidas: false,
    porcentajeArtista: '',
    seguroSala: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se implementará la lógica para enviar los datos al backend
    console.log('Datos del escenario:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Registro de Escenario</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nombreLugar" className="block mb-2">Nombre del Lugar</label>
          <input
            type="text"
            id="nombreLugar"
            name="nombreLugar"
            value={formData.nombreLugar}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tipoEscenario" className="block mb-2">Tipo de Escenario</label>
          <select
            id="tipoEscenario"
            name="tipoEscenario"
            value={formData.tipoEscenario}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona un tipo</option>
            <option value="bar">Bar</option>
            <option value="boliche">Boliche</option>
            <option value="centroCultural">Centro Cultural</option>
            <option value="teatro">Teatro</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ubicacion" className="block mb-2">Ubicación</label>
          <select
            id="ubicacion"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona una ubicación</option>
            <option value="laPlata">La Plata</option>
            <option value="berisso">Berisso</option>
            <option value="ensenada">Ensenada</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block mb-2">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="capacidad" className="block mb-2">Capacidad de Sala</label>
          <input
            type="number"
            id="capacidad"
            name="capacidad"
            value={formData.capacidad}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sonidoDisponible" className="block mb-2">Sonido Disponible</label>
          <select
            id="sonidoDisponible"
            name="sonidoDisponible"
            value={formData.sonidoDisponible}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona una opción</option>
            <option value="propio">Propio</option>
            <option value="artista">Artista</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="ventaComidas"
              checked={formData.ventaComidas}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Venta de Comidas/Bebidas</span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="porcentajeArtista" className="block mb-2">Porcentaje ofrecido al Artista</label>
          <input
            type="number"
            id="porcentajeArtista"
            name="porcentajeArtista"
            value={formData.porcentajeArtista}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="seguroSala"
              checked={formData.seguroSala}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Seguro de Sala</span>
          </label>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
          Registrar Escenario
        </button>
      </form>
    </div>
  );
};

export default RegistroEscenario;