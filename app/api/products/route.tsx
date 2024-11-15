import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 2.5 },
    { id: 2, name: "Potatoes", price: 3.4 },
    { id: 3, name: "Bread", price: 1.8 },
  ]);
};

