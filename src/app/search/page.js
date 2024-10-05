"use client";

import { generateDestinasi } from "@/action/generateAI";
import { BtnCari } from "@/components/search/btnSearch";
import { ListDestinasi } from "@/components/search/listDestinasi";
import { useActionState, useState } from "react";

export default function SearchDestinasiPage() {
  const [state, formAction, pending] = useActionState(generateDestinasi, null);

  return (
    <section>
      <div className="w-full h-screen flex justify-center  items-start pt-5">
        <div className="max-w-5xl w-full flex flex-col justify-center items-center gap-4 p-3">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-poppins text-3xl font-bold text-emerald-600">
              Mau Kemana?
            </h1>
            <form
              action={formAction}
              className="flex gap-2 justify-center items-center  w-full  relative "
            >
              <input
                type="text"
                name="city"
                id="city"
                className="w-full rounded-full font-poppins bg-slate-50 px-5 py-3 border-2 text-lg font-light border-slate-200 focus:outline-none focus:outline-emerald-500 placeholder:text-base"
                placeholder="Cari kota yang akan kamu kunjungi..."
              />
              <BtnCari pending={pending} />
            </form>

            <p className="text-center font-poppins text-lg font-normal text-emerald-800">
              {pending ? "Please wait ......" : " "}
            </p>
          </div>

          {/* <ListDestinasi />
          <ListDestinasi /> */}

          {/* tampilkan AI  */}

          {state && (
            <div className="w-full flex flex-col gap-4 mt-5">
              <p
                className={
                  state.status.includes("NOT")
                    ? `text-center font-poppins text-lg font-light text-red-700`
                    : `text-center font-poppins text-lg font-light text-emerald-800`
                }
              >
                {state.message}
              </p>
              {state.destinations &&
                state.destinations.map((destinasi, index) => (
                  <ListDestinasi key={index} {...destinasi} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
