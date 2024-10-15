const express = require('express');
const router = express.Router();
const Artista = require('../models/Artista');

// Obtener todos los artistas
router.get('/', async (req, res) => {
  try {
    const artistas = await Artista.find();
    res.json(artistas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// Buscar artistas
router.get('/buscar', async (req, res) => {
  try {
    const { q } = req.query;
    const artistas = await Artista.find({
      $or: [
        { nombreArtistico: { $regex: q, $options: 'i' } },
        { genero: { $regex: q, $options: 'i' } }
      ]
    });
    res.json(artistas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;