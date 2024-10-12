import Slide from "../components/Slide";
import Hero from "../components/Hero";
import { ListDestinasi } from "../components/ListDestinasi";
import { prisma } from "@/util/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Home() {
  const dataDestinasi = await prisma.destinasi.findMany({
    orderBy: {
      id: "desc",
    },
    take: 4,
  });
 

  return (
    <main>
      <Navbar />
      <Slide />
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10"></div>
      <h1 className="mb-4 text-center text-2xl font-bold text-emerald-700 sm:text-3xl">
        Destinasi Favorite
      </h1>
      <div className="flex w-full flex-wrap justify-center gap-3">
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
      <Footer />
    </main>
  );
}
