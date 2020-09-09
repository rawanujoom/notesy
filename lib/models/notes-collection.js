'use strict'
const schema = require('./models/history.js');
class History {
    get(_id) {
        if (_id) {
            return schema.findOne({ _id });
        } else {
            return schema.find()
        }
    }
    create(record) {
        let newRecord = new schema(record)
        return newRecord;
    }
    update(_id, record) {
        if (_id) {
            return schema.findByIdAndUpdate(_id, record)
        } else {
            return `there is no ID its value${_id}`
        }
    }
    delete(_id) {
        if (_id) {
            return schema.findByIdAndDelete(_id)
        } else {
            return `there is no ID its value${_id}`
        }
    }

}

// export using singleton
module.exports = new History();