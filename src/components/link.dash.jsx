"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function LinkDash() {
  const pathName = usePathname();
  return (
    <ul className="flex flex-row items-center gap-8 font-inter text-lg font-medium text-slate-400">
      <Link href="/search">
        <li
          className={
            pathName === "/search"
              ? "font-bold text-slate-50"
              : "text-slate-400"
          }
        >
          Search AI
        </li>
      </Link>
      <Link href="/bookmark">
        <li
          className={
            pathName === "/bookmark" || pathName === "/share"
              ? "font-bold text-slate-50"
              : "text-slate-400"
          }
        >
          Bookmark
        </li>
      </Link>
    </ul>
  );
}
