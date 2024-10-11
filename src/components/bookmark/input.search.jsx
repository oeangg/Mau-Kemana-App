"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoSearchOutline } from "react-icons/io5";

export function BtnSearch() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    router.replace(`${pathName}?${params.toString()}`);
  }, 200);

  return (
    <div className="relative flex">
      <input
        type="text"
        name="destinasi"
        id="destinasi"
        className="w-full rounded-full border-2 border-slate-200 bg-slate-50 py-3 pl-14 pr-7 font-poppins text-lg font-light text-emerald-700 placeholder:text-base focus:outline-none focus:outline-emerald-300"
        placeholder="Cari destinasi favoritmu..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IoSearchOutline className="absolute left-0 top-0 ml-5 mt-3 h-7 w-7 text-slate-300" />
    </div>
  );
}
