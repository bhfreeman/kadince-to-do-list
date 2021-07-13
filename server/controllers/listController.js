const db = require("../models");

module.exports = {
    //create a new list
    create: async function(req,res) {
        try{
            const newList = await db.List.create({
                title: req.body.title
            })
        } catch(err) {
            console.log(err)
        }
    },
  findAll: async function (req, res) {
     await db.List.findAll({})
  }
};