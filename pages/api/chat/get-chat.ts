import { getChat } from "@/lib/actions";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.body;
  const data = await getChat(id, userId);
  res.json({ data });
}
