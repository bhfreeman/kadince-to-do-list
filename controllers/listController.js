const db = require("../models");

module.exports = {
    //create a new list
    create: async function(req,res) {
        try{
            const newList = await db.List.create({
                title: req.body.title
            })
            res.send(`new list created with title of ${req.body.title}`)
        } catch(err) {
            console.log(err)
        }
    },
    delete: async function(req, res){
      try{
          await db.List.destroy({
              where: {
                  id: req.params.id
              }
          })
          res.send("list destroyed")
      }catch(err) {
          console.log(err)
      }
    },
  findAll: async function (req, res) {
      try{
         const lists = await db.List.findAll({include:{all: true}})
         res.send(lists)
      } catch(err){
        console.log(err)
    }
  }
};