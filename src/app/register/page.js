"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url("/assets/1.png")', backgroundSize: "cover", backgroundPosition: "center", filter: "blur" }}>
      <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <h2 className="text-2xl font-bold text-center text-white mb-6">REGISTER</h2>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
