import { executeQuery } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Edit(props) {
  const session = await getServerSession(authOptions);
  console.log("-----------");
  console.log(session);
  console.log("-----------");
  let getdata = await executeQuery(
    `SELECT * FROM board WHERE board_id=${props.params.id}`
  );
  let board_info = getdata[0];

  return (
    <div className="list-bg">
      {session != null ? (
        <div className="p-20">
          <h4>글 수정</h4>
          <form action="/api/post/edit" method="POST">
            <input
              type="hidden"
              name="board_id"
              defaultValue={props.params.id}
            />
            <input name="title" defaultValue={board_info.board_title} />
            <input name="content" defaultValue={board_info.board_content} />
            <input name="user_id" defaultValue={board_info.board_user_id} />
            <button type="submit">수정</button>
          </form>
        </div>
      ) : (
        <div className="p-20">
          <h4>로그인 하세요</h4>
        </div>
      )}
    </div>
  );
}
