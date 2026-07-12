import { UserRepository } from "../../../app/ports/out/repositories/user";
import { User } from "../../../domain/entities/user";
import { db } from "../prisma/db";

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const createdUser = await db.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.passwordHash,
        avatar: user.avatar,
        role: user.role,
        location: user.location,
        bio: user.bio,
        stack: user.stack,
      },
    });
    return new User(
      { ...createdUser, passwordHash: createdUser.password },
      createdUser.id,
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;
    return new User(
      {
        ...user,
        passwordHash: user.password,
      },
      user.id,
    );
  }
}
