import { executeQuery } from "@/app/lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    var hash = await bcrypt.hash(req.body.password, 10);
    var sql = "INSERT INTO user(user_email, user_name, user_pw) VALUES(?,?,?)";
    var user_email = req.body.email;
    var user_name = req.body.name;
    var user_pw = hash;

    try {
      let result = await executeQuery(sql, [user_email, user_name, user_pw]);
      console.log(result);
      return res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
    }
  }
}
