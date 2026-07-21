import { User } from "../../domain/entities/user";
import { UserAlreadyExistsError } from "../../domain/exceptions/user-already-exists.error";
import { CreateUserInDTO, CreateUserOutDTO } from "../ports/in/create-user-in";
import { HashProvider } from "../ports/out/providers/hash-provider";
import { UserRepository } from "../ports/out/repositories/user";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}
  async execute(params: CreateUserInDTO): Promise<CreateUserOutDTO> {
    const userExists = await this.userRepository.findByEmail(params.email);

    if (userExists) throw new UserAlreadyExistsError();

    const user = new User({
      email: params.email,
      name: params.name,
      passwordHash: await this.hashProvider.hash(params.password),
      avatar: params.avatar,
      role: params.role,
      location: params.location,
      bio: params.bio,
      stack: params.stack,
    });

    return await this.userRepository.create(user);
  }
}
