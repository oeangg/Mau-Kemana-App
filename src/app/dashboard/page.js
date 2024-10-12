import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const sessionId = cookies().get("sessionId")?.value;

  if (!sessionId) {
    redirect("/");
  }

  const userData = await prisma.session.findFirst({
    where: {
      id: sessionId,
    },
    include: {
      user: true,
    },
  });

  if (!userData) {
    redirect("/");
  }

  const initialAvatar = userData.user.name.charAt(0);

  async function logout() {
    "use server";

    await prisma.session.delete({
      where: {
        id: sessionId,
      },
    });

    cookies().delete("sessionId");

    redirect("/");
  }

  return (
    <main>
      <header className="bg-indigo-500 text-white font-medium p-4 flex justify-between items-center">
        <div className="font-bold text-lg">MauKemana</div>
        <div className="flex items-center space-x-4">
          <form action={logout}>
            <button className="bg-white text-black px-2 py-1 rounded hover:bg-white/80 text-black">Logout</button>
          </form>
          <div>{userData.user.name}</div>
          <div className="w-8 h-8 rounded-full bg-white text-indigo-600 font-bold flex justify-center items-center">{initialAvatar}</div>
        </div>
      </header>
      <div className="max-w-6xl m-auto py-12">{children}</div>
    </main>
  );
}
