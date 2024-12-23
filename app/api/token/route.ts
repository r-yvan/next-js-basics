import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const GET = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
};
