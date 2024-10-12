import { prisma } from "@/util/prisma";

export async function GetDestinasibyUser(userID, query) {
  const getDestinasi = await prisma.destinasi.findMany({
    where: {
      OR: [
        {
          city: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
      AND: {
        userId: userID,
      },
    },
  });

  return getDestinasi;
}
