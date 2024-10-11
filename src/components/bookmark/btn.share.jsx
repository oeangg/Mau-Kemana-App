export function BtnShare({ name, city }) {
  function submitShare() {
    window.open(`/share/?name=${name}&city=${city}`, "_blank");
  }

  return (
    <button
      onClick={submitShare}
      className="absolute bottom-0 right-0 mb-3 mr-5 flex items-center justify-center gap-1 rounded-full border-2 bg-slate-50 px-3 py-2 text-xs font-light text-emerald-700 duration-100 hover:bg-emerald-600 hover:text-emerald-50"
    >
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
