import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resendApiKey = process.env.RESEND_API_KEY;
const notifyEmail = process.env.NOTIFY_EMAIL;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const allowHeaders = { Allow: "POST, OPTIONS, GET" };

export async function POST(req: Request) {
  let data: unknown = null;

  try {
    data = await req.json();
  } catch (error) {
    console.error("Invalid JSON body", error);
    return NextResponse.json({ ok: false, message: "Invalid JSON body" }, { status: 200 });
  }

  try {
    if (resend && notifyEmail) {
      await resend.emails.send({
        from: "GentleCare <onboarding@resend.dev>",
        to: notifyEmail,
        subject: "New Irvine Inquiry",
        text: JSON.stringify(data, null, 2),
      });
    } else {
      console.warn("Missing RESEND_API_KEY or NOTIFY_EMAIL; skipping email send.");
    }
  } catch (error) {
    console.error("Failed to send inquiry email", error);
  }

  return NextResponse.json({ ok: true });
}

export async function OPTIONS() {
  return NextResponse.json({ ok: true }, { status: 200, headers: allowHeaders });
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Submit inquiries via POST to this endpoint." },
    { status: 200, headers: allowHeaders }
  );
}
