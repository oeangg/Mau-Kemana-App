import Image from "next/image";
import { BtnShare } from "./btn.share";

const myPic = [
  "/curug.jpg",
  "/gunung.jpg",
  "/pantai.jpg",
  "/laut.jpg",
  "/udara.jpg",
];

export function ListBookmark({ city, name, information }) {
  let random = Math.floor(Math.random() * myPic.length);

  return (
    <div className="flex w-full max-w-72 flex-col gap-2 border-2 border-slate-100 bg-emerald-50 font-inter text-base font-light text-emerald-800">
      <div className="relative shrink-0">
        <Image
          src={myPic[random]}
          width={300}
          height={300}
          alt="pic maukemana"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 left-0 mb-8 ml-5 space-y-1">
          <p className="text-lg font-bold leading-5 text-slate-50 drop-shadow-lg">
            {name}
          </p>
          <p className="text-sm font-light text-slate-50">{city}</p>
        </div>
        <BtnShare />
      </div>
      <div className="space-y-1 p-3">
        <p className="text-justify text-sm font-light leading-5">
          <span className="text-base font-semibold">Informasi : </span>
          {information}
        </p>
      </div>
    </div>
  );
}
