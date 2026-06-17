export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] px-5 py-8 text-[#008471]">
      <section className="mx-auto max-w-[430px]">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#C45F3F]">
            YarnPal
          </p>

          <h1
            className="
              mt-3
              text-[68px]
              leading-[0.9]
              tracking-[-0.04em]
              text-[#008471]
            "
            style={{
              fontFamily: "var(--font-serif)",
            }}
          >
            What can I
            <br />
            make with
            <br />
            this yarn?
          </h1>

          <p className="
              mt-8
              max-w-[320px]
              text-[20px]
              leading-[1.7]
              text-[#898E46]
            ">
            Upload a photo of your leftover yarn and get cute project ideas
            based on color, yarn weight, and estimated amount.
          </p>
        </div>

        <div className="rounded-[32px] bg-[#FFC0C0] p-5">
          <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-[#008471] bg-[#F8F3EA] p-6 text-center">
            <p className="text-5xl">📸</p>

            <p className="mt-4 text-xl font-black text-[#008471]">
              Upload yarn photo
            </p>

            <p className="mt-2 text-sm font-medium text-[#898E46]">
              JPG, PNG, or HEIC from your phone camera
            </p>

            <button className="mt-6 rounded-full bg-[#FFD242] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#008471]">
              Choose photo
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-full bg-[#80B0E8] py-5 text-center">
            <p className="text-xs font-extrabold tracking-[0.15em] uppercase">Color</p>
          </div>
          <div className="rounded-3xl bg-[#D6D35F] py-5 text-center">
            <p className="text-xs font-extrabold tracking-[0.15em] uppercase">Weight</p>
          </div>
          <div className="rounded-3xl bg-[#F29CC3] py-5 text-center">
            <p className="text-xs font-extrabold tracking-[0.15em] uppercase">Ideas</p>
          </div>
        </div>
      </section>
    </main>
  );
}