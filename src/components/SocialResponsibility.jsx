import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Mr. Selvakumar",
    title: "Chair Committee – Legal Affairs",
    image: "/assets/profile-6.png",
  },
  {
    name: "Mr. Thangavel",
    title: "Chair Committee – Planning",
    image: "/assets/profile-7.png",
  },
  {
    name: "DATO' Dr. Samy DST",
    title: "Chair Committee – International Relations",
    image: "/assets/profile-8.png",
  },
  {
    name: "Mr. Krishnakumar",
    title: "Chair Committee – Operations",
    image: "/assets/profile-9.jpeg",
  },
  {
    name: "Mr. Dhamodharan",
    title: "Chair Committee – Student Coordination",
    image: "/assets/profile-6.png",
  },
];

export default function TeamSection() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold mb-2 text-[#6B21A8]">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet the Team Behind <span className="text-[#6B21A8]">JuristQuest 2025</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
            A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
                <p className="text-sm text-[#6B21A8]">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Second row: 2 cards centered */}
          <div className="flex justify-center gap-8 max-w-3xl mx-auto">
            {teamMembers.slice(3).map((member, index) => (
              <div
                key={index + 3}
                data-aos="fade-up"
                className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center w-full"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
                <p className="text-sm text-[#6B21A8]">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="sm:hidden max-w-xs mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="fade-up"
                  className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
                  <p className="text-sm text-[#6B21A8]">{member.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots outside the card */}
          <div className="custom-swiper-pagination mt-6 flex justify-center" />

          <style jsx>{`
            .swiper-pagination-bullet {
              background-color: #e0c8f2;
              opacity: 1;
              margin: 0 5px !important;
              width: 10px;
              height: 10px;
            }
            .swiper-pagination-bullet-active {
              background-color: #6B21A8;
            }
          `}</style>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="inline-block text-white px-6 py-3 rounded-full font-semibold transition"
            style={{ backgroundColor: "#6B21A8" }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#4C1D95")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6B21A8")}
            onClick={() => setShowForm(true)}
          >
            Register now
          </button>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-[90%] max-w-lg font-['Lato'] relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fill the Form</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:ring-[#6B21A8] focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:ring-[#6B21A8] focus:outline-none" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border rounded-lg focus:ring-[#6B21A8] focus:outline-none" />
              <input type="text" placeholder="Full Address" className="w-full px-4 py-3 border rounded-lg focus:ring-[#6B21A8] focus:outline-none" />
              <input type="text" placeholder="District" className="w-full px-4 py-3 border rounded-lg focus:ring-[#6B21A8] focus:outline-none" />
              <button type="submit" className="w-full bg-[#6B21A8] text-white py-3 rounded-lg font-semibold hover:bg-[#4C1D95] transition">Submit</button>
            </form>
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
