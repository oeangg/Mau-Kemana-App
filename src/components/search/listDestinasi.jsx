import Image from "next/image";

export function ListDestinasi({
  name,
  information,
  address,
  ticketPrice,
  restaurant,
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-2 bg-BgColor2  border-2 border-BgColor1 ">
      <div className="shrink-0 md:w-1/3 ">
        <Image
          src="/maukemana.jpg"
          width={300}
          height={300}
          alt="pic maukemana"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className=" p-2 space-y-1">
        <h2 className="text-base">
          <span className="font-bold text-lg">Destinasi : </span> {name}
        </h2>
        <p className="text-base text-justify">
          <span className="font-bold text-lg ">Informasi : </span> {information}
        </p>
        <p className="text-base ">
          <span className="font-bold text-lg">Alamat : </span> {address}
        </p>
        <p className="text-base ">
          <span className="font-bold text-lg">Harga Tiket : </span>{" "}
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
