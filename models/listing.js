const mongoose = require('mongoose');

// All fields are required
// Validate email format

const ListingSchema = new mongoose.Schema({
    listing_id:{
        type: String,
        reqired: true,
        unique: [true, 'already exists']
    },
    listing_title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        maxlength: 1000,
    },
    street:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    postal_code:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    }
});

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;
