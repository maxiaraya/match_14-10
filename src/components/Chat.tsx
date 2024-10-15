import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import useAuthStore from '../store/authStore';

const socket = io('http://localhost:5000');

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

const Chat: React.FC<{ recipientId: string }> = ({ recipientId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    socket.emit('join', `chat_${user.id}_${recipientId}`);

    socket.on('message', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [user.id, recipientId]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        sender: user.id,
        content: newMessage,
        timestamp: new Date(),
      };
      socket.emit('chatMessage', { room: `chat_${user.id}_${recipientId}`, message });
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === user.id ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === user.id ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Escribe un mensaje..."
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;