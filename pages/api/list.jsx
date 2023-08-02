import { executeQuery } from "@/app/lib/db";

export default async function handler(req, res) {
  let result = await executeQuery("SELECT * FROM board", []);
  res.status(200).json(result);
}
