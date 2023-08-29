"use client";
import axios from "axios";

export default function ImageUpload() {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          let file = e.target.files[0];
          let filename = encodeURIComponent(file.name);
          console.log(filename);
          axios
            .post("/api/post/image", { filename })
            .then((res) => {
              console.log(res);
              const formData = new FormData();
              Object.entries({ ...res.fields, file }).forEach(
                ([key, value]) => {
                  formData.append(key, value);
                }
              );
              axios.post(res.url, { formData }).then((res) => {
                console.log(res);
              });
            })
            .catch((err) => console.log(err));
        }}
      />
    </>
  );
}
