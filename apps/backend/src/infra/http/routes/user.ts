import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify/types/instance";

import { CreateUserController } from "../controllers/create-user";
import { errorSchema } from "../schemas/errors.schema";
import {
  createUserRequestSchema,
  createUserResponseSchema,
} from "../schemas/user.schema";

export const userRoutes = (app: FastifyInstance) => {
  const typedApp = app.withTypeProvider<ZodTypeProvider>();

  typedApp.route({
    method: "POST",
    url: "/user",
    schema: {
      tags: ["User"],
      description: "Cria um novo usuário",
      body: createUserRequestSchema,
      response: {
        201: createUserResponseSchema,
        400: errorSchema.describe("Erro de validação nos dados enviados"),
        409: errorSchema.describe("Conflito: E-mail já cadastrado"),
        500: errorSchema.describe("Erro interno do servidor"),
      },
    },
    handler: async (req, res) => {
      const createUserController = new CreateUserController();
      return await createUserController.handle(req, res);
    },
  });
};
