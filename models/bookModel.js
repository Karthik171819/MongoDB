//mongoose schema info
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String
})

const bookModel = mongoose.model('book', bookmSchema)
module.exports = bookModel;