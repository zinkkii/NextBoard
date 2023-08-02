import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board",
  description: "Hello, Board by zinkki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
