export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] px-5 py-8 text-[#008471]">
      <section className="mx-auto max-w-[430px]">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C45F3F]">
            YarnPal
          </p>

          <h1 className="mt-3 text-5xl font-black leading-[0.9] tracking-tight text-[#008471]">
            What can I make with this yarn?
          </h1>

          <p className="mt-5 text-base font-medium leading-7 text-[#898E46]">
            Upload a photo of your leftover yarn and get cute project ideas
            based on color, yarn weight, and estimated amount.
          </p>
        </div>

        <div className="rounded-[32px] border-4 border-[#008471] bg-[#FFC0C0] p-5 shadow-[8px_8px_0_#008471]">
          <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-[#008471] bg-[#F8F3EA] p-6 text-center">
            <p className="text-5xl">🧶</p>

            <p className="mt-4 text-xl font-black text-[#008471]">
              Upload yarn photo
            </p>

            <p className="mt-2 text-sm font-medium text-[#898E46]">
              JPG, PNG, or HEIC from your phone camera
            </p>

            <button className="mt-6 rounded-full bg-[#FFD242] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#008471] shadow-[4px_4px_0_#008471]">
              Choose photo
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-3xl bg-[#80B0E8] p-4 text-[#FFD242]">
            <p className="text-xs font-black uppercase">Color</p>
          </div>
          <div className="rounded-3xl bg-[#D6D35F] p-4 text-[#008471]">
            <p className="text-xs font-black uppercase">Weight</p>
          </div>
          <div className="rounded-3xl bg-[#F29CC3] p-4 text-[#C45F3F]">
            <p className="text-xs font-black uppercase">Ideas</p>
          </div>
        </div>
      </section>
    </main>
  );
}