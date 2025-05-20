import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToSection = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative w-screen h-[70vh] sm:h-screen overflow-hidden font-['Lato']">
        {/* Background Image */}
        <img
          src="/assets/new-2.png"
          loading="lazy"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-[70%_top] sm:object-[center_top] z-0"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start items-start sm:justify-center sm:items-start pt-[45vh] sm:pt-0 px-6 sm:px-12 text-white text-left">
          <div className="max-w-3xl w-full" data-aos="fade-up">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4">
              WELCOME TO <br />
              <span className="text-3xl sm:text-3xl md:text-6xl">JURISTQUEST – 2025</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
