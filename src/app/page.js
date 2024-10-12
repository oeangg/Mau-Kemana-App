import { prisma } from "@/utils/prisma";
export default async function Home() {
  const user = await prisma.user.findMany();
  console.log(user);
  return (
    <div>
      <h1>Hello Codefix</h1>
    </div>
  );
}
