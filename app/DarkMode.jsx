"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DarkMode() {
  let router = useRouter();
  const [emoji, setEmoji] = useState("🌙");
  useEffect(() => {
    const cookievalue = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (cookievalue === "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  }, []);

  return (
    <span
      onClick={() => {
        let cookie_v = ("; " + document.cookie)
          .split(`; mode=`)
          .pop()
          .split(";")[0];
        if (cookie_v == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          setEmoji("🌙");
          router.refresh();
        } else {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          setEmoji("🌞");
          router.refresh();
        }
      }}
    >
      {emoji}
    </span>
  );
}
