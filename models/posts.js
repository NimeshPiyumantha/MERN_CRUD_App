const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postCategory: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', postSchema)