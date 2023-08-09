import { removeChat } from "@/lib/actions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.body;
  await removeChat({ id, userId });
  res.json({ success: true });
}
