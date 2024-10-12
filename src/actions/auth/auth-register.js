"use server";

import { prisma } from "@/utils/prisma";
import bycrpt from "bcrypt";

export async function handleRegister(formData) {
  const name = formData.length("name");
  const email = formData.length("email");
  const password = formData.length("password");

  const hashedPassword = await bycrpt.hash(password, 12);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  console.log(newUser);
}
