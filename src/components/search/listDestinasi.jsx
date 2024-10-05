import Image from "next/image";
import { BtnBookmark } from "./btnBookmark";
import { BtnShare } from "./btnShare";

const myPic = new Array(
  "/curug.jpg",
  "/gunung.jpg",
  "/pantai.jpg",
  "/maukemana.jpg"
);

export function ListDestinasi({
  name,
  information,
  address,
  ticketPrice,
  restaurant,
}) {
  let randomPic = Math.floor(Math.random() * myPic.length);

  return (
    <div className="w-full font-inter font-light text-base text-emerald-800 flex flex-col sm:flex-row gap-2 bg-emerald-50  border-2 border-slate-200 relative ">
      <BtnBookmark />
      <BtnShare />
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

// export function ListDestinasi() {
//   return (
//     <div className="w-full font-inter font-light text-base text-emerald-800 flex flex-col sm:flex-row gap-2 bg-emerald-50  border-2 border-slate-200 relative ">
//       <BtnBookmark />
//       <BtnShare />
//       <div className="shrink-0 md:w-1/3 ">
//         <Image
//           src="/maukemana.jpg"
//           width={300}
//           height={300}
//           alt="pic maukemana"
//           style={{ height: "100%", width: "100%", objectFit: "cover" }}
//         />
//       </div>
//       <div className=" p-2 space-y-1">
//         <h2>
//           <span className="font-bold text-lg">Destinasi : </span> Keraton
//           Yogyakarta
//         </h2>
//         <p className="text-base text-justify">
//           <span className="font-bold text-lg  ">Informasi : </span> Keraton
//           Yogyakarta adalah istana resmi Kesultanan Yogyakarta yang masih
//           berfungsi hingga sekarang. Dibangun pada abad ke-18, kompleks keraton
//           ini terdiri dari beberapa bangunan dengan arsitektur tradisional Jawa.
//           Selain menjelajahi bangunan dan museum yang ada di dalamnya,
//           pengunjung juga bisa menikmati pertunjukan seni dan budaya yang
//           diadakan setiap hari di area keraton.
//         </p>
//         <p className="text-base ">
//           <span className="font-bold text-lg">Alamat : </span> Jl. Rotowijayan
//           Blok No. 1, Panembahan, Kraton, Kota Yogyakarta, Daerah Istimewa
//           Yogyakarta
//         </p>
//         <p className="text-base ">
//           <span className="font-bold text-lg">Harga Tiket : </span>IDR 12.500
//           untuk wisatawan lokal, IDR 15.000 untuk wisatawan mancanegara
//         </p>
//         <p className="text-base text-justify ">
//           <span className="font-bold text-lg">Restoran Terdekat : </span>
//           Bale Raos, terletak sekitar 300 meter dari Keraton Yogyakarta.
//           Restoran ini menawarkan berbagai menu tradisional Jawa dengan cita
//           rasa asli keraton. Menu spesial yang bisa dicoba termasuk nasi royokan
//           dan ayam suwir.
//         </p>
//       </div>
//     </div>
//   );
// }
