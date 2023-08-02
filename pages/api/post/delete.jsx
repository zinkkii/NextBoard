import { executeQuery } from "@/app/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sql = "DELETE FROM board WHERE board_id=?";
    var board_id = req.body.idx;
    try {
      let result = await executeQuery(sql, [board_id]);
      console.log(result);
      return res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
}
