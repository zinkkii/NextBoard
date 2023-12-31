"use client";

import { useRouter } from "next/navigation";

export default function DetailLink(props) {
  let router = useRouter();
  return (
    <>
      <div className="titleedit">
        <div>
          <h4>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push(`/detail/${props.board_id}`);
              }}
            >
              {props.board_title}
            </a>
          </h4>
        </div>
        {props.session != null &&
        props.session.user.email === props.board_user_id ? (
          <div
            style={{ cursor: "pointer " }}
            onClick={() => {
              router.push(`/edit/${props.board_id}`);
            }}
          >
            ✏️
          </div>
        ) : null}
      </div>
    </>
  );
}
