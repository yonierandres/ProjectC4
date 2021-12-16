import express from "express";
import cors from "cors"; //permite que entren requests desde diferentes sitios
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import conectarDB from "./db/db";
import { tipos } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";


dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos, //definiciones de los modelos
  resolvers: resolvers, // como controladores en rest
});

const app = express();

app.use(express.json()); // se configura el modo de trabajo en formato json
app.use(cors()); // la app permitirá hacer request desde diferentes direcciones
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarDB();
  await server.start();

  server.applyMiddleware({ app }); //usa los mismo middlewares de app

  console.log("servidor onlined");
});
