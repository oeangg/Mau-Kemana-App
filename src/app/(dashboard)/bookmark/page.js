import { BtnSearch } from "@/components/bookmark/input.search";
import { SelectBookmark } from "@/components/bookmark/select.data";

export default function BookmarkPage({ searchParams }) {
  const queryParams = searchParams.query || "";

  return (
    <section>
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="w-full space-y-2 text-center">
            <h1 className="font-poppins text-xl font-semibold text-slate-500">
              Halaman Bookmark
            </h1>
            <BtnSearch />
          </div>
          <SelectBookmark query={queryParams} />
        </div>
      </div>
    </section>
  );
}
