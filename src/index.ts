import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { CharacterResolver } from "./character";
import { buildSchema } from "type-graphql";

interface MyContext {
  token?: string;
}

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
