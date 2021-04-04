const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter a text']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Todo', TodoSchema)