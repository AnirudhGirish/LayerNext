export default function AboutEssence() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#000814] border-t border-white/10"
    >
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          About <span className="text-[#eacb71]">Layer Next</span>
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-3xl text-lg md:text-2xl text-[#89c2d9] leading-relaxed">
          At Layer Next, we believe every space has a story waiting to be told.
          Our philosophy is simple yet powerful —
          <span className="text-white"> Elegance</span>,{" "}
          <span className="text-white">Precision</span>,{" "}
          <span className="text-white">Elevation</span>.
        </p>

        {/* Story */}
        <p className="mt-6 max-w-4xl text-base md:text-lg text-white/70 leading-relaxed">
          We are more than just an interior design studio. We are creators of
          experiences, blending timeless aesthetics, innovative engineering,
          and modern craftsmanship to shape interiors that inspire, function,
          and endure. From the first sketch to flawless execution, every layer
          of design is intentional and refined — ensuring that our work is not
          only beautiful but deeply personal.
        </p>

        {/* Essence Pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Elegance",
              desc: "Designs that transcend trends — timeless and refined.",
            },
            {
              title: "Precision",
              desc: "Engineered details and flawless execution.",
            },
            {
              title: "Elevation",
              desc: "Spaces crafted to uplift, inspire, and endure.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#0a1128] p-6 lg:p-8 transition-colors duration-300 hover:border-[#eacb71]/50"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#eacb71]">
                {item.title}
              </h3>
              <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
