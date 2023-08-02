import { executeQuery } from "@/app/lib/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    var sql =
      "UPDATE board SET board_title=?, board_content=?, board_user_id=?, board_update_date=now() " +
      "WHERE board_id=?";
    var board_id = req.body.board_id;
    var board_title = req.body.title;
    var board_content = req.body.content;
    var board_user_id = req.body.user_id;
    try {
      let result = await executeQuery(sql, [
        board_title,
        board_content,
        board_user_id,
        board_id,
      ]);
      console.log(result);
      return res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
