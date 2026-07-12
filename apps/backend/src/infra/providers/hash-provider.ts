import bcrypt from "bcryptjs";

import { HashProvider } from "../../app/ports/out/providers/hash-provider";

export class BcryptHashProvider implements HashProvider {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
}
