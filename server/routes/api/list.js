const router = require('express').Router();
const listController = require('../../controllers/listController')

// matches with requests from '/api/list'
router
    .route('/')
    .post(listController.create)

// matches with requests from '/api/list/all'
router
    .route('/all')
    .get(listController.findAll)

// matches with requests from '/api/list/:id'
router
    .route('/:id')
    .delete(listController.delete)


module.exports = router;