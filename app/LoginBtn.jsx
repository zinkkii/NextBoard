"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginBtn(props) {
  const user = props.session;

  return (
    <>
      {user === null ? (
        <button onClick={() => signIn()}>LogIn</button>
      ) : (
        <button onClick={() => signOut()}>LogOut</button>
      )}
    </>
  );
}
