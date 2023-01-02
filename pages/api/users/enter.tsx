import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandlers from "../../../libs/server/withHandlers";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.json({ ok: true });
  res.status(200).end();
}

export default withHandlers("POST", handler);
