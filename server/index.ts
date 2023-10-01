import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const app: Application = express();
const PORT = process.env.PORT || 8000;

const prismaTest = async () => {
  await prisma.user.create({
    data: {
      first_name: "example",
      last_name: "example",
      email: "example@gmail.com",
      username: "example",
      password: "123456",
    },
  });
};

app.get("/", (req: Request, res: Response) => {
  void prismaTest();
  res.send("Welcome!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
