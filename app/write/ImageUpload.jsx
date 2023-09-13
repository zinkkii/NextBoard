"use client";

import axios from "axios";
import { useState } from "react";

export default function ImageUpload() {
  const [src, setSrc] = useState("");

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          let file = e.target.files[0];
          let filename = encodeURIComponent(file.name);
          await axios
            .post("/api/post/image", { filename: filename })
            .then((res) => {
              const presignedUrl = res.data;
              console.log(presignedUrl);
              uploadImageToS3(presignedUrl, file);
            })
            .catch((error) => console.log(error));
        }}
      />
    </>
  );
}

function uploadImageToS3(url, file) {
  console.log(url);
  console.log(file);
  axios
    .put(url, file)
    .then((res) => {
      console.log("uploadImageToS3 -----------------");
      console.log(res);
    })
    .catch((err) => {
      console.log("uploadImageToS3 Error-------------");
      console.log(err);
    });
}
