import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LinkDash } from "@/components/link.dash";

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

  //bikin cookies user ID

  

  if (!userData) {
    redirect("/");
  }

  // const initialAvatar = userData.user.name.charAt(0);

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
      <header className="flex w-full items-center justify-center bg-slate-300">
        <div className="flex w-full max-w-7xl flex-col items-center justify-between py-5 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-9 w-9 rounded-full bg-emerald-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            {/* <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-bold text-slate-50">
              {initialAvatar}
            </div> */}
            <div className="text-lg font-light text-emerald-700">
              {userData.user.name}
            </div>
          </div>

          {/* Link */}
          <LinkDash />

          <div className="flex items-center space-x-4">
            <form action={logout}>
              <button className="rounded-xl border-2 bg-emerald-600 px-5 py-1 text-slate-50 hover:bg-emerald-400">
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="m-auto max-w-6xl py-12">{children}</div>
    </main>
  );
}
