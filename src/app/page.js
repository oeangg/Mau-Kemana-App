import Image from "next/image";
import Slide from "../components/Slide";
import FotoGerak from "../components/FotoGerak";
import Hero from "../components/Hero";
import { ListDestinasi } from "../components/ListDestinasi";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient()

export default async function Home() {
const dataDestinasi = await prisma.destinasi.findMany()
console.log(dataDestinasi)

  return (
    <main>
      <FotoGerak />
      <Slide />
        <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col"></div>
        <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 mb-4">
          Destinasi Favorite
        </h1>
        <div className="flex max-h-screen w-full flex-wrap justify-center gap-3">
              {dataDestinasi?.map((item, index) => (
                <ListDestinasi
                  key={index}
                  name={item.name}
                  city={item.city}
                  information={item.informasi}
                />
              ))}
        </div>
      <Hero />
    </main>
  );
}

