const express = require('express');
const { registerNota, getAllNotas, getNota } = require('./controllers/notasController');
const router = express.Router()


router.post('/notas', registerNota)
router.get('/notas', getAllNotas)
router.get('/notas/:id', getNota)

module.exports = router;