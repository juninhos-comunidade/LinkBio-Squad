import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { hasZodFastifySchemaValidationErrors } from "fastify-type-provider-zod";

import { UserAlreadyExistsError } from "../../../domain/exceptions/user-already-exists.error";

export function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: "Erro de validação nos dados enviados.",
      details: error.validation.map((err) => {
        const issue = err.params?.issue;
        const customMessage =
          typeof issue === "object" &&
          issue !== null &&
          "message" in issue &&
          typeof issue.message === "string"
            ? (issue as { message: string }).message
            : err.message;

        return {
          field: err.instancePath.replace(/^\/body\//, "").replace(/\//g, "."),
          message: customMessage,
        };
      }),
    });
  }

  if (error instanceof UserAlreadyExistsError) {
    return reply.status(409).send({ message: error.message });
  }

  console.error("Erro interno:", error);

  return reply.status(500).send({
    message: "Erro interno do servidor.",
  });
}
