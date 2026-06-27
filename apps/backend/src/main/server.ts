import { buildApp } from "./setup";

const startServer = async () => {
  const setup = await buildApp();

  setup.listen({ port: +process.env.PORT! }, (err, address) => {
    if (err) {
      setup.log.error("Um erro ocorreu ao iniciar o servidor!" + err);
      process.exit(1);
    }
    setup.log.info(`Servidor escutando no endereço: ${address}`);
  });
};

startServer();
