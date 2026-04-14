const { Resend } = require("resend");

const resend = new Resend("re_PGjHc8pz_DDLKT6bVMhDin5Cc3vYV4J9y");

const addvisitor = async (req, res) => {
  try {
    const { name, email, description } = req.body;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "pandeyankit6112004@gmail.com",
      subject: `🚀 New Portfolio Inquiry from ${name}`,
      html: `
<div style="margin:0;padding:0;background:#0b0f19;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Outer Card -->
        <table width="650" cellpadding="0" cellspacing="0" style="background:#111827;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:30px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:24px;">📩 New Portfolio Message</h1>
              <p style="margin:8px 0 0;color:#e0e7ff;font-size:14px;">
                Someone just contacted you via your portfolio
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;color:#e5e7eb;">

              <p style="font-size:14px;color:#9ca3af;margin-bottom:20px;">
                You received a new inquiry:
              </p>

              <!-- Name -->
              <div style="margin-bottom:15px;">
                <div style="font-size:12px;color:#6b7280;">NAME</div>
                <div style="font-size:16px;color:#ffffff;font-weight:bold;">${name}</div>
              </div>

              <!-- Email -->
              <div style="margin-bottom:15px;">
                <div style="font-size:12px;color:#6b7280;">EMAIL</div>
                <div style="font-size:16px;color:#60a5fa;font-weight:bold;">${email}</div>
              </div>

              <!-- Message Box -->
              <div style="margin-top:20px;">
                <div style="font-size:12px;color:#6b7280;margin-bottom:8px;">MESSAGE</div>
                <div style="background:#1f2937;padding:15px;border-radius:10px;color:#e5e7eb;line-height:1.6;">
                  ${description}
                </div>
              </div>

              <!-- CTA -->
              <div style="text-align:center;margin-top:30px;">
                <a href="mailto:${email}" 
                  style="display:inline-block;padding:12px 24px;background:#6366f1;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:bold;">
                  Reply Now →
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;text-align:center;padding:15px;">
              <p style="margin:0;font-size:12px;color:#6b7280;">
                🚀 Sent from your portfolio contact system
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</div>
      `,
    });

    res.status(200).json({
      message: "Email sent successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Email failed",
      error: error.message,
    });
  }
};

module.exports = { addvisitor };
