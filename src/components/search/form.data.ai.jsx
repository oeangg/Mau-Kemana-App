"use client";

import { GenerateDestinasibyAI } from "@/action/search.ai";
import { BtnSearch } from "@/components/search/btn.search";
import { ListDestinasiAi } from "@/components/search/list.ai";
import { useActionState, useEffect } from "react";
import { useSetAtom } from "jotai";
import { destinasiAtom } from "@/util/jotai";
import { BtnSave } from "@/components/search/btn.save";

export function FormDestinasiAi() {
  const [state, formAction, pending] = useActionState(
    GenerateDestinasibyAI,
    null,
  );
  const dataDestinasiAtom = useSetAtom(destinasiAtom);

  useEffect(() => {
    if (state?.destinations) {
      dataDestinasiAtom(state.destinations);
    }
  }, [state]);

  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="w-full text-center">
          <h1 className="font-poppins text-3xl font-bold text-emerald-600">
            Mau Kemana?
          </h1>
          <p className="font-inter text-xs font-extralight text-emerald-700">
            Tanya AI carikan destinasi wisata favorit berdasarkan Kota
          </p>
        </div>
        <form
          action={formAction}
          className="relative flex w-full items-center justify-center gap-2"
        >
          <input
            type="text"
            name="city"
            id="city"
            className="w-full rounded-full border-2 border-slate-200 bg-slate-50 px-5 py-3 font-poppins text-lg font-light text-emerald-700 placeholder:text-base focus:outline-none focus:outline-emerald-500"
            placeholder="Cari kota yang akan kamu kunjungi..."
          />
          <BtnSearch pending={pending} />
        </form>

        <p className="text-center font-poppins text-lg font-normal text-emerald-800">
          {pending ? "Please wait ......" : " "}
        </p>
      </div>

      {/* tampilkan AI  */}

      {state && (
        <div className="mt-5 flex w-full flex-col gap-4">
          <p
            className={
              state.status.includes("NOT")
                ? `text-center font-poppins text-base font-light text-red-700`
                : `text-center font-poppins text-base font-light leading-6 text-emerald-800`
            }
          >
            {state.message}
          </p>

          {state.destinations && (
            <div className="flex w-full flex-col gap-2 border-2 border-slate-100 p-2">
              <div className="flex items-center justify-between">
                <p className="text-center font-poppins text-lg font-medium text-emerald-800">
                  Berikut destinasi wisata yang wajib di kunjungi
                </p>
                <BtnSave />
              </div>
              {state.destinations.map((destinasi, index) => (
                <ListDestinasiAi key={index} {...destinasi} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
