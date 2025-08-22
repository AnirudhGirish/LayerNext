// src/components/ConsultationSection.tsx
import Link from "next/link";
import ConsultationForm from "../../components/Consultation";
import Image from "next/image";
import img from "@/public/image.png";

export default function ConsultationSection() {
  return (
    <>
      <section
        id="consultation"
        className="h-fit min-h-screen lg:h-screen w-screen flex flex-col items-center justify-center bg-[#000814] px-6 py-4"
      >
        <Link
          href={"/"}
          className="flex items-center justify-center text-[#000814] text-2xl mb-6 bg-[#b99f5a] rounded-full w-14 h-14 hover:bg-[#ae871e] font-extrabold block lg:hidden"
        >
          X
        </Link>
        <div className="max-w-4xl w-full mx-auto bg-[#0a1128]/30 backdrop-blur-xl rounded-2xl border-1 border-[#b99f5a]/75 shadow-2xl p-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <div className="block lg:hidden">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Book a Consultation
              </h2>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between items-center">
                <Image
                  alt="LayerNext monogram"
                  src={img}
                  width={50}
                  height={100}
                />
                <Link
                  href={"/"}
                  className="flex items-center justify-center text-[#000814] text-2xl mb-6 bg-[#b99f5a] rounded-full w-14 h-14 hover:bg-[#ae871e] font-extrabold mt-5"
                >
                  X
                </Link>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Book a Consultation
              </h2>
            </div>

            <p className="mt-4 text-gray-300 text-lg">
              Let’s sit together and bring your vision to life. Schedule a call
              or in-person consultation with our design team.
            </p>
          </div>

          {/* Form (Client Component) */}
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
