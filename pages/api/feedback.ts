import type { NextApiRequest, NextApiResponse } from "next";

import { transporter, mailOptions } from "@/config/nodemailer";

async function feedbackHandler(req: NextApiRequest, res: NextApiResponse) {
  const data = JSON.parse(req.body);
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Message from: " + data.name + " " + data.surname,
      text: data.message,
      html: `<h2>New Contact Message</h2>
            <h3>${data.message}</h3>
                   <p>${data.email}</p>`,
    });
    res.status(200).json({ message: "Done!" });
  } catch {
    res.status(400).json({ message: "Bad request" });
  }
}

export default feedbackHandler;