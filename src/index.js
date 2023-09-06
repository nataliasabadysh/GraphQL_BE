import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    hello: String 
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello Client'
    }
}

const PORT = 4000;

const app = express();

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
})


// midleware 
server.applyMiddleware({ app })

// run the server 
app.listen ({ port: PORT}, ()=> console.log(`server ready at http://localhost:${PORT}${server.graphqlPath}/`))