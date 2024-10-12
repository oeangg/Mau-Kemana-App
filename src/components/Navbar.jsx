import React from "react";
import { BtnAuthHeader } from "./btn.header";

const Navbar = () => {
  return (
    <>
      <header className="mx-auto w-full max-w-7xl justify-center text-slate-600">
        <div className="flex flex-col flex-wrap items-center py-7 md:flex-row">
          <div className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-emerald-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold text-emerald-500">
              MauKemana?
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-4 md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4"></nav>
          {/* <div className="flex items-center justify-center gap-3"> */}
          {/* button */}
          <BtnAuthHeader />
          {/* </div> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
