const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/paymentsController')

router.route('/')
    .get(paymentsController.getAllUsers)
    .post(paymentsController.createNewUser)
    .patch(paymentsController.updateUser)
    .delete(paymentsController.deleteUser)

module.exports = router    