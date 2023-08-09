import { NextApiRequest, NextApiResponse } from "next";

import { getChats } from "@/lib/actions";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body;
  const data = await getChats(userId);
  res.json({ data });
}
