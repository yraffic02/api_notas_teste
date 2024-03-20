const express = require('express');
const { registerNota, getAllNota } = require('./controllers/notasController');
const router = express.Router()


router.post('/notas', registerNota)
router.get('/notas', getAllNota)

module.exports = router;