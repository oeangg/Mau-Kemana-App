"use client";

import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <h1>Hello Codefix</h1>
      <button onClick={() => toast.success("halo test toast")}>KLik</button>
    </div>
  );
}
