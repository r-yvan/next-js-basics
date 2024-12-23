import { NextRequest, NextResponse } from "next/server"
export const GET = async (request: NextRequest) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
  ]
  return NextResponse.json(users)
}