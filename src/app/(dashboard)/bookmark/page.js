import { BtnSearch } from "@/components/search/btn.search";
export default function BookmarkPage() {
  return (
    <section>
      <div className="w-full h-screen flex justify-center  items-start pt-5">
        <div className="max-w-5xl w-full flex flex-col justify-center items-center gap-4 p-3">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <form
              action=""
              className="flex gap-2 justify-center items-center  w-full  relative "
            >
              <input
                type="text"
                name="city"
                id="city"
                className="w-full rounded-full font-poppins bg-slate-50 px-5 py-3 border-2 text-lg font-light border-slate-200 focus:outline-none focus:outline-emerald-500 placeholder:text-base"
                placeholder="Cari destinasi favorit..."
              />
              <BtnSearch />
            </form>
          </div>

          {/* tampilkan data bookmark  */}
        </div>
      </div>
    </section>
  );
}
