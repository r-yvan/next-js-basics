import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

export const GET = async (request: NextRequest) => {
  const prods = await prisma.products.findMany();
  return NextResponse.json(prods);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validationResult = schema.safeParse(body);

  if (!validationResult.success) {
    return NextResponse.json(validationResult.error.errors, { status: 400 });
  }

  const newProd = await prisma.products.create({
    data: {
      id: body.id,
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json({
    newProd,
    message: "The Product created successfully!!",
  });
};
