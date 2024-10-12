"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginWithGoogle } from "@/actions/auth/sign-google";

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

      // Redirect ke dashboard
      router.push("/dashboard");
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
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/assets/1.png")', backgroundSize: "cover", backgroundPosition: "center", filter: "blur" }}>
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-white mb-6">LOGIN</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-2 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div>
            <div className="space-y-4">
              <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700">
                Login
              </button>
              <button type="submit" className="w-full space-x-4 bg-green-500 text-white font-semibold py-2  rounded hover:bg-green-700" onClick={handleGoogleLogin}>
                Login With Google
              </button>
            </div>
          </div>
        </form>
        <div className="text-right text-white mt-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            Forgot Password? :(
          </a>
        </div>
        <div className="text-center text-white mt-4">
          <p>
            Don&apos;t have an account?{" "}
            <a href="#" className="text-green-400 hover:underline">
              Sign up here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
