"use server";

import { prisma } from "@/util/prisma";

export async function AddNewDestinasi(formData) {
  // ambil data dari formdata parse ke bentuk JSON
  const dataDestinasi = JSON.parse(formData.get("destinations"));

  try {
    const newData = await Promise.all(
      dataDestinasi.map(async (item) => {
        await prisma.destinasi.create({
          data: {
            name: item.name,
            informasi: item.information,
            address: item.address,
            price: item.ticketPrice,
            restaurant: item.restaurant,
            userId: "cm209mgy10000ex1aq4w5h9a6", //isi sementara, next harus di ubah, userId diambil dari data user
          },
        });
      })
    );
    if (newData) {
      console.log("data berhasil di tambahkan");
    }
  } catch (error) {
    console.log(error);
  }
}
