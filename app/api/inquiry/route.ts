import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  console.log("New inquiry received:", payload);
  return NextResponse.json({ success: true });
}
