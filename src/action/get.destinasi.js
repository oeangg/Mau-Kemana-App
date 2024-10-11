import { prisma } from "@/util/prisma";

export async function GetDestinasibyUser() {
  const userID = "cm209mgy10000ex1aq4w5h9a6";
  const getDestinasi = await prisma.destinasi.findMany({
    where: {
      userId: userID,
    },
  });

  return getDestinasi;
}
