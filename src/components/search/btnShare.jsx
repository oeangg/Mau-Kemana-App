export function BtnShare() {
  return (
    <button className=" text-indigo-600 bg-indigo-100 border-2 border-indigo-600 absolute top-0 right-0 mr-4 mt-3 px-4 py-2 text-sm font-normal flex gap-1 justify-center items-center rounded-lg duration-100 hover:text-indigo-50 hover:bg-indigo-600 hover:border-indigo-50 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 9V5l7 7l-7 7v-4.1c-5 0-8.5 1.6-11 5.1c1-5 4-10 11-11m6-1V5l7 7l-7 7v-3l4-4z"
        />
      </svg>
      Bagikan
    </button>
  );
}
