const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tasks = new Schema({
   name: { type: String, required: true, trim: true },
   ownerId: Schema.Types.ObjectId
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('tasks', tasks)