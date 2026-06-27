import fastify from "fastify";

const app = fastify({
  logger: true,
});

app.get("/health", (request, reply) => {
  return reply.send({
    message: "Hello World!",
  });
});

app.listen({ port: +process.env.PORT! }, (err, address) => {
  if (err) {
    app.log.error("Um erro ocorreu ao inicializar o servidor!" + err);
    process.exit(1);
  }

  app.log.info(`Servidor escutando na porta ${address}`);
});
