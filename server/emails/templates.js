const BRAND_PRIMARY = '#6366f1'
const BRAND_CYAN = '#06b6d4'
const LINKEDIN = 'https://linkedin.com/in/ravi-shanker-joshi'

function base(content) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <meta name="color-scheme" content="light"/>
  <title>Ravi Joshi</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td align="center" style="padding:40px 16px;">
      <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;">

        <!-- Top gradient bar -->
        <tr>
          <td height="4" style="background:${BRAND_PRIMARY};border-radius:8px 8px 0 0;font-size:0;line-height:0;">&nbsp;</td>
        </tr>

        <!-- Card -->
        <tr>
          <td style="background:#ffffff;border-radius:0 0 12px 12px;box-shadow:0 4px 24px rgba(0,0,0,0.07);padding:40px 40px 32px;">

            <!-- Logo -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;border-bottom:1px solid #e2e8f0;padding-bottom:24px;">
              <tr>
                <td>
                  <span style="font-family:'Courier New',Courier,monospace;font-size:20px;font-weight:700;color:#1e293b;letter-spacing:-0.5px;">ravi</span><span style="font-family:'Courier New',Courier,monospace;font-size:20px;font-weight:700;color:${BRAND_PRIMARY};">.dev</span>
                </td>
              </tr>
            </table>

            ${content}

            <!-- Footer inside card -->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:32px;padding-top:24px;border-top:1px solid #e2e8f0;">
              <tr>
                <td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#94a3b8;line-height:1.6;">
                  Senior Full-Stack Developer &amp; AEM Specialist &nbsp;·&nbsp; Bengaluru, India<br/>
                  <a href="mailto:ravishankerjoshi20@gmail.com" style="color:${BRAND_PRIMARY};text-decoration:none;">ravishankerjoshi20@gmail.com</a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a href="${LINKEDIN}" style="color:${BRAND_PRIMARY};text-decoration:none;">LinkedIn</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Bottom note -->
        <tr>
          <td style="padding:20px 0 0;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#94a3b8;">
            © ${new Date().getFullYear()} Ravi Joshi. You're receiving this because you reached out via ravi.dev.
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

function visitorConfirmation({ name, message }) {
  const preview = message.length > 200 ? message.slice(0, 200) + '…' : message

  const content = `
    <!-- Label -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:8px;">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:${BRAND_CYAN};text-transform:uppercase;letter-spacing:2px;">
          Message Received ✓
        </td>
      </tr>
    </table>

    <!-- Headline -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:20px;">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:800;color:#0f172a;line-height:1.3;">
          Hey ${escHtml(name)}, thanks for reaching out! 👋
        </td>
      </tr>
    </table>

    <!-- Intro text -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#475569;line-height:1.75;">
          I've received your message and will get back to you within <strong style="color:#0f172a;">24–48 hours</strong>.
          Looking forward to connecting and exploring how we can work together!
        </td>
      </tr>
    </table>

    <!-- Message preview -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
      <tr>
        <td style="background:#f8fafc;border-left:3px solid ${BRAND_PRIMARY};border-radius:0 8px 8px 0;padding:16px 20px;">
          <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;color:${BRAND_PRIMARY};text-transform:uppercase;letter-spacing:1.5px;">
            Your message
          </p>
          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#475569;line-height:1.7;">
            ${escHtml(preview)}
          </p>
        </td>
      </tr>
    </table>

    <!-- CTA button -->
    <table border="0" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="background:${BRAND_PRIMARY};border-radius:8px;">
          <a href="${LINKEDIN}" target="_blank" style="display:inline-block;padding:12px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
            View My LinkedIn Profile →
          </a>
        </td>
      </tr>
    </table>

    <!-- Sign-off -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#475569;line-height:1.75;">
          Talk soon,<br/>
          <strong style="color:#0f172a;font-size:16px;">Ravi Joshi</strong><br/>
          <span style="font-size:13px;color:#94a3b8;">Senior Full-Stack Developer &amp; AEM Specialist</span>
        </td>
      </tr>
    </table>`

  return base(content)
}

function ownerNotification({ name, email, message }) {
  const ts = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const content = `
    <!-- Label -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:8px;">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:${BRAND_CYAN};text-transform:uppercase;letter-spacing:2px;">
          New Portfolio Enquiry
        </td>
      </tr>
    </table>

    <!-- Headline -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:800;color:#0f172a;line-height:1.3;">
          📬 ${escHtml(name)} sent you a message
        </td>
      </tr>
    </table>

    <!-- Sender info -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:24px;background:#f8fafc;border-radius:8px;padding:20px;">
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="padding-bottom:12px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">From</span><br/>
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#0f172a;">${escHtml(name)}</span>
              </td>
            </tr>
            <tr>
              <td style="padding-bottom:12px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Email</span><br/>
                <a href="mailto:${escHtml(email)}" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:${BRAND_PRIMARY};text-decoration:none;font-weight:600;">${escHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td>
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Received</span><br/>
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#475569;">${ts} IST</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Message -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
      <tr>
        <td>
          <p style="margin:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;">Message</p>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="background:#ffffff;border:1px solid #e2e8f0;border-left:3px solid ${BRAND_PRIMARY};border-radius:0 8px 8px 0;padding:18px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#334155;line-height:1.75;">
                ${escHtml(message).replace(/\n/g, '<br/>')}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Reply button -->
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${BRAND_PRIMARY};border-radius:8px;">
          <a href="mailto:${escHtml(email)}?subject=Re%3A+Your+message+on+ravi.dev&body=Hi+${encodeURIComponent(name)}%2C%0A%0AThanks+for+reaching+out!" style="display:inline-block;padding:12px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
            Reply to ${escHtml(name)} →
          </a>
        </td>
      </tr>
    </table>`

  return base(content)
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

module.exports = { visitorConfirmation, ownerNotification }
