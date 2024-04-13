const mongoose = require('mongoose')

const cardDetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    cardNo: {
        type: Number,
        required: true
    },
    merchant: [{
        type: String,
        default: "Visa"

    }],
    expDate: {
        type: Date,
        required: true
    },

    cvv: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('Card', cardDetailsSchema)