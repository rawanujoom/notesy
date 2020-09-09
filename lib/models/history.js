'use strict'
const mongoose = require('mongoose');
const history = mongoose.Schema({
    // method: {
    //     type: String,
    //     required: true, 
    //     enum:['--add', '-a'] 
    // },
    note: { type: String, required: true },
    catDesc: {type: String, require: true}
})
module.exports =mongoose.model('history', history)

// let obj = new history({
//     note : payload,
//     category : cat
// })

// obj.save();

