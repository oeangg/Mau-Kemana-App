"use client";

import Cookies from "js-cookie";
import { useAtomValue } from "jotai";
import { destinasiAtom } from "@/util/jotai";
import { AddNewDestinasi } from "@/action/add.destinasi";

export function BtnSave() {
  const destinations = useAtomValue(destinasiAtom);
  const userID = Cookies.get("userID");

  // console.log(userID);
  console.log(destinations);
  // function cetakconsol() {
  //   console.log(destinations);
  // }

  return (
    <form action={AddNewDestinasi}>
      {/* input untuk passing data dari atom berupa JSON string */}
      <input
        type="text"
        name="destinations"
        defaultValue={JSON.stringify(destinations)}
        hidden //hidden aja cm buat nampung data
      />

      <input
        type="text"
        name="user"
        defaultValue={userID}
        hidden //hidden aja cm buat nampung data
      />
      <button className="flex items-center justify-center gap-1 rounded-full border-2 border-emerald-500 bg-slate-50 px-3 py-2 text-xs font-normal text-emerald-700 duration-100 hover:bg-emerald-600 hover:text-emerald-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          dd
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125M11.05 6.75q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837t2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575t2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538T12.95 6.75q-.175.25-.425.375T12 7.25t-.525-.125t-.425-.375m.95 4.725"
          />
        </svg>
        Simpan
      </button>
    </form>
  );
}
