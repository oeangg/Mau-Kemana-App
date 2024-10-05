"use client";

import { generateDestinasi } from "@/action/generateAI";
import { BtnCari } from "@/components/search/btnSearch";
import { ListDestinasi } from "@/components/search/listDestinasi";
import { useActionState } from "react";

export default function SearchDestinasiPage() {
  const [state, formAction, pending] = useActionState(generateDestinasi, null);

  console.log(state);

  return (
    <section>
      <div className="w-full h-screen flex justify-center  items-start pt-5">
        <div className="max-w-5xl w-full flex flex-col justify-center items-center gap-4 p-3">
          <div className="w-full flex flex-col justify-center items-center">
            <h1>Mau Kemana?</h1>
            <form action={formAction} className="flex gap-2  w-full">
              <input
                type="text"
                name="city"
                id="city"
                className="w-full"
                placeholder="Cari kota yang akan kamu kunjungi..."
              />
              {/* <button
                className="border-slate-200 disabled:opacity-20 disabled:cursor-wait"
                disabled={pending}
              >
                Search
              </button> */}
              <BtnCari pending={pending} />
            </form>
          </div>

          <ListDestinasi />
          <ListDestinasi />

          {/* tampilkan AI  */}

          {/* {state && (
            <div className="w-full flex flex-col gap-4">
              <p className="text-center">{state.message}</p>
              {state.destinations &&
                state.destinations.map((destinasi, index) => (
                  <ListDestinasi key={index} {...destinasi} />
                ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
