const db = require("../models");

module.exports = {
  findAll: async function (req, res) {
    await db.Todo.findAll({})
 },
  create: async function(req,res) {
    try{
      const newTodo = await db.Todo.create({
        title: req.body.title,
        text: req.body.text,
        list_id: req.body.list_id
      })
    } catch(err) {
      console.log(err)
    }
  },
  edit: async function(req,res) {
    try{
      const editedTodo = await db.Todo.update({
        title: req.body.title,
        text: req.body.text,
        list_id: req.body.list_id
      },{
        where: {
          id: req.body.id
        }
      })
    } catch(err) {
      console.log(err)
    }
  }

};