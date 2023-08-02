import { executeQuery } from "@/app/lib/db";
import moment from "moment";

export default async function Detail(props) {
  let getdata = await executeQuery(
    `SELECT * FROM board WHERE board_id=${props.params.id}`,
    []
  );
  let board_info = getdata[0];

  return (
    <div className="list-bg">
      <h2>{board_info.board_title}</h2>
      <p>{board_info.board_content}</p>
      <p>by. {board_info.board_user_id}</p>
      <p>{moment(board_info.board_date).format("YY-MM-DD/dddd")}</p>
    </div>
  );
}
