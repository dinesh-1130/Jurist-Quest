// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBullhorn, FaHandshake, FaAward } from "react-icons/fa";

// export default function SponsorSection() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-white via-purple-50 to-white py-24 px-4 font-['Lato']">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <p className="text-sm font-semibold" style={{ color: "#7B941C" }}>
//           Sponsorship
//         </p>
//         <h2 className="text-4xl font-bold text-gray-900">
//           Why Sponsor <span style={{ color: "#7B941C" }}>JuristQuest 2025?</span>
//         </h2>
//         <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm">
//           Partner with India's premier moot court competition and gain unparalleled access to the country’s future legal minds, top-tier professionals, and media exposure.
//         </p>
//       </div>

//       {/* Vertical Timeline Design */}
//       <div className="relative max-w-4xl mx-auto space-y-10 border-l-2 pl-8" style={{ borderColor: "#D9E4B0" }}>
//         {/* Item 1 */}
//         <div data-aos="fade-up" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#7B941C" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E4EFD2" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaBullhorn className="text-xl" style={{ color: "#7B941C" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#5E7014" }}>Premier Brand Visibility</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Stand out through event branding, media coverage, and digital campaigns across top legal and youth platforms.
//             </p>
//           </div>
//         </div>

//         {/* Item 2 */}
//         <div data-aos="fade-up" data-aos-delay="100" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#7B941C" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E4EFD2" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaHandshake className="text-xl" style={{ color: "#7B941C" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#5E7014" }}>Meaningful Engagement</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Interact with students, nominate speakers or judges, and gain on-stage recognition during key moments.
//             </p>
//           </div>
//         </div>

//         {/* Item 3 */}
//         <div data-aos="fade-up" data-aos-delay="200" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#7B941C" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E4EFD2" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaAward className="text-xl" style={{ color: "#7B941C" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#5E7014" }}>Custom Sponsorship Tiers</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Choose from diverse options — Title, Associate, Certificate, International Program and more — aligned with your brand.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-12">
//         <a
//           href="/register"
//           className="text-white px-8 py-3 rounded-full font-semibold transition"
//           style={{
//             backgroundColor: "#7B941C",
//             display: "inline-block",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#678319")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#7B941C")}
//         >
//           Sponsor now
//         </a>
//       </div>
//     </section>
//   );
// }
