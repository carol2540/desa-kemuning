const nodeMailer = require("nodemailer");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      message: "Method not allowed",
    });

  // Set mailing logic
  const transporter = nodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "desakemuning.site@gmail.com",
      pass: "qhmjdljpyvvrbgdr",
    },
  });

  const mailData = {
    from: "noreply@desa-kemuning.com",
    to: "desakemuning.site@gmail.com",
    subject: "Notifikasi Layanan Pengaduan Masyarakat Desa Kemuning Legok Tangerang",
    html: `<div style="whitespace: pre-wrap; overflow-wrap: break-word">
      <div style="margin-bottom: 1rem;">Halo Admin Desa Kemuning!</div>

      <div style="margin-bottom: .5rem;">Terdapat pesan pengaduan dari <span style="font-weight: bold">${req?.body?.inputName || "[Error]"}</span> dengan pesan sebagai berikut:</div>
      <pre style="margin-bottom: 1rem; font-weight: bold;">${req?.body?.message || "[Error]"}</pre>
      
      <div style="margin-bottom: 1rem;">Untuk meningkatkan pelayanan Desa Kemuning Legok segeralah membalas pesan berikut dengan memperhatikan aturan dan etika yang berlaku.</div>
    </div>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error)
      return res.status(500).json({
        message: `Send email failed: ${error?.message ?? "Internal Server Error"}`,
      });

      const response = {
        message: `Pesan berhasil terkirim dengan ID: ${info.messageId}`
      }
    return res.status(200).json(response);
  });
}
