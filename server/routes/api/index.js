const router = require('express').Router()
const listRoutes = require("./list");
const todoRoutes = require('./todo');

router.use("/list", listRoutes);
router.use("/todo", todoRoutes);

module.exports = router;