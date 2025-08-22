"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1300] to-[#000814] transition-all duration-1000 ${
        animateOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`relative transition-all duration-800 ${
          animateOut ? "scale-50 -translate-y-[310px]" : "scale-100 translate-y-0"
        }`}
      >
        <Image
          src="/image2.png"
          alt="Layer Next Logo"
          width={500}
          height={500}
          className="animate-logo-glow"
          priority
        />
      </div>


      {!animateOut && (
        <div className="mt-10 w-64 lg:w-96 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-[#d4af37] to-[#e6ca8c] animate-loader"></div>
        </div>
      )}

      <style jsx>{`
        @keyframes logo-glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(212,175,55,0.3)); }
          50% { filter: drop-shadow(0 0 18px rgba(212,175,55,0.8)); }
        }
        .animate-logo-glow {
          animation: logo-glow 3s ease-in-out infinite;
        }

        @keyframes loader {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(125%); }
        }
        .animate-loader {
          animation: loader 2s infinite;
        }
      `}</style>
    </div>
  );
}
