import React from "react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

const Dashboard = () => {
  return (
      <>
        <Navbar />
        <div className="bg-gray-50">
          {/* Hero Section */}
          <section className="bg-white py-20 relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center relative">
              <div className="lg:w-1/2">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
                  Premium <span className="text-blue-600">Automobile</span> Services!
                </h1>
                <p className="text-gray-600 mb-6">
                  Get top-notch vehicle maintenance and repair services. Find the best mechanics near you.
                </p>
                <div className="flex items-center bg-white p-3 rounded-lg shadow-lg">
                  <input
                      type="text"
                      placeholder="Search automobile services near you"
                      className="flex-grow px-4 py-2 text-black border-none focus:outline-none focus:ring-0"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Search
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
                <div className="absolute bg-white w-[400px] h-[400px] rounded-full -top-25"></div>
                <img
                    src="/images/mechanic.jpg"
                    alt="Car Service"
                    className="relative z-10 w-1/3 lg:w-3/4 object-contain -mt-5"
                />
              </div>
            </div>
          </section>

          {/* Service Highlights */}
          <section className="bg-blue-600 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
              <div>
                <h2 className="text-4xl font-bold">24/7</h2>
                <p>Roadside Assistance</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold">500+</h2>
                <p>Certified Mechanics</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold">1M+</h2>
                <p>Vehicles Serviced</p>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                Our Automobile Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Car Repair", description: "Expert repair services for all car models.", icon: "/images/car-repair.jpg" },
                  { title: "Oil Change", description: "High-quality oil and filter changes.", icon: "/images/oil-change.jpg" },
                  { title: "Tire Services", description: "Tire rotation, balancing, and replacement.", icon: "/images/tire-service.jpg" },
                  { title: "Battery Replacement", description: "Fast and reliable battery checks and replacements.", icon: "/images/battery-replacement.jpg" },
                ].map((service, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
                      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4">
                        <img src={service.icon} alt={service.title} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-center text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us? */}
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Why Choose Our Services?</h2>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {["Certified mechanics", "Affordable pricing", "Quick service turnaround"].map((reason, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">✔</span>
                        {reason}
                      </li>
                  ))}
                </ul>
                <a href="#" className="text-blue-600 hover:underline">Learn More</a>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                <img src="/images/why-choose-us.jpg" alt="Why Choose Us" className="w-3/4 lg:w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
  );
};

export default Dashboard;