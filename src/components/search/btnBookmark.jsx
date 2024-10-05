export function BtnBookmark() {
  return (
    <button className=" text-emerald-700 bg-slate-50 border-2 border-slate-50 absolute top-0 left-0 ml-4 mt-3 px-3 py-2 text-xs font-light flex gap-1 justify-center items-center rounded-full duration-100 hover:bg-emerald-600 hover:text-emerald-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"
        />
      </svg>{" "}
      Simpan
    </button>
  );
}
