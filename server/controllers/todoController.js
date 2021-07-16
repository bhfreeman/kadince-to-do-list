const db = require("../models");

module.exports = {
  findAll: async function (req, res) {
    const todos = await db.Todo.findAll({})
    res.send(todos)
 },
  create: async function(req,res) {
    try{
      const newTodo = await db.Todo.create({
        title: req.body.title,
        text: req.body.text,
        list_id: req.body.list_id
      })
      res.send(`new todo created: ${newTodo}`)
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
          id: req.params.id
        }
      })
      res.send(`edited todo: ${editedTodo}`)
    } catch(err) {
      console.log(err)
    }
  },
  delete:async function(req,res){
    await db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send('todo deleted')
  },
  complete: async function(req,res){
    await db.Todo.update({isComplete: true}, {
      where: {
        id: req.params.id
      }
    })
    res.send('todo has been completed!')
  }
};