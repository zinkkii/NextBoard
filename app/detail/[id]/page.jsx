import { executeQuery } from "@/app/lib/db";
import moment from "moment";
import Comments from "./Comments";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import CommentsList from "./CommentsList";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  let getdata = await executeQuery(
    `SELECT * FROM board WHERE board_id=${props.params.id}`,
    []
  );
  if (getdata[0] == null) {
    return notFound();
  }
  let board_info = getdata[0];
  console.log(props.params.id);
  const session = await getServerSession(authOptions);
  if (session) {
    console.log("------" + session.user.email);
  }
  return (
    <div className="list-bg">
      <h2>{board_info.board_title}</h2>
      <p>{board_info.board_content}</p>
      <p>by. {board_info.board_user_id}</p>
      <p>{moment(board_info.board_date).format("YY-MM-DD-dddd")}</p>
      <CommentsList board_idx={props.params.id} />
      {session == null ? (
        <></>
      ) : (
        <Comments email={session.user.email} board_idx={props.params.id} />
      )}
    </div>
  );
}
