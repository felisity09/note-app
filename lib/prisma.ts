import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare const global: Global & {
  prisma?: PrismaClient;
  [key: string]: any;
};

if (!global.prisma) {
  global.prisma = new PrismaClient();
}

prisma = global.prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
