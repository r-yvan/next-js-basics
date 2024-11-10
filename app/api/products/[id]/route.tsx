import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
export const GET = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10)
    return NextResponse.json(
      { error: "The Product does not exist!!" },
      { status: 404 }
    );
  return NextResponse.json({ id: params.id, name: "Avocado", price: 4.5 });
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: number } }
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
