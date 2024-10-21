import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest) => {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const usersFromDb = await prisma.users.findMany();
  const userFromDb = await usersFromDb.find(
    (user) => user.email === body.email
  );
  if (userFromDb)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.users.create({
    data: {
      username: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return NextResponse.json(newUser);
};
