"use client";
export default function Error({ error, reset }) {
  return (
    <>
      <h1>Error !!!!!</h1>
      <button onClick={() => reset()}>Button click-click</button>
    </>
  );
}
