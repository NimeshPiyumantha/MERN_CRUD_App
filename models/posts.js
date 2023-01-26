const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    name: {
        type: String, required: true
    }, state: {
        type: String, required: true
    }, salary: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Posts', postSchema)