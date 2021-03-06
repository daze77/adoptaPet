const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messages = new Schema({
   name: { type: String, required: true, trim: true },
   subject: { type: String, required: true, trim: true},
   message: { type: String, required: true, trim: true },
   ownerId: Schema.Types.ObjectId,
   reply: [
      {
         type: Schema.Types.ObjectId,
         ref: 'messageReply'
      }
   ]
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('messages', messages)