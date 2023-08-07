"use client";
import moment from "moment";
import DetailLink from "./DetailLink";
import axios from "axios";

export default function ListItem({ getdata, session }) {
  const clickDelete = (e, idx) => {
    console.log(idx);

    if (confirm("you yes?")) {
      console.log("YES!");
      axios
        .post("/api/post/delete", { idx })
        .then((res) => {
          console.log(res.data);
          e.target.parentElement.parentElement.style.opacity = 0;
          setTimeout(() => {
            e.target.parentElement.parentElement.style.display = "none";
          }, 1000);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("NO!");
    }
  };
  return (
    <>
      {getdata.map((board, i) => {
        return (
          <div className="list-item" key={i}>
            <DetailLink
              board_id={board.board_id}
              board_title={board.board_title}
              board_user_id={board.board_user_id}
              session={session}
            />
            <p>{board.board_content}</p>
            <p>by. {board.board_user_id}</p>
            <p>작성 일자: {moment(board.board_date).format("YY-MM-DD/dddd")}</p>
            {moment(board.board_date).isSame(board.board_update_date) ? null : (
              <p>
                --{moment(board.board_update_date).format("YY-MM-DD/dddd")} 에
                수정된 글입니다.
              </p>
            )}

            {session != null && session.user.email === board.board_user_id ? (
              <p className="trashstyle">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(e) => clickDelete(e, board.board_id)}
                >
                  🗑️삭제
                </a>
              </p>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
