import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function GET(req) {
  const { searchParams } = new URL(req.url); // function for serching any query params

  const code = searchParams.get("code"); // code from google
  const codeVerifier = cookies().get("codeVerifier")?.value; // codeVerifier from cookies.

  // validate the codeVerifier and code => jwt (accessToken)
  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  // get user info
  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const userData = await res.json();

  // check if user exist in our DB
  const findUser = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  // if exist create sessionId
  if (findUser) {
    const session = await prisma.session.create({
      data: {
        userId: findUser.id,
      },
    });

    cookies().set("sessionId", session.id);
    cookies().set("userID", session.userId);
    redirect("/search");
  }

  // if not exist create user
  const newUser = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      role: "user",
    },
  });

  // create session Id
  const session = await prisma.session.create({
    data: {
      userId: newUser.id,
    },
  });

  cookies().set("sessionId", session.id);
  cookies().set("userID", session.userId);
  redirect("/search");
}
