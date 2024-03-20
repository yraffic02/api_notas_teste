const { Notas } = require("../models");

async function registerNota(req, res){
  try {
    const { titulo, conteudo } = req.body;

    const novaNota = await Notas.create({
      titulo,
      conteudo
    });  

    return res.status(201).json(novaNota);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getAllNotas(req, res){
  try {
    const notas = await Notas.findAll();  

    return res.status(200).json(notas);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getNota(req, res){
  try {
    const { id } = req.params;

    const nota = await Notas.findByPk(id);  

    if(!nota){
      return res.status(404).json({mensage: "Nota Not found!"});
    }

    return res.status(200).json(nota);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function updateNota(req, res){
  try {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;

    const nota = await Notas.findByPk(id);  

    if(!nota){
      return res.status(404).json({mensage: "Nota Not found!"});
    }

    await Notas.update({
      titulo: titulo,
      conteudo: conteudo
    },{
      where: {
        id: id
      }
    });  

    const updateNota = await Notas.findByPk(id);  
    
    return res.status(202).json(updateNota);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function deleteNota(req, res){
  try {
    const { id } = req.params;

    const nota = await Notas.destroy({
      where: {
        id: id
      }
    });  

    if(!nota){
      return res.status(404).json({mensage: "Nota Not found!"});
    }
    
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  registerNota,
  getAllNotas,
  getNota,
  deleteNota,
  updateNota
}