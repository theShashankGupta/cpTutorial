const mongoose  = require('mongoose')

const commentSchema = new mongoose.Schema({
 author: {
    type: String,
    required: true  
 },
 content: {
     type: String
 },
 publishDate: {
    type: String
 }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

