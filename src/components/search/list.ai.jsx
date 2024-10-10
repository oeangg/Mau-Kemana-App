import Image from "next/image";

const myPic = [
  "/curug.jpg",
  "/gunung.jpg",
  "/pantai.jpg",
  "/laut.jpg",
  "/udara.jpg",
];

export function ListDestinasiAi({
  no,
  city,
  name,
  information,
  address,
  ticketPrice,
  restaurant,
}) {
  let random = Math.floor(Math.random() * myPic.length);

  return (
    <div className="relative flex w-full flex-col gap-2 border-2 border-slate-100 bg-emerald-50 font-inter text-base font-light text-emerald-800 sm:flex-row">
      <div className="absolute left-0 top-0 ml-4 mt-4 flex h-7 w-7 rounded-full bg-slate-50">
        <p className="m-auto text-base font-normal text-slate-500">{no}</p>
      </div>
      <div className="shrink-0 md:w-1/3">
        <Image
          // src={myPic[randomPic]}
          src={myPic[random]}
          width={300}
          height={300}
          alt="pic maukemana"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="space-y-1 p-2">
        <h2>
          <span className="text-lg font-bold">Destinasi : </span> {name} ,{city}
        </h2>
        <p className="text-justify text-base">
          <span className="text-lg font-bold">Informasi : </span> {information}
        </p>
        <p className="text-base">
          <span className="text-lg font-bold">Alamat : </span> {address}
        </p>
        <p className="text-base">
          <span className="text-lg font-bold">Harga Tiket : </span>
          {ticketPrice}
        </p>
        <p className="text-justify text-base">
          <span className="text-lg font-bold">Restoran Terdekat : </span>
          {restaurant}
        </p>
      </div>
    </div>
  );
}
