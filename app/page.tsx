import Image from "next/image";
import ProcessSection from "../components/ProcessSection";
import Preloader from "@/components/PreLoader";
import AboutEssence from "@/components/AboutEssence";
import PhilosophySection from "@/components/Philosophy";

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="w-screen h-screen bg-[#000814]/97 flex screen-div">
        <div className="w-screen h-screen flex flex-col">
          <div className="flex">
            <div className="w-10 h-10 block lg:hidden mt-4 mb-4 mx-auto bg-transparent shadow-2xl shadow-black">
              <Image
                src={"/image.png"}
                alt="Vercel"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="w-50 h-50 hidden lg:block mx-auto bg-transparent mt-[-28] mb-[-55]">
              <Image
                src={"/image2.png"}
                alt="Vercel"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute text-center">
              <p className="text-white lg:text-white text-3xl md:text-5xl  drop-shadow-lg font-extrabold lg:font-bold hover:text-black transition duration-400">
                Transforming Ideas Into Iconic Interiors.
              </p>
              <p className="hidden lg:block text-white lg:text-white/75 text-md md:text-xl font-mono hover:text-white transition duration-300 mt-5 bg-[#000814]/50 rounded-lg">
                A seamless blend of creativity, craftsmanship, and innovation
              </p>
              <button className="bg-[#000814]/75 text-white text-xl px-10 py-4 mt-4 lg:mt-8 lg:text-2xl lg:px-14 lg:py-6 rounded-2xl shadow-2xl shadow-black hover:bg-[#000814] hover:font-semibold transition duration-300">
                Begin My Design Journey →
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutEssence />
      <ProcessSection />
      <PhilosophySection />
    </>
  );
}
