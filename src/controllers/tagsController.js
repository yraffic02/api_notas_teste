const { Tags } = require("../models");

async function registerTag(req, res){
  try {
    const { titulo } = req.body;

    const novaTag = await Tags.create({
      titulo
    });  

    return res.status(201).json(novaTag);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getAllTags(req, res){
  try {
    const tags = await Tags.findAll();  

    return res.status(200).json(tags);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getTag(req, res){
  try {
    const { id } = req.params;

    const tag = await Tags.findByPk(id);  

    if(!tag){
      return res.status(404).json({mensage: "tag Not found!"});
    }

    return res.status(200).json(tag);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function updateTag(req, res){
  try {
    const { id } = req.params;
    const { titulo } = req.body;

    const tag = await Tags.findByPk(id);  

    if(!tag){
      return res.status(404).json({mensage: "Tag Not found!"});
    }

    await Tags.update({
      titulo: titulo
    },{
      where: {
        id: id
      }
    });  

    const updatedTag = await Tags.findByPk(id);  
    
    return res.status(202).json(updatedTag);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function deleteTag(req, res){
  try {
    const { id } = req.params;

    const nota = await Tags.destroy({
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
  registerTag,
  getAllTags,
  getTag,
  updateTag,
  deleteTag
}