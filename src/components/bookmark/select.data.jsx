import { ListBookmark } from "@/components/bookmark/list.data";
import { cookies } from "next/headers";
import { GetDestinasibyUser } from "@/action/get.destinasi";

export async function SelectBookmark({ query }) {
  const userID = cookies().get("userID")?.value;

  const dataDestinasi = await GetDestinasibyUser(userID, query);

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
