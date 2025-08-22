"use client";
import { useState } from "react";

export default function ProcessSection() {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  return (
    <div className="w-full h-screen mx-auto bg-gradient-to-br from-[#000814]/97 to-[#0a1128] flex flex-col items-center p-8 process overflow-hidden">
      {/* Heading */}
      <div className="text-center lg:mt-6">
        <h2 className="text-2xl lg:text-5xl font-bold text-white/65 mb-2">
          <span className="hidden lg:block">
            The <span className="text-[#b99f5a]">Layer Next</span> Vision to Reality Journey
          </span>
          <span className="block lg:hidden">Our Process</span>
        </h2>
        <p className="text-md lg:text-2xl text-[#89c2d9] mt-4">
          Every great design is a journey — here’s how we take yours from vision
          to reality.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-6xl relative mt-[2rem] lg:mt-13 text-[#89c2d9]">
        {/* Timeline line - only visible on lg screens */}
        <div className="hidden lg:block absolute top-1/2 left-[-30] right-[-30] h-2 bg-[#eacb71]/80 -translate-y-1/2 z-0"></div>

        {[
          { id: 1, text: ["Discovery &", "Consultation"] },
          { id: 2, text: ["Concept &", "Design"] },
          { id: 3, text: ["Refinement &", "Material Selection"] },
          { id: 4, text: ["Execution &", "Delivery"] },
        ].map((step) => (
          <div
            key={step.id}
            className="bg-gradient-to-br from-[#001f54] to-[#0a1128] py-6 px-4 rounded-lg text-center relative z-10 transition-all duration-500 group cursor-pointer hover:scale-105"
            onMouseEnter={() => setHoveredBox(step.id)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            {/* Gold dot connector */}
            <div className="hidden lg:block absolute -bottom-4 left-1/2 w-4 h-4 bg-[#eacb71] rounded-full -translate-x-1/2 shadow-md"></div>

            {/* Step Number */}
            <span
              className={`block text-white text-2xl font-bold transition-all duration-500 transform ${
                hoveredBox === step.id
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {String(step.id).padStart(2, "0")}
            </span>

            {/* Step Title (appears on hover in desktop, always visible on mobile) */}
            <div
              className={`transition-all duration-500 ease-out ${
                hoveredBox === step.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 lg:absolute"
              }`}
            >
              <p className="text-sm lg:text-2xl font-semibold text-[#eacb71]">
                {step.text[0]}
              </p>
              <p className="text-sm lg:text-xl">{step.text[1]}</p>
            </div>
          </div>
        ))}

        {/* Last gold dot at end of line */}
        <div className="hidden lg:block absolute top-1/2 right-[-30] h-4 w-4 bg-[#eacb71] rounded-full -translate-y-1/2 z-0"></div>
      </div>

      {/* Text Section */}
      <div className="max-w-5xl lg:mt-30 text-center text-justify">
        {/* Mobile view text */}
        <div className="block lg:hidden text-[#89c2d9] mt-10 leading-relaxed space-y-6">
          <p className="text-xl font-extrabold text-white">
            The <span className="text-amber-600">Layer Next</span> Vision to Reality Journey
          </p>
          <p className="text-md">
            From vision to reality, our process is a seamless journey. Every
            stage — from the first spark of inspiration to the final crafted
            detail — is guided with precision, artistry, and a commitment to
            timeless elegance.
          </p>
        </div>

        {/* Desktop view text */}
        <div className="hidden lg:block text-white text-3xl leading-relaxed space-y-6 text-center">
          {/* Default text */}
          <div
            className={`transition-opacity duration-500 ${
              hoveredBox === null ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-[1.3rem] mt-[-4rem] text-white/50">
              Hover over any step above to learn more about our detailed process
              and how we bring your vision to life.
            </p>
            <p className="text-4xl font-extrabold text-[#89c2d9] mt-[5rem]">
              Our Process
            </p>
            <p className="text-2xl mt-[2rem]">
              A seamless journey that transforms your vision into timeless
              interiors. From first sketch to flawless execution, every detail
              is curated with precision and artistry. We guide you through each
              step, ensuring elegance and excellence at every turn.
            </p>
          </div>

          {/* Hovered text */}
          <p
            className={`transition-all duration-500 ease-in-out ${
              hoveredBox === 1 ? "opacity-100 translate-y-0" : "opacity-0 hidden"
            }`}
          >
            Every project begins with you. We take time to understand your
            lifestyle, preferences, and aspirations, ensuring your vision guides
            every decision.
          </p>
          <p
            className={`transition-all duration-500 ease-in-out ${
              hoveredBox === 2 ? "opacity-100 translate-y-0" : "opacity-0 hidden"
            }`}
          >
            Our team curates bespoke concepts that capture the essence of your
            style. This stage is where inspiration meets innovation, turning
            ideas into elegant design proposals.
          </p>
          <p
            className={`transition-all duration-500 ease-in-out ${
              hoveredBox === 3 ? "opacity-100 translate-y-0" : "opacity-0 hidden"
            }`}
          >
            Together, we refine the details — from materials and finishes to
            colors and fixtures. Each choice is intentional, bringing harmony
            and sophistication to your space.
          </p>
          <p
            className={`transition-all duration-500 ease-in-out ${
              hoveredBox === 4 ? "opacity-100 translate-y-0" : "opacity-0 hidden"
            }`}
          >
            With precision and care, our craftsmen bring the design to life. We
            manage every detail seamlessly, ensuring your project is completed
            on time and to uncompromising standards.
          </p>
        </div>
      </div>
    </div>
  );
}
