const {gql} = require('apollo-server-express');

exports.typeDefs = gql`


    type User{
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing{
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type Booking{
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_start: String!
        booking_end: String!
        username: String!
    }

    type Query {
        me: User!
        getBookingByLoggedInUser: [Booking]
        getListingsByAdmin(username: String!): [Listing]
        getListingsByLoggedInAdmin: [Listing]
        getListingsByName(listing_title: String!): [Listing]
        getListingsByCity(city: String!): [Listing]
        getListingsByPostalCode(postal_code: String!): [Listing] 
    }

    type Mutation {
        createUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ):User

        login(
            username: String!
            password: String!
        ): User

        createListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
        ): Listing

        createBooking(
            listing_id: String!
            booking_id: String!
            booking_start: String!
            booking_end: String!
        ): Booking
    }
    `;