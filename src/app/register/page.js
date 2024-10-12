"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [role, setRole] = useState("");
  const [isLoginTab, setIsLoginTab] = useState(false);

  async function handleRegister(e) {
    e.preventDefault(); // Cegah reload halaman
    setErrorMessage(""); // Reset pesan error

    // Validasi password dan confirm password
    if (!password) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          // role: role || null,
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      const data = await res.json();

      // Simpan sessionId di cookies
      Cookies.set("sessionId", data.sessionId);

      // Redirect ke dashboard setelah berhasil daftar
      router.push("/login");
    } catch (error) {
      // Tangani error dan tampilkan pesan error
      setErrorMessage("Registration failed. Please try again.");
    }
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gray-100"
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
      <div className="w-full max-w-md rounded-lg bg-gray-800 bg-opacity-60 p-8 shadow-lg">
        {/* Tabs */}
        <div className="mb-4 flex justify-center">
          <h2 className="mb-6 text-center text-2xl font-bold text-white">
            REGISTER
          </h2>
        </div>

        {/* Form Register */}
        {!isLoginTab && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full rounded-md bg-green-500 py-2 text-white transition duration-300 hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        )}
        <div className="mt-4 text-center text-white">
          <p>
            Have an account?{" "}
            <Link href="/login" className="text-green-400 hover:underline">
              Login here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
