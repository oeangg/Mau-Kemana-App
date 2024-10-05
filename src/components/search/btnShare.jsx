export function BtnShare() {
  return (
    <button className="text-emerald-50 bg-emerald-700 border-2 border-slate-50 absolute top-0 left-0 ml-32 mt-3 px-3 py-2 text-xs font-light flex gap-1 justify-center items-center rounded-full duration-100 hover:bg-emerald-600 hover:text-emerald-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
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
