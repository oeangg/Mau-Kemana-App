"use client";

import { generateDestinasi } from "@/action/generateAI";
import { useActionState } from "react";

export default function SearchDestinasiPage() {
  const [state, formAction, pending] = useActionState(generateDestinasi, null);

  console.log(state);
  return (
    <section>
      <div className="w-full h-screen flex justify-center  items-start pt-5">
        <div className="max-w-5xl w-full  flex flex-col justify-center items-center gap-2">
          <h1>Mau Kemana?</h1>
          <form action={formAction} className="flex gap-2  w-full">
            <input
              type="text"
              name="city"
              id="city"
              className="w-full"
              placeholder="Cari kota yang akan kamu kunjungi..."
            />
            <button
              className="border-slate-200 disabled:opacity-20 disabled:cursor-wait"
              disabled={pending}
            >
              Search
            </button>
          </form>

          {/* Test style card destinasi*/}
          <div>
            <div className=" space-y-3 ">
              <h2>
                <span className="font-bold text-lg">Nama : </span>
              </h2>
              <p>
                <span className="font-bold text-lg">Informasi : </span>
              </p>
              <p>
                <span className="font-bold text-lg">Alamat : </span>
              </p>
              <p>
                <span className="font-bold text-lg">Harga Tiket : </span>
              </p>
              <p>
                <span className="font-bold text-lg">Restoran Terdekat : </span>
              </p>
              <hr />
            </div>
          </div>

          {/* tampilkan AI 
          {state && (
            <div>
              {state.destinations.map((destination, index) => (
                <div key={index} className=" space-y-3 ">
                  <h2>
                    <span className="font-bold text-lg">Nama : </span>
                    {destination.name}
                  </h2>
                  <p>
                    <span className="font-bold text-lg">Informasi : </span>
                    {destination.information}
                  </p>
                  <p>
                    <span className="font-bold text-lg">Alamat : </span>
                    {destination.address}
                  </p>
                  <p>
                    <span className="font-bold text-lg">Harga Tiket : </span>{" "}
                    {destination.ticketPrice}
                  </p>
                  <p>
                    <span className="font-bold text-lg">
                      Restoran Terdekat :{" "}
                    </span>{" "}
                    {destination.restaurant}
                  </p>
                  <hr />
                </div>
              ))}
            </div>
          )}
            */}
        </div>
      </div>
    </section>
  );
}
