import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        // role: role || null,
      },
    });

    return Response.json({ data: newUser }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }

  // const newUser = await prisma.user.create({
  //   data: {
  //     name,
  //     email,
  //     password: hashedPassword,
  //   },
  // });
  // return Response.json({ data: newUser }, { status: 201 });
}
