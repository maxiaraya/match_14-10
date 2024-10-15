const mongoose = require('mongoose');

const ArtistaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  nombreArtistico: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  descripcion: String
});

module.exports = mongoose.model('Artista', ArtistaSchema);