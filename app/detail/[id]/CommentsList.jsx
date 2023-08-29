import { executeQuery } from "@/app/lib/db";

export default async function CommentsList(props) {
  console.log(props.board_idx);
  var sql =
    "SELECT comment_detail, comment_datetime, user_email FROM " +
    "comments AS C , user AS U , board AS B " +
    "WHERE C.board_id = B.board_id " +
    "AND C.user_idx = U.user_idx " +
    "AND C.board_id = ? ";
  const data = await executeQuery(sql, props.board_idx);
  const getdata = JSON.parse(JSON.stringify(data));
  console.log(getdata);
  return (
    <div>
      <p>댓글 목록 보여주는 부분</p>
      {getdata.map((comment, i) => {
        return (
          <>
            <p>
              {comment.comment_detail} - {comment.user_email}
            </p>
          </>
        );
      })}
    </div>
  );
}
