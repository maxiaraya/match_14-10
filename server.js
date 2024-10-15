const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/artistas', require('./routes/artistas'));
app.use('/api/escenarios', require('./routes/escenarios'));

// Socket.io
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  socket.on('join', (room) => {
    socket.join(room);
  });

  socket.on('chatMessage', (data) => {
    io.to(data.room).emit('message', data);
  });

  socket.on('notification', (data) => {
    io.to(data.userId).emit('newNotification', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));