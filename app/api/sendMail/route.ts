import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "נא למלא את כל השדות" }),
        { status: 400 }
      );
    }

    const messageWithBreaks = message.replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: "CBT Website <info@cbt-sharon.com>",
      to: "sharonnaor10@gmail.com",
      subject: "פנייה חדשה מהאתר",
      text: `שם מלא: ${name}\nטלפון: ${phone}\nאימייל: ${email}\nהודעה:\n${message}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; text-align:right;">
          <h2 style="color:#2c7a7b;">📩 התקבלה פנייה חדשה מהאתר</h2>
          <p><strong>שם מלא:</strong> ${name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>אימייל:</strong> ${email}</p>
          <p><strong>הודעה:</strong></p>
          <p>${messageWithBreaks}</p>
          <hr style="margin:20px 0;"/>
        </div>
      `,
    });

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: "שליחת המייל נכשלה", details: error }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
