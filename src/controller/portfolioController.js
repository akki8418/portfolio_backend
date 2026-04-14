const nodemailer = require("nodemailer");

const addvisitor = async (req, res) => {
  try {
    const { name, email, description } = req.body;

    // 1. Nodemailer Transporter Setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rd0930752@gmail.com", // Apni Gmail ID dalein
        pass: "cztt qefa vwrz acip", // Google App Password (16 digit)
      },
    });
    // 2. Email Content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "pandeyankit6112004@gmail.com",
      subject: `🚀 New Portfolio Inquiry from ${name}`,
      html: `
  <div style="margin:0;padding:0;background:#f3f4f6;font-family:Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <!-- Card -->
          <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;padding:30px;border:1px solid #e5e7eb;">
            
            <!-- Header -->
            <tr>
              <td>
                <h2 style="margin:0;color:#111827;">📩 New Contact Message</h2>
                <p style="margin:6px 0 20px;color:#6b7280;font-size:14px;">
                  You have received a new message from your portfolio website.
                </p>
                <hr style="border:none;border-top:1px solid #e5e7eb;">
              </td>
            </tr>

            <!-- User Details -->
            <tr>
              <td style="padding-top:20px;">
                <table width="100%">
                  <tr>
                    <td style="padding-bottom:15px;">
                      <span style="font-size:12px;color:#9ca3af;">Name</span><br/>
                      <strong style="font-size:16px;color:#111827;">${name}</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:15px;">
                      <span style="font-size:12px;color:#9ca3af;">Email</span><br/>
                      <strong style="font-size:16px;color:#2563eb;">${email}</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding-top:10px;">
                <div style="
                  background:#f9fafb;
                  border:1px solid #e5e7eb;
                  border-radius:10px;
                  padding:18px;
                  font-size:15px;
                  color:#374151;
                  line-height:1.6;
                ">
                  ${description}
                </div>
              </td>
            </tr>

            <!-- Button -->
            <tr>
              <td align="center" style="padding-top:25px;">
                <a href="mailto:${email}" style="
                  display:inline-block;
                  padding:12px 22px;
                  background:#111827;
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:6px;
                  font-size:14px;
                  font-weight:500;
                ">
                  Reply to ${name}
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top:30px;text-align:center;">
                <p style="font-size:12px;color:#9ca3af;">
                  ⚡ Sent via your portfolio contact form
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>

  </div>
  `,
    };

    // 3. Email Send karein
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res
      .status(500)
      .json({ message: "Error sending email", error: error.message });
  }
};

module.exports = { addvisitor };
