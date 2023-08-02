import { executeQuery } from "../lib/db";
import ListItem from "./ListItem";

export default async function List() {
  let data = await executeQuery("SELECT * FROM board", []);
  let getdata = JSON.parse(JSON.stringify(data));
  return (
    <div className="list-bg">
      <ListItem getdata={getdata} />
    </div>
  );
}
