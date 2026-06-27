import fastifySwagger from "@fastify/swagger";
import fastifyApiReference from "@scalar/fastify-api-reference";
import fastify, { FastifyInstance } from "fastify";

export const buildApp = async (): Promise<FastifyInstance> => {
  const app = fastify({
    logger: true,
  });

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
          name: "LinkBio Squad",
          description: "Endpoints relacionados ao linkbio",
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
  });

  await app.register(fastifyApiReference, {
    routePrefix: "/docs",
  });

  return app;
};
