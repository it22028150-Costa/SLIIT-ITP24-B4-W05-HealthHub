const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/paymentsController')

router.route('/')
    .get(paymentsController.getSavedDetails)
    .post(paymentsController.savePaymentDetails)
    

module.exports = router    