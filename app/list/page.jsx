import { executeQuery } from "../lib/db";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

//export const revalidate = 60; //누가 방문시 60초동안 페이지 캐싱,60초 지나면 다시 캐싱

export const dynamic = "force-dynamic";

export default async function List() {
  const session = await getServerSession(authOptions);

  let data = await executeQuery("SELECT * FROM board", []);
  let getdata = JSON.parse(JSON.stringify(data));
  return (
    <div className="list-bg">
      <ListItem getdata={getdata} session={session} />
    </div>
  );
}
