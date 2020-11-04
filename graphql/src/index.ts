import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import { DataSources } from './data-sources';
import { Resolvers } from './resolver';
import { User } from './schema/graphql-schema';
import { GraphqlUtility } from './utils/graphql.utility';
import { TokenUtility } from './utils/token.utility';
const dotenv = require('dotenv');

const app = express();

// Load configuration file.
dotenv.config({ path: 'src/config/.env', silent: true });

// Construct schema.
const schema = makeExecutableSchema({ typeDefs: GraphqlUtility.loadTypeDefs(__dirname), resolvers: Resolvers });

// Initialize Apollo server.
const server = new ApolloServer({
  schema: schema,
  playground: true,
  dataSources: DataSources,
  context: async ({ req }) => {
    const token: string = req?.headers?.authorization?.split(' ')[1];
    const user: User = await TokenUtility.getUser(token);
    return { token, user };
  },
});

server.applyMiddleware({ app });

// Initialize App Port.
const PORT = process.env.PORT;

// Listen to the port.
app.listen(PORT, () => { console.log('App started on port: ' + PORT) });

