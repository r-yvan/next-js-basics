import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Product {
  id: number;
  name: string;
  price: number;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const prods = await prisma.products.findMany();
  const prod = prods.find((p: Product) => p.id === parseInt(params.id));

  if (!prod)
    return NextResponse.json({ error: "Product not found!!" }, { status: 404 });
  return NextResponse.json({ prod });
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const validationResult = schema.safeParse(body);

  if (!validationResult.success)
    return NextResponse.json(validationResult.error.errors, { status: 400 });

  return NextResponse.json({
    ...body,
    message: "Successfully updated the object!!",
  });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const prods = await prisma.products.findMany();
  const prod = await prods.find((p: Product) => p.id === parseInt(params.id));

  if (!prod)
    return NextResponse.json({ error: "Product not found!!" }, { status: 404 });
  await prisma.products.delete({
    where: { id: prod.id },
  });
};
