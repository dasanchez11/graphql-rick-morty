import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { CharacterResolver } from "./character";
import { buildSchema } from "type-graphql";
// import { typeDefs, resolvers } from "./schema";

interface MyContext {
  token?: string;
}

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Character {
    id: String!
    status: String!
    species: String!
    gender: String!
    name: String!
    origin: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute along with the return type for each. In this
  #asdf
  # case, the "books" query returns an array of zero or more Books (defined above).
  # type Query {
  #   characters: [Character!]!
  # }

  input CharacterSearchArgs {
    status: String
    species: String
    gender: String
    name: String
    origin: String
  }


  type Query {
    characters(args: CharacterSearchArgs): [Character]
  }
`;

const executeMain = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: [CharacterResolver],
    emitSchemaFile: true,
  });

  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  server
    .start()
    .then(() => {
      app.use(
        "/",
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server, {
          context: async ({ req }) => ({ token: req.headers.token }),
        })
      );
    })
    .then(() => {
      const PORT = 3000;
      httpServer.listen({ port: PORT });
      console.log(`🚀 Server ready at http://localhost:${PORT}/`);
    });
};

executeMain();
