import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { CharacterResolver, CharacterService } from "./character";
import { buildSchema } from "type-graphql";
import { RequestLogMiddleware } from "./shared/middlewares";
import useragent from "express-useragent";
import { runCharactersCronJob } from "./database/cron-jobs/characters-cron";
import { Container } from "typedi";

interface MyContext {
  token?: string;
}

const executeMain = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  runCharactersCronJob();

  app.use(useragent.express());
  const schema = await buildSchema({
    resolvers: [CharacterResolver],
    emitSchemaFile: true,
    container: Container.of(),
  });

  const server = new ApolloServer<MyContext>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  server
    .start()
    .then(() => {
      app.use(
        "/graphql",
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server, {
          context: async ({ req, res }) => {
            RequestLogMiddleware(req, res);
            return { token: req.headers.token };
          },
        })
      );
    })
    .then(() => {
      const PORT = 3000;
      httpServer.listen({ port: PORT });
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });
};

executeMain();
