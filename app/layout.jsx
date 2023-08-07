import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board",
  description: "Hello, Board by zinkki",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          {session != null ? <Link href="/write">Write</Link> : null}
          <LoginBtn session={session} />
        </div>
        {children}
      </body>
    </html>
  );
}
