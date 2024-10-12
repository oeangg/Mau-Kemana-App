import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-black-600 bg-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-green-600">MauKemana?</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"></nav>
          <div className="flex justify-center">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base">
              Login
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base">
              Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
