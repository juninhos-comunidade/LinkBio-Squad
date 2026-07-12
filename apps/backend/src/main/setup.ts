import fastifyCookie from "@fastify/cookie";
import fastifyJwt from "@fastify/jwt";
import fastifySwagger from "@fastify/swagger";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "@fastify/type-provider-zod";
import fastifyApiReference from "@scalar/fastify-api-reference";
import fastify, { FastifyInstance } from "fastify";

import { errorHandler } from "../infra/http/middlewares/error-handler";
import { userRoutes } from "../infra/http/routes/user";

export const buildApp = async (): Promise<FastifyInstance> => {
  const app = fastify({
    logger: true,
  });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.setErrorHandler(errorHandler);

  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "LinkBio - API de agregação de links do squad",
        description:
          "Documentação completa da API usando pricipios de Arquitetura Hexagonal",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT}`,
          description: "Servidor de Desenvolvimento",
        },
      ],
      tags: [
        {
          name: "User",
          description: "Endpoints relacionados ao usuário",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
    transform: jsonSchemaTransform,
  });

  await app.register(fastifyApiReference, {
    routePrefix: "/docs",
  });

  app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET!,
    prefix: "/api/v1",
  });

  app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET!,
  });

  app.register(userRoutes, { prefix: "/api/v1" });
  return app;
};
