import { ShareButton } from "@/components/bookmark/btn.share.medsos";
import { prisma } from "@/util/prisma";
import Image from "next/image";
import { cookies } from "next/headers";

const myPic = [
  "/curug.jpg",
  "/gunung.jpg",
  "/pantai.jpg",
  "/laut.jpg",
  "/udara.jpg",
];

export default async function ShareDestinasiPage({ searchParams }) {
  // console.log(searchParams.id);

  const userID = cookies().get("userID")?.value; // "cm209mgy10000ex1aq4w5h9a6";
  const destinasiName = searchParams.name;
  const destinasiCity = searchParams.city;

  let randomPic = Math.floor(Math.random() * myPic.length);

  const cariDestinasi = await prisma.destinasi.findFirst({
    where: {
      AND: [
        {
          name: destinasiName,
        },
        {
          userId: userID,
        },
      ],
    },
  });

  return (
    <div className="relative mx-auto flex w-full max-w-5xl flex-col">
      <ShareButton name={destinasiName} city={destinasiCity} />
      <h1 className="text center mb-3 w-full text-xl font-normal text-emerald-600">
        Yuk bagikan destinasi favoritemu ke media social!
      </h1>
      <div className="flex w-full flex-col gap-2 border-2 border-slate-100 bg-emerald-50 font-inter text-base font-light text-emerald-800 sm:flex-row">
        <div className="shrink-0 md:w-1/3">
          <Image
            // src={myPic[randomPic]}
            src={myPic[randomPic]}
            width={300}
            height={300}
            alt="pic maukemana"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-1 p-3">
          <div className="mb-4 -space-y-1 font-poppins">
            <h1 className="text-xl font-bold">{cariDestinasi.name}</h1>
            <p className="text-lg font-light">{cariDestinasi.city}</p>
          </div>
          <p className="text-justify text-base">
            <span className="text-lg font-bold">Informasi : </span>{" "}
            {cariDestinasi.informasi}
          </p>
          <p className="text-base">
            <span className="text-lg font-bold">Alamat : </span>{" "}
            {cariDestinasi.address}
          </p>
          <p className="text-base">
            <span className="text-lg font-bold">Harga Tiket : </span>
            {cariDestinasi.price}
          </p>
          <p className="text-justify text-base">
            <span className="text-lg font-bold">Restoran Terdekat : </span>
            {cariDestinasi.restaurant}
          </p>
        </div>
      </div>
    </div>
  );
}
