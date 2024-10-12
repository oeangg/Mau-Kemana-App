import { ListBookmark } from "@/components/bookmark/list.data";

import { GetDestinasibyUser } from "@/action/get.destinasi";

export async function SelectBookmark({ query }) {
  const userId = "cm209mgy10000ex1aq4w5h9a6";

  const dataDestinasi = await GetDestinasibyUser(userId, query);

  return (
    <div className="flex max-h-screen w-full flex-wrap justify-center gap-3 overflow-x-scroll">
      {dataDestinasi.map((item, index) => (
        <ListBookmark
          key={index}
          // id={item.id}
          name={item.name}
          city={item.city}
          information={item.informasi}
        />
      ))}
    </div>
  );
}
