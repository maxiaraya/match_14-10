import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import useAuthStore from '../store/authStore';

const socket = io('http://localhost:5000');

interface Notification {
  id: string;
  message: string;
  timestamp: Date;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    socket.emit('join', user.id);

    socket.on('newNotification', (notification: Notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    return () => {
      socket.off('newNotification');
    };
  }, [user.id]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
      {notifications.length === 0 ? (
        <p>No tienes notificaciones nuevas.</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="mb-2 p-2 bg-gray-100 rounded-md">
              {notification.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;