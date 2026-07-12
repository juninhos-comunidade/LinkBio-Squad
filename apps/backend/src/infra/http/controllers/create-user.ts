import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

import { makeCreateUser } from "../../../main/factories/make-create-user";
import { createUserRequestSchema } from "../schemas/user.schema";

type CreateUserBody = z.infer<typeof createUserRequestSchema>;

export class CreateUserController {
  async handle(
    req: FastifyRequest<{ Body: CreateUserBody }>,
    reply: FastifyReply,
  ) {
    const body = req.body;

    if (!createUserRequestSchema.safeParse(body)) {
      return reply.status(400).send({
        errorCode: "BAD_REQUEST",
        message: "Invalid request body",
      });
    }

    const createUserUseCase = makeCreateUser();
    const user = await createUserUseCase.execute(body);
    return reply.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      location: user.location,
      bio: user.bio,
      stack: user.stack,
      customLinks: user.customLinks,
    });
  }
}
