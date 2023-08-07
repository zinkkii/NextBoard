import { executeQuery } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      req.body.user_id = session.user.email;
    }
    console.log(req.body.user_id);
    var sql =
      "INSERT INTO board(board_title, board_content, board_user_id) VALUES(?,?,?)";
    console.log(req.body);
    var board_title = req.body.title;
    var board_content = req.body.content;
    var board_user_id = req.body.user_id;
    try {
      let result = await executeQuery(sql, [
        board_title,
        board_content,
        board_user_id,
      ]);
      console.log(result);
      return res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
