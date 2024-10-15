const express = require('express');
const router = express.Router();
const Escenario = require('../models/Escenario');

// Obtener todos los escenarios
router.get('/', async (req, res) => {
  try {
    const escenarios = await Escenario.find();
    res.json(escenarios);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// Crear un nuevo escenario
router.post('/', async (req, res) => {
  try {
    const nuevoEscenario = new Escenario(req.body);
    const escenario = await nuevoEscenario.save();
    res.json(escenario);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;