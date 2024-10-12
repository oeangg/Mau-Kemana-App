import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-20">
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-center text-2xl font-bold text-emerald-700 sm:text-3xl">
              Simpan Destinasi Favorit mu
            </h1>
            <p className="mb-8 text-base font-light leading-relaxed text-slate-500">
              Rencanakan perjalananmu ke kota tujuan, telurusi informasi, simpan
              tempat favoritmu lalu bagikan ke media sosial, buat teman-temanmu
              mengetahui destinasi favoritmu.
            </p>
            <p className="mb-8 ml-4 inline-flex leading-relaxed text-slate-500">
              Daftar
            </p>
            <Link
              className="ml-1 inline-flex rounded text-base font-bold text-slate-500 hover:text-green-500 focus:outline-none"
              href="/register"
            >
              Disini
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
