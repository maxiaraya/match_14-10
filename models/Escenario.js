const mongoose = require('mongoose');

const EscenarioSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  nombreLugar: {
    type: String,
    required: true
  },
  tipoEscenario: {
    type: String,
    required: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  capacidad: {
    type: Number,
    required: true
  },
  sonidoDisponible: {
    type: String,
    enum: ['propio', 'artista'],
    required: true
  },
  ventaComidas: {
    type: Boolean,
    default: false
  },
  porcentajeArtista: {
    type: Number,
    required: true
  },
  seguroSala: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Escenario', EscenarioSchema);