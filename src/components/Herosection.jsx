import { useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
      {/* Background Image */}
      <img
        src="/assets/hero-18.png"
        loading="lazy"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-cover object-[center_top] z-0"
      />

      {/* Gradient Overlay: Left to Right, starts after navbar (fully transparent top) */}
      <div className="absolute inset-0 z-10">
        <div className="h-full w-full bg-gradient-to-r from-[#6B21A8]/50 via-transparent to-transparent pt-[10px] " />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-20 pt-20 max-w-5xl text-white">
        <div className="text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to “Jurist Quest – 2025”
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-6">
            India’s Most Ambitious Moot Court Challenge Begins Here...
          </p>

          {/* Subtext in three lines */}
          <p className="text-sm sm:text-base leading-relaxed mb-1">
            Conceptualized and developed by Crosby Law Associates and RK Legal Partners,
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-1">
            in association with the Madras High Court Association,
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            JuristQuest offers a transformative platform for aspiring legal professionals
          </p>

          {/* Register Button */}
          <a href="/register">
            <button
              className="text-white px-6 py-3 mt-2 rounded font-semibold transition"
              style={{ backgroundColor: "#6B21A8" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#581c87")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6B21A8")}
            >
              Register now
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Ref */}
      <div ref={scrollRef} className="h-[1px]" />
    </section>
  );
}
