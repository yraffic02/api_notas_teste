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
    const { titulo, conteudo } = req.body;

    const notas = await Notas.findAll();  

    return res.status(200).json(notas);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getNota(req, res){
  try {
    const { id } = req.params;

    const nota = await Notas.findOne({ where: { id: id} });  

    if(!nota){
      return res.status(404).json({mensage: "Nota Not found!"});
    }

    return res.status(200).json(novaNota);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  registerNota,
  getAllNotas,
  getNota
}