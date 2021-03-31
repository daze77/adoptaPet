const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviews = new Schema({
   name: { type: String, required: true, trim: true },
   organization: {type: String, required: true, trim: true },
   subject: { type: String, required: true, trim: true},
   review: { type: String, required: true, trim: true },
   ownerId: Schema.Types.ObjectId
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('reviews', reviews)