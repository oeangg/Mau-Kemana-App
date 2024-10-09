"use client";

import { useAtomValue } from "jotai";
import { destinasiAtom } from "@/util/jotai";

export default function SingleDestinasi({}) {
  const destinasi = useAtomValue(destinasiAtom);

  console.log(destinasi);
  return (
    <div>
      <h1>tampilkan Destinasi</h1>
      <div className="space-y-3">
        {destinasi.map((item, index) => (
          <div key={index}>
            <p>No : {item.no}</p>
            <p>Nama : {item.name}</p>
            <p>Informasi : {item.information}</p>
            <p>Alamat : {item.address}</p>
            <p>Restaurant : {item.restaurant}</p>
            <p>Tikect : {item.ticketPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
