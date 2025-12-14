import { NextResponse } from "next/server";

const ALLOW_HEADERS = {
  Allow: "POST, OPTIONS",
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("New inquiry:", data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Invalid request", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({ ok: true }, { status: 200, headers: ALLOW_HEADERS });
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405, headers: ALLOW_HEADERS }
  );
}
