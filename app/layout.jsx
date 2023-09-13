import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DarkMode from "./DarkMode";
import { cookies } from "next/dist/client/components/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board",
  description: "Hello, Board by zinkki",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);

  const res = cookies().get("mode");
  console.log(res.value);

  return (
    <html lang="en">
      {/* <body className={inter.className} suppressHydrationWarning={true}> */}
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
        suppressHydrationWarning={true}
      >
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          {session ? <Link href="/write">Write</Link> : null}
          {session ? <h4>{session.user.email}</h4> : null}
          <LoginBtn session={session} />
          <DarkMode />
        </div>
        {children}
      </body>
    </html>
  );
}
