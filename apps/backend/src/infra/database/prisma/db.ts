import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL;

const prisma =
  global.prisma ||
  new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });
export const db = prisma;

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
