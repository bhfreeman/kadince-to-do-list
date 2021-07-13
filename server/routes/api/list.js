const router = require('express').Router();
const listController = require('../../controllers/listController')

router
    .route('/')
    .post(listController.create)

router
    .route('/all')
    .get(listController.findAll)


module.exports = router;