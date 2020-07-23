const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const connectDB = require("./db");

const PORT = process.env.PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

connectDB()
  .then(() => {
    return server.listen({ PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
  // .catch((err) => {
  //   console.error(err)
  // })


