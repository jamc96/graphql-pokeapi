const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
// resolvers
const resolvers = {
    Query
}
// server configs
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});
// start server
server.start((() => console.log('Server is running localhost:4000 ')));