import { clearChats } from "@/lib/actions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body;
  await clearChats(userId);
  res.json({ success: true });
}
