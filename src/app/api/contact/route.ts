import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, organization, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Cavalier Cabling <noreply@cavaliercabling.com>",
      to: "info@cavaliercabling.com",
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E8602C;">New Quote Request</h2>

          <div style="background: #F5F5F5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            ${organization ? `<p style="margin: 10px 0;"><strong>Organization:</strong> ${organization}</p>` : ""}
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1a1a1a;">Project Details:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

          <p style="color: #999; font-size: 12px;">
            Sent from the Cavalier Cabling website at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
