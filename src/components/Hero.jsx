import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font text-gray-900 mb-4">
              Simpan Destinasi Favorit mu
            </h1>
            <p className="mb-8 leading-relaxed">
              Rencanakan perjalananmu ke kota tujuan, telurusi informasi simpan
              tempat favoritmu lalu bagikan ke media sosial buat teman-temanmu
              mengetahui destinasi favoritmu.
            </p>
            <p className="ml-4 inline-flex text-gray-700 mb-8 leading-relaxed">
              Register
            </p>
            <button className="ml-1 inline-flex text-gray-700 font-bold focus:outline-none hover:text-green-500 rounded text-base">
              Disini
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
