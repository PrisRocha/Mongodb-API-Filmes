const mongoose = require('mongoose') 

const filmeSchema = new mongoose.Schema({ 
    
    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    sinopse: {
        type: String,
        required: true
    },
    direcao: {
        type: String,
        required: true
    },
    atores: {
        type: Array,
        required: true
    },
    genero: {
        type: Array,
        required: true
    },
    idiomas: {
        type: Array,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default:new Date
    }
})

module.exports = mongoose.model('filme', filmeSchema)