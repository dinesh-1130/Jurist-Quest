import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FaqSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqData = [
    "Who can participate in Jurist Quest 2025?",
    "How do we register for the competition?",
    "How many members are allowed in each team?",
    "What is the format of the competition?",
    "Are there any travel or accommodation arrangements?",
    "What is the Legal Immersion Program?",
    "Will participants receive certificates?",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative bg-white text-gray-800 py-20 font-['Lato']">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-start gap-12 px-6">

        {/* FAQ Section */}
        <div data-aos="fade-right">
          <p className="text-sm font-semibold mb-2" style={{ color: "#6B21A8" }}>FAQ's</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Your question will answered
          </h2>

          <div className="space-y-4">
            {faqData.map((question, index) => (
              <div key={index} className="border-b border-gray-300 pb-3">
                <button
                  className="w-full flex justify-between items-center text-left text-gray-800 font-medium text-sm transition"
                  style={{ color: activeIndex === index ? "#6B21A8" : undefined }}
                  onClick={() => toggleIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}. {question}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-xs" style={{ color: "#6B21A8" }} />
                  ) : (
                    <FaChevronDown className="text-xs" style={{ color: "#6B21A8" }} />
                  )}
                </button>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 mt-2 pl-6">
                    {/* Replace with actual answer */}
                    This is a sample answer. Replace this with real FAQ content as needed.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section - shifted right */}
        <div className="relative ml-6 md:ml-12 lg:ml-16" data-aos="fade-left">
          <div className="rounded-xl overflow-hidden shadow-xl w-full">
            <img
              src="/assets/court.jpg"
              alt="Running"
              className="w-full h-[360px] object-cover rounded-xl"
            />
          </div>
          <div className="absolute bottom-[-30px] left-[-20px] md:bottom-[-40px] md:left-[-40px] w-32 md:w-48 rounded-lg overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/assets/hero-11.png"
              alt="Inset"
              className="w-full h-24 md:h-36 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
