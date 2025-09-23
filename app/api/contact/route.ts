import { NextRequest } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "apexbyte63@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, services, budget, timeline } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    const emailValid = /.+@.+\..+/.test(email);
    if (!emailValid) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!resendApiKey) {
      return Response.json({ error: "Email service not configured" }, { status: 503 });
    }

  const resend = new Resend(resendApiKey);
  const subject = `New Project Inquiry — ${name}`;
  const nowIso = new Date().toISOString();
  const ipHeader = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
  const ip = ipHeader.split(",")[0].trim() || "N/A";
  const ua = req.headers.get("user-agent") || "N/A";
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      services?.length ? `Services: ${services.join(", ")}` : undefined,
      budget ? `Budget: ${budget}` : undefined,
      timeline ? `Timeline: ${timeline}` : undefined,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif; color:#0f172a;">
        <h2 style="margin:0 0 12px;">New Project Inquiry</h2>
        <p style="margin:0 0 16px; color:#334155;">A new message has been submitted from your website contact form.</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px;">
          <tbody>
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; width:160px; color:#475569;">Name</td>
              <td style="padding:8px 12px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">Email</td>
              <td style="padding:8px 12px;">${escapeHtml(email)}</td>
            </tr>
            ${services?.length ? `<tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">Services</td>
              <td style="padding:8px 12px;">${services.map((s: string) => `<span style='display:inline-block;margin:2px 6px 2px 0;padding:4px 8px;border-radius:999px;background:#eef2ff;color:#3730a3;font-size:12px;'>${escapeHtml(s)}</span>`).join(" ")}</td>
            </tr>` : ""}
            ${budget ? `<tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">Budget</td>
              <td style="padding:8px 12px;">${escapeHtml(budget)}</td>
            </tr>` : ""}
            ${timeline ? `<tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">Timeline</td>
              <td style="padding:8px 12px;">${escapeHtml(timeline)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569; vertical-align:top;">Message</td>
              <td style="padding:8px 12px; white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">Submitted</td>
              <td style="padding:8px 12px;">${nowIso}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">IP</td>
              <td style="padding:8px 12px;">${escapeHtml(ip)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f8fafc; color:#475569;">User-Agent</td>
              <td style="padding:8px 12px; color:#475569;">${escapeHtml(ua)}</td>
            </tr>
          </tbody>
        </table>
      </div>`;

    const result = await resend.emails.send({
      from: `ApexByte <${fromEmail}>`,
      to: [recipient],
      replyTo: email,
      subject,
      text,
      html,
    });

    if ((result as any)?.error) {
      return Response.json({ error: (result as any).error?.message || "Failed to send" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json({ error: err?.message || "Unexpected error" }, { status: 500 });
  }
}
