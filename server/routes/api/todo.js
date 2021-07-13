const router = require('express').Router();
const todoController = require('../../controllers/todoController')

// matches with requests from '/api/todo'
router
    .route('/')
    .post(todoController.create)

// matches with requests from '/api/todo/all'
router
    .route('/all')
    .get(todoController.findAll)

// matches with requests from '/api/todo/:id'
router
    .route('/:id')
    .put(todoController.edit)
    .delete(todoController.delete)

// matches with requests from '/api/todo/complete/:id'
router
    .route('/complete/:id')
    .put(todoController.complete)

module.exports = router;