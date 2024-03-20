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

async function getAllNota(req, res){
  try {
    const { titulo, conteudo } = req.body;

    const novaNota = await Notas.findAll();  

    return res.status(200).json(novaNota);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  registerNota,
  getAllNota
}