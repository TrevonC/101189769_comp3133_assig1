const mongoose = require("mongoose");

// All fields are required
// Username must be unique
// Validate email format
// Password must be min 6 char. length and contain only upper/lower alphabets, 0-9, #, $, &, _

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: [true, 'Username already exists']
    },
    firstname: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastname: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    password: {
        type: String,
        required: [true, 'You must enter a password'],
        minlength: 6,
    },
    email: {
        type: String,
        required: [true, 'You must enter your email'],
        unique: [true, "Email already in use"]
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer']
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;