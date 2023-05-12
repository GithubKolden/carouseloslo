import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import Order from "../../pages/order";
import { sendEmail } from "../../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "vinvu2000@hotmail.com",
    subject: "Welcome to HELL",
    html: render(Order()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}