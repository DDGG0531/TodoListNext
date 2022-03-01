// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface ITodo {
  message: string;
  finished: boolean;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  res.status(200).json([{ message: "測試用", finished: false, id: "1" }]);
}
