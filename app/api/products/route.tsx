import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const GET = async (request: NextRequest) => {
  const product = await prisma.products.findMany();
  return NextResponse.json(product);
};
