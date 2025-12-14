import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("New inquiry:", data);

    // 现在先只做一件事：确认请求能到
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
