const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const inflection = require('inflection');   

const server = new ApolloServer({
    typeDefs, resolvers,
    // Define the inflection option to pluralize the table names in resolvers
    //inflection: {
    //    pluralize: false , // A simple way to pluralize by adding 's' at the end
    //} 
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
  