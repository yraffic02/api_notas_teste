const express = require('express');
const { 
    registerNota, 
    getAllNotas, 
    getNota,
    updateNota, 
    deleteNota
} = require('./controllers/notasController');
const router = express.Router()


router.post('/notas', registerNota)
router.get('/notas', getAllNotas)
router.get('/notas/:id', getNota)
router.patch('/notas/:id', updateNota)
router.delete('/notas/:id', deleteNota)

module.exports = router;