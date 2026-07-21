export class UserAlreadyExistsError extends Error {
  constructor() {
    super("Um usuário já existe com esse e-mail.");

    this.name = "UserAlreadyExistsError";
  }
}
