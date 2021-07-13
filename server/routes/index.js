const router = require("express").Router();
const listRoutes = require("./list");
const todoRoutes = require('./todo');

router.use("/list", listRoutes);
router.use("/todo", todoRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;