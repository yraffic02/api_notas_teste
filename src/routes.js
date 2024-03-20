const express = require('express');
const { 
    registerNota, 
    getAllNotas, 
    getNota,
    updateNota, 
    deleteNota
} = require('./controllers/notasController');
const { 
    registerTag,
    getAllTags,
    getTag,
    updateTag,
    deleteTag
} = require('./controllers/tagsController');
const router = express.Router()


router.post('/notas', registerNota)
router.get('/notas', getAllNotas)
router.get('/notas/:id', getNota)
router.patch('/notas/:id', updateNota)
router.delete('/notas/:id', deleteNota)

router.post('/tags', registerTag)
router.get('/tags', getAllTags)
router.get('/tags/:id', getTag)
router.patch('/tags/:id', updateTag)
router.delete('/tags/:id', deleteTag)

module.exports = router;