import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import useAuthStore from '../store/authStore';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await login(data.email, data.password);
      setAuth(response.user, response.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'El correo electrónico es requerido' })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'La contraseña es requerida' })}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;