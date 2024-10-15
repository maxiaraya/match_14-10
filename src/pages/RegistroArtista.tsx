import React, { useState } from 'react';

const RegistroArtista: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreArtistico: '',
    email: '',
    password: '',
    genero: '',
    descripcion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se implementará la lógica para enviar los datos al backend
    console.log('Datos del artista:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Registro de Artista</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="nombreArtistico" className="block mb-2">Nombre Artístico</label>
          <input
            type="text"
            id="nombreArtistico"
            name="nombreArtistico"
            value={formData.nombreArtistico}
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
          <label htmlFor="genero" className="block mb-2">Género Artístico</label>
          <select
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona un género</option>
            <option value="comedia">Comedia</option>
            <option value="musica">Música</option>
            <option value="magia">Magia</option>
            <option value="poesia">Poesía</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block mb-2">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroArtista;