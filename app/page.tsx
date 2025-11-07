import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  const services = [
    {
      title: "Interior Renovations",
      description: "Full interior renovations including kitchens, bathrooms, floors, and finishes. Professional craftsmanship for every room.",
      icon: "🏠",
    },
    {
      title: "Exterior Repairs",
      description: "Exterior repairs, façades, and building refits. We protect and enhance your property's curb appeal.",
      icon: "🏗️",
    },
    {
      title: "Garden Landscaping",
      description: "Landscape design, garden maintenance, and outdoor space transformation to create beautiful, functional areas.",
      icon: "🌳",
    },
    {
      title: "Road & Paving",
      description: "Small road repairs and pavement work. Quality solutions for driveways, walkways, and small infrastructure projects.",
      icon: "🛣️",
    },
    {
      title: "Small House Construction",
      description: "Complete construction services for small houses. From foundation to finish, we build your dream home.",
      icon: "🏡",
    },
    {
      title: "Carpentry & Tiling",
      description: "Expert carpentry work and professional tiling services. Custom solutions for your renovation needs.",
      icon: "🔨",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#024885' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/mtc-1.jpg"
            alt="Marium Trading and Contracting"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(2, 72, 133, 0.85)' }}></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Marium Trading & Contracting
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, affordable, reliable workmanship for your construction and renovation needs in Yerevan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#cd1e29' }}
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 transition-colors duration-200 backdrop-blur-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and renovation solutions for residential and light commercial projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Marium Trading and Contracting LLC is a local construction and renovation specialist serving homeowners, property managers and small developers. Founded to bring dependable, practical solutions to everyday construction needs, we concentrate on work where craftsmanship and careful project management matter most.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our services include full interior renovations (kitchens, bathrooms, floors and finishes), exterior repairs and façades, carpentry, tiling, electrical and plumbing coordination, landscaping and garden design, and small road/pavement repairs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with trusted subcontractors and supply partners to ensure material quality while keeping costs competitive. Health and safety are priorities: our teams are insured and receive necessary medical support where required.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/mtc-1.jpg"
                alt="Marium Trading and Contracting team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#024885' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Direct Contact</h3>
              <p className="text-white/80">
                As a small company, you benefit from direct contact with our team, flexible scheduling, and fast responses.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-white/80">
                We pride ourselves on transparent pricing, clear timelines, and practical problem-solving on site.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">Quality Workmanship</h3>
              <p className="text-white/80">
                Skilled workmanship and local know-how to protect your investment and improve the value of your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Contact us for a free consultation and quote.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024885] focus:border-[#024885] transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024885] focus:border-[#024885] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024885] focus:border-[#024885] transition-all"
                  placeholder="+374 XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#024885] focus:border-[#024885] transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 text-white font-semibold rounded-lg transition-opacity duration-200 shadow-lg hover:opacity-90"
                style={{ backgroundColor: '#cd1e29' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
