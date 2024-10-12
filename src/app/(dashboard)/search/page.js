import { FormDestinasiAi } from "@/components/search/form.data.ai";

export default function SearchDestinasiPage() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-5xl justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-4 p-3">
          {/* form */}
          <FormDestinasiAi />
        </div>
      </div>
    </section>
  );
}
