const express = require('express');
const { registrarNota } = require('./controllers/notasController');
const router = express.Router()


router.post('/notas', registrarNota)

module.exports = router;