"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Comments(props) {
  useEffect(() => {
    console.log(props.email);
    console.log(props.board_idx);
  }, []);
  const [comment, setComment] = useState("");

  const writeComment = () => {
    axios
      .post("/api/post/commentwrite", {
        board_idx: props.board_idx,
        user: props.email,
        comment: comment,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>댓글 작성 보여줄 부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={writeComment}>댓글 전송</button>
    </div>
  );
}
