const { Notas } = require("../models");


 async function registrarNota(req, res){
    try {
      const { titulo, conteudo } = req.body;
    console.log(titulo, conteudo)

      const novaNota = await Notas.create({
        titulo,
        conteudo
      });  

      return res.status(200).json(novaNota);
    } catch (err) {
      return res.status(500).json(err);
    }
}

module.exports = {
    registrarNota
}