import { useState } from "react";

export default function RegisterInfo() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Desktop & Tablet View */}
      <section className="hidden md:block bg-white py-24 px-6 font-['Lato']">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="text-sm uppercase font-semibold mb-2 text-[#6B21A8]">JURISTQUEST 2025</p>
          <h2 className="text-4xl font-bold text-gray-800">Unlock Your Legal Journey</h2>
          <p className="text-gray-600 mt-2">
            Join the South’s Premier Moot Court Challenge for Budding Legal Minds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#E9D5FF]"></div>

          <div data-aos="fade-right" className="text-center px-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 bg-[#F3E8FF]">
              <i className="fas fa-user-graduate text-[#6B21A8] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#6B21A8] mb-4">Eligibility</h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Open to law students enrolled in <br />
              3-year or 5-year programs across South India, <br />
              studying in recognized institutions.
            </p>
          </div>

          <div data-aos="fade-left" className="text-center px-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 bg-[#F3E8FF]">
              <i className="fas fa-trophy text-[#6B21A8] text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#6B21A8] mb-6">Benefits</h3>
            <div className="grid grid-cols-2 gap-4 justify-center text-left text-sm text-gray-700 max-w-md mx-auto">
              <div className="flex items-center gap-2"><i className="fas fa-book-open text-[#6B21A8]" /> Access to competition rounds</div>
              <div className="flex items-center gap-2"><i className="fas fa-certificate text-[#6B21A8]" /> Legal Immersion Program</div>
              <div className="flex items-center gap-2"><i className="fas fa-chalkboard-teacher text-[#6B21A8]" /> Expert-led workshops</div>
              <div className="flex items-center gap-2"><i className="fas fa-award text-[#6B21A8]" /> Awards & Certificates</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="border px-6 py-2 rounded transition font-medium text-[#6B21A8] border-[#6B21A8] hover:bg-[#6B21A8] hover:text-white"
          >
            Register Now
          </button>
        </div>
      </section>

      {/* Mobile View (White Background Premium Design) */}
      <section className="block md:hidden bg-white py-16 px-6 font-['Lato'] text-gray-800">
        <div className="text-center mb-10">
          <p className="text-sm uppercase font-semibold text-[#6B21A8]">JuristQuest 2025</p>
          <h2 className="text-3xl font-bold leading-snug mt-2">Unlock Your Legal Journey</h2>
          <p className="text-sm text-gray-600 mt-4">
            South India’s premier moot court challenge for ambitious legal minds.
          </p>
        </div>

        <div className="bg-[#F9F5FF] border border-[#E9D5FF] rounded-2xl p-5 mb-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9D5FF]">
              <i className="fas fa-user-graduate text-[#6B21A8] text-lg"></i>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#6B21A8]">Eligibility</h4>
              <p className="text-sm text-gray-700 leading-snug mt-1">
                Open to students in 3- or 5-year law courses from recognized colleges in South India.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F5FF] border border-[#E9D5FF] rounded-2xl p-5 mb-10 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9D5FF]">
              <i className="fas fa-trophy text-[#6B21A8] text-lg"></i>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#6B21A8]">Benefits</h4>
            </div>
          </div>
          <ul className="text-sm text-gray-700 space-y-2 pl-2">
            <li className="flex items-center gap-2"><i className="fas fa-book-open text-[#6B21A8]" /> Access to competition rounds</li>
            <li className="flex items-center gap-2"><i className="fas fa-certificate text-[#6B21A8]" /> Legal Immersion Program</li>
            <li className="flex items-center gap-2"><i className="fas fa-chalkboard-teacher text-[#6B21A8]" /> Expert-led workshops</li>
            <li className="flex items-center gap-2"><i className="fas fa-award text-[#6B21A8]" /> Awards & Certificates</li>
          </ul>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#6B21A8] text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Register Now
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
