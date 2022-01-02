let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    id: String,
    title: String,
    date: Date,
    description: String,
    text: String,
    country: String,
    imageURL: String
});

let Post = mongoose.model('posts', postSchema);

module.exports = { Post }