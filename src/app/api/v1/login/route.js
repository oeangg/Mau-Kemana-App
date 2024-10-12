import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    // Ambil email dan password dari body request
    const { email, password } = await req.json();

    // Temukan user berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Jika user tidak ditemukan, kembalikan pesan error
    if (!user) {
      return new Response(JSON.stringify({ error: "User Not Found" }), {
        status: 404,
      });
    }

    // Periksa apakah password cocok
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return new Response(JSON.stringify({ error: "Wrong Password" }), {
        status: 422,
      });
    }

    // Cek apakah sesi sudah ada
    const existedSession = await prisma.session.findFirst({
      where: {
        userId: user.id,
      },
    });

    // Jika sesi sudah ada, hapus sesi yang sudah ada
    if (existedSession) {
      await prisma.session.delete({
        where: {
          id: existedSession.id, // Ganti menjadi `id`, bukan `userId`
        },
      });
    }

    // Buat sesi baru di database
    const session = await prisma.session.create({
      data: {
        userId: user.id,
      },
    });

    // Kembalikan pesan sukses dan sessionId
    return new Response(JSON.stringify({ message: "Login Success!", sessionId: session.id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
