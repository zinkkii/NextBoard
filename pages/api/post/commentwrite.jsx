import { executeQuery } from "@/app/lib/db";

export default async function handler(req, res) {
  if (req.method == "POST") {
    var board_idx = req.body.board_idx;
    var user_email = req.body.user;
    var comment_detail = req.body.comment;
    var findUserSql = "SELECT user_idx FROM user WHERE user_email=?";
    try {
      var user_idx = await executeQuery(findUserSql, user_email);
      console.log(user_idx[0].user_idx);
    } catch (error) {
      console.log(error);
    }
    const sql =
      "INSERT INTO comments(board_id, user_idx, comment_detail) VALUES(?,?,?)";
    try {
      let result = await executeQuery(sql, [
        board_idx,
        user_idx[0].user_idx,
        comment_detail,
      ]);
      console.log(result);
      return res.send(302, `/detail/${board_idx}`);
    } catch (error) {
      console.log(error);
    }
  }
}
