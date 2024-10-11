"use client";

import { FindManyDestinasi } from "@/action/find.many.destinasi";

import { ListBookmark } from "@/components/bookmark/list";
import { useActionState } from "react";

export default function BookmarkPage() {
  const [state, formAction, pending] = useActionState(FindManyDestinasi, null);

  return (
    <section>
      <div className="flex h-screen w-full items-start justify-center pt-5">
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-3">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="w-full text-center">
              <h1 className="font-poppins text-2xl font-semibold text-emerald-600">
                Halaman Bookmark
              </h1>
            </div>
            <form
              action={formAction}
              className="relative flex w-full items-center justify-center gap-2"
            >
              <input
                type="text"
                name="destinasi"
                id="destinasi"
                className="w-full rounded-full border-2 border-slate-200 bg-slate-50 px-5 py-3 font-poppins text-lg font-light placeholder:text-base focus:outline-none focus:outline-emerald-500"
                placeholder="Cari destinasi favorit..."
              />
            </form>
          </div>
          <div className="flex max-h-screen w-full flex-wrap justify-center gap-3 overflow-scroll">
            {state?.map((item, index) => (
              <ListBookmark
                key={index}
                id={item.id}
                name={item.name}
                city={item.city}
                information={item.informasi}
              />
            ))}
          </div>
          {/* tampilkan data bookmark  */}
        </div>
      </div>
    </section>
  );
}
