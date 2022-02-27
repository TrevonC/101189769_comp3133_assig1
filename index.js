const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// Apollo Server + TypeDefs + Resolvers
const { ApolloServer } = require('apollo-server-express');
const TypeDefs = require('./schema');
const Resolvers = require('./resolvers');


// MongoDB Connection
const dB_url = 'mongodb+srv://admin:admin@comp3133assig1.kjx0u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect( dB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log(`Successfully connected to server. ${success}`);
}).catch(err => {
    console.log(err);
});

// Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers,
    context: ({req}) =>{
        const user = req.user || null;
        return user;
    },
});

// Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());

server.applyMiddleware({app});

app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
});
