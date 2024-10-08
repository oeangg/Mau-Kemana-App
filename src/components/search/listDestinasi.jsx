import Image from "next/image";

const myPic = [
  "/curug.jpg",
  "/gunung.jpg",
  "/pantai.jpg",
  "/laut.jpg",
  "/udara.jpg",
];

export function ListDestinasi({
  no,
  name,
  information,
  address,
  ticketPrice,
  restaurant,
}) {
  let randomPic = Math.floor(Math.random() * myPic.length);

  return (
    <div className="w-full font-inter font-light text-base text-emerald-800 flex flex-col sm:flex-row gap-2 bg-emerald-50  border-2 border-slate-100 relative">
      <div className="absolute flex top-0 left-0 ml-4 mt-4 w-7 h-7 rounded-full bg-slate-50  ">
        <p className=" m-auto font-normal  text-slate-500 text-base">{no}</p>
      </div>
      <div className="shrink-0 md:w-1/3 ">
        <Image
          src={myPic[randomPic]}
          width={300}
          height={300}
          alt="pic maukemana"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className=" p-2 space-y-1">
        <h2>
          <span className="font-bold text-lg">Destinasi : </span> {name}
        </h2>
        <p className="text-base text-justify">
          <span className="font-bold text-lg  ">Informasi : </span>{" "}
          {information}
        </p>
        <p className="text-base ">
          <span className="font-bold text-lg">Alamat : </span> {address}
        </p>
        <p className="text-base ">
          <span className="font-bold text-lg">Harga Tiket : </span>
          {ticketPrice}
        </p>
        <p className="text-base text-justify ">
          <span className="font-bold text-lg">Restoran Terdekat : </span>
          {restaurant}
        </p>
      </div>
    </div>
  );
}
