const mongoose  = require('mongoose')

const reviewSchema = new mongoose.Schema({

 author: {
    type: String,
    required: true  
 },
 title: {
     type: String,
     required: true
 },
 tag: {
     type: [String]
 },
 content: {
     type: String
 },
 draft: {
     type: Boolean,
     default: false
 },
 comments: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
 ],
 publishDate: {
    type: String
 }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review

