"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginWithGoogle } from "@/actions/auth/sign-google";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault(); // Cegah form untuk reload halaman
    setErrorMessage(""); // Reset pesan error

    try {
      const res = await fetch("/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();

      // Simpan sessionId di cookies
      Cookies.set("sessionId", data.sessionId);

      //simpan cookis UserId
      Cookies.set("userID", data.userID);

      // Redirect ke dashboard
      router.push("/search");
    } catch (error) {
      // Tangani error dan tampilkan pesan error
      setErrorMessage("Login failed. Please check your credentials.");
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      setErrorMessage("Google login failed. Please try again.");
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/assets/1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur",
      }}
    >
      <Link
        href="/"
        className="absolute left-0 top-0 ml-12 mt-14 rounded-md border-2 border-slate-400 bg-transparent px-5 py-2 text-slate-200 hover:text-slate-200"
      >
        Back to Home
      </Link>
      <div className="w-96 rounded-lg bg-gray-800 bg-opacity-60 p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          LOGIN
        </h2>
        {errorMessage && (
          <p className="text-center text-red-500">{errorMessage}</p>
        )}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-gray-300 bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full rounded bg-green-600 py-2 font-semibold text-white hover:bg-green-700"
              >
                Login
              </button>
              <button
                type="submit"
                className="w-full space-x-4 rounded bg-green-500 py-2 font-semibold text-white hover:bg-green-700"
                onClick={handleGoogleLogin}
              >
                Login With Google
              </button>
            </div>
          </div>
        </form>
        {/* <div className="mt-4 text-right text-white">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Forgot Password? :(
          </a>
        </div> */}
        <div className="mt-4 text-center text-white">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-green-400 hover:underline">
              Sign up here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
