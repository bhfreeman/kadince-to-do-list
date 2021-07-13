const db = require("../models");

module.exports = {
  findAll: async function (req, res) {
     await db.Todo.findAll({})
  }
};