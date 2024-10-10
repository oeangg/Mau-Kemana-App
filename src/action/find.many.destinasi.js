"use server";
import { prisma } from "@/util/prisma";

export async function FindManyDestinasi(_prevState, formData) {
  const destinasi = formData.get("destinasi");
  const userID = "cm209mgy10000ex1aq4w5h9a6";

  try {
    //tampilkan data destinasi dimana kota / name = destinasi
    //and user = userid
    const findDestinasi = await prisma.destinasi.findMany({
      where: {
        OR: [
          {
            city: {
              contains: destinasi,
              mode: "insensitive",
            },
          },
          {
            name: {
              contains: destinasi,
              mode: "insensitive",
            },
          },
        ],
        AND: {
          userId: userID,
        },
      },
    });

    if (!findDestinasi) {
      console.log("not found");
    }

    return findDestinasi;
  } catch (error) {
    console.log(error);
  }
}
