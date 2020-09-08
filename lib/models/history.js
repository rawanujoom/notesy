'use strict'
const mongoose = require('mongoose');
const history = mongoose.Schema({
    method: {
        type: String,
        required: true, 
        enum:['--add', '-a'] 
    },
    note: { type: String, required: true }
})
module.exports =mongoose.model('history', history)