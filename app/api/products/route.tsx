import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request: NextRequest) => {
  const prods = await prisma.products.findMany();
  return NextResponse.json(prods);
};
