const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageReply = new Schema({
   name: { type: String, required: true, trim: true },
   subject: { type: String, required: true, trim: true},
   message: { type: String, required: true, trim: true },
   ownerId: Schema.Types.ObjectId,
   id: Schema.Types.ObjectId
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('messageReply', messageReply)