import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'

type ResponseData = {
  success: boolean;
  message: string;
  received?: {
    name: string;
    email: string;
    body: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Please use POST.",
    });
  }

  const { name, email, subject, body } = req.body;

  if (!name || !email || !subject || !body ) {
    return res.status(400).json({
      success: false,
      message: "Missing one or more required fields: name, email, body.",
    });
  }
  
  await axios.post(
    'https://script.google.com/macros/s/AKfycbyI0QHTyFDAbiWWCUPv7MvXuTcNYwYTnPVz2EKMARvgBRFcUYysYrCyIZnsoOhZ8dOX/exec',
    {
      sk: process.env.NEXT_PUBLIC_SK,
      subject,
      body: `
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
    <p><strong>New Contact Message</strong></p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Message:</strong><br>${body.replace(/\n/g, '<br>')}</p>
  </div>
`

    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  
   console.log('hgj')

  return res.status(200).json({
    success: true,
    message: "Data received successfully.",
    received: { name, email, body},
  });
}
