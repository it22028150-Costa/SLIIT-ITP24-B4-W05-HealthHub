const express = require('express')
const router = express.Router()
const paymentsController = require('../controllers/paymentsController')
const {deleteCardDetails} = require('../controllers/paymentsController')

router.route('/')
    .get(paymentsController.getSavedDetails)
    .post(paymentsController.savePaymentDetails)
    

router.delete('/:id',deleteCardDetails)    
    

module.exports = router    