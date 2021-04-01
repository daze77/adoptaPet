const mongoose = require('mongoose')
const Schema = mongoose.Schema

let requisitions = new Schema ({
    name:  { type: String, required: true, trim: true },
    lastname:  { type: String, required: true, trim: true },
    email:  { type: String, trim: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] },
    address1:  { type: String, required: true, trim: true },
    address2:  { type: String, required: true, trim: true },
    city:  { type: String, required: true, trim: true },
    postal:  { type: String, required: true, trim: true },
    province:  { type: String, required: true, trim: true },


}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('requisitions', requisitions)