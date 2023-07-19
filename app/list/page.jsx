import { executeQuery } from "../lib/db";

export default async function List() {
  let getdata = await executeQuery("SELECT * FROM board", []);

  return (
    <div className="list-bg">
      {getdata.map((board, i) => {
        return (
          <div className="list-item" key={i}>
            <p>{board.board_title}</p>
          </div>
        );
      })}
    </div>
  );
}
