const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
   
    doctorID: {
        type: Boolean,
        required: true

    },

    name: {
        type: String,
        required: true

    },

    hospital: {
        type: String,
        required: true

    },
    
    gender: {
        type: String,
        required: true

    },

    contactNumber: {
        type: String,
        required: true

    },

    specialization: {
        type: String,
        required: true

    },

    availability: {
        type: Date,
        required: true

    },
    
    
    
})

module.exports = mongoose.model('doctor', doctorSchema)