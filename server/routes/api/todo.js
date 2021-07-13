const router = require('express').Router();
const todoController = require('../../controllers/todoController')

router
    .route('/')
    .post(todoController.create)

router
    .route('/all')
    .get(todoController.findAll)


module.exports = router;