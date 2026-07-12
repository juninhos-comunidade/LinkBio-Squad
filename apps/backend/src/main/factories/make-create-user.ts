import { CreateUserUseCase } from "../../app/use-cases/create-user-use-case";
import { PrismaUserRepository } from "../../infra/database/repositories/prisma-user-repository";
import { BcryptHashProvider } from "../../infra/providers/hash-provider";

export const makeCreateUser = () => {
  const userRepository = new PrismaUserRepository();
  const hashProvider = new BcryptHashProvider();
  const createUserUseCase = new CreateUserUseCase(userRepository, hashProvider);

  return createUserUseCase;
};
