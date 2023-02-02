const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
    },
    shops: [
        {
            type: [Schema.Types.ObjectId],
            ref: 'Shop',
        }
    ]
})

module.exports = mongoose.model('User', userSchema);