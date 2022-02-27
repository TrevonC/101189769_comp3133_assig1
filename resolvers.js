const User = require('./models/user');
const Listing = require('./models/listing');
const Booking = require('./models/booking');

exports.resolvers = {
    Query: {
        me: async (parent, args, {user, sub}) => {
            return await User.findById(sub);
        },
        getBookingByLoggedInUser: async(parent, args, {user}) => {
            return await Booking.find({username: user.username});
        },
        getListingsByAdmin: async (parent, args) => {
            return await Listing.find({username: args.username});
        },
        getListingsByLoggedInAdmin: async (parent, args, {user}) => {
            return await Listing.find({username: user.username});
        },
        getListingsByName: async (parent, args) => {
            return await Listing.find({title: {$regex: ".*" + args.title + ".*"}});
        },
        getListingsByCity: async (parent, args) => {
            return await Listing.find({city: args.city});
        },
        getListingsByPostalCode: async (parent, args) => {
            return await Listing.find({postal_code: args.postal_code})
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            let newUser = new User(args);
            console.log(newUser)
            console.log(args)
            return newUser.save();
        },
        login: async (parent, args) => {
            const findUser = await User.findById(args.username)
            console.log(findUser)
            if (!findUser){
                return;
            } if (findUser.password != args.password){
                return;
            } return findUser.username;
        },
        createListing: async (parent, args,) => {
            let newListing = await Listing ({
                listing_id: args.listing_id,
                listing_title: args.listing_title,
                description: args.description,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                username: args.username,
            }); return newListing.save();
        },
        createBooking: async (parent, args, {user}) => {
            if (!user){ return null;}
            let newBooking = await Booking ({
                listing_id: args.listing_id,
                booking_id: args.booking_id,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                username: user.username,
            }); return newBooking.save();
        },
    },
};
