"use server";

import { prisma } from "@/util/prisma";

export async function AddNewDestinasi(formData) {
  // ambil data dari formdata parse ke bentuk JSON
  const dataDestinasi = JSON.parse(formData?.get("destinations"));
  const userID = formData.get("user");

  console.log(userID);
  console.log(dataDestinasi);

  try {
    const newData = await Promise.all(
      dataDestinasi?.map(async (item) => {
        await prisma.destinasi.create({
          data: {
            name: item.name,
            city: item.city,
            informasi: item.information,
            address: item.address,
            price: item.ticketPrice,
            restaurant: item.restaurant,
            userId: userID, //isi sementara, next harus di ubah, userId diambil dari data user
          },
        });
      }),
    );
    if (newData) {
      // return Response.json(
      //   { message: "Data berhasil di tambahkan" },
      //   { status: 201 },
      // );
      console.log("data berhasil di tambahkan");
    }
  } catch (error) {
    console.log(error);
  }
}
