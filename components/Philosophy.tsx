import Image from "next/image";
import bg2 from "@/public/bg2.png";

export default function PhilosophySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000814]/97 px-4 py-12 border-y border-[#b99f5a]" id="philosophy">
      <div className="absolute right-2 bottom-2 sm:right-5 sm:bottom-5 w-40 sm:w-80 md:w-[350px]">
        <Image
          src={bg2}
          alt="Background"
          className="object-contain opacity-100"
          priority
        />
      </div>

      <h2 className="absolute top-8 left-1/2 lg:left-2/5 -translate-x-1/2 text-[15vw] md:text-[12vw] font-extrabold text-white/10 select-none tracking-tight leading-none lg:leading-35 text-center lg:text-left">
        Our <span className="text-neutral-600/80">Philosophy</span>
      </h2>

      <div className="relative z-10 w-full lg:right-38 lg:top-5 max-w-4xl mx-auto bg-[#0a1128]/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl hover:shadow-gold/30 transition duration-500 p-4 lg:p-6 sm:p-10 lg:opacity-70">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
          Elevating Spaces, Layer by Layer
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          At <span className="font-bold text-[#b99f5a]/97">Layer Next</span>, we believe great design is not just seen — it’s felt.
          Our philosophy is rooted in <span className="text-blue-300">engineered designs</span>, where every detail is
          carefully considered, every layer intentional. 
          We create interiors
          that balance <span className="text-blue-300">clean, elegant aesthetics</span> with the <span className="text-blue-300">emotions hidden in
          textures and materials</span>. With uncompromising standards of <span className="text-blue-300">quality,
          finish, and craftsmanship</span>, our work ensures that each space is not
          only beautiful to the eye, but also timeless in its experience.
        </p>
      </div>
    </section>
  );
}
