"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const designs = [
  { src: "/bg6.png", title: "Elegant Living" },
  { src: "/bg7.png", title: "Minimal Workspace" },
  { src: "/bg5.png", title: "Luxury Dining" },
  { src: "/bg3.png", title: "Modern Bedroom" },
];

export default function Showcase() {
  return (
    <section className="relative bg-[#000814] py-20 px-6">
      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-[#eacb71]">Designs</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          A glimpse into our carefully crafted spaces.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {designs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-lg"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-amber-50/50">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <p className="text-white text-2xl font-semibold tracking-wide">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
