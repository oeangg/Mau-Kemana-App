"use client";

import { useRouter } from "next/navigation";

export function BtnAuthHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => router.push("/login")}
        className="font-lights w-28 rounded-xl border-2 border-emerald-500 bg-transparent px-5 py-2 text-base text-emerald-500 hover:bg-emerald-600 hover:text-slate-100 focus:outline-none"
      >
        Login
      </button>
      <button
        onClick={() => router.push("/register")}
        className="font-lights w-28 rounded-xl border-2 border-emerald-500 bg-emerald-500 px-5 py-2 text-base text-slate-50 hover:bg-emerald-100 hover:text-emerald-600 focus:outline-none"
      >
        Register
      </button>
    </div>
  );
}
