import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  try {
    await resend.emails.send({
      from: `${name} <web@bahiaconnect.com>`,
    //   to: ["resend@gmail.com"],
      subject: "Contact",
      html: `
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Message</title>
          </head>
          <body>
            <h1>Detalles de Contacto, Pagina web bahia connect</h1>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Numero:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: "Failed to send email." });
  }
}
