import { Link } from 'react-router-dom';
import { MessageCircle, Droplet, Activity, Heart, Stethoscope, CheckCircle, Clock, Home, Zap, Star, Dna, TestTube, Sun, Shield, Baby, HeartHandshake } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SEO, pageSEO } from '../SEO';
export function HomePage() {
  const services = [
    { icon: Droplet, title: 'Blood Tests', description: 'Complete blood count and analysis' },
    { icon: Activity, title: 'Thyroid Panel', description: 'T3, T4, TSH testing' },
    { icon: Heart, title: 'Diabetes Tests', description: 'HbA1c, fasting & PP sugar' },
    { icon: Stethoscope, title: 'Full Body Checkup', description: 'Comprehensive health screening' },
    { icon: Dna, title: 'Hormonal Tests', description: 'Complete hormonal profile' },
    { icon: TestTube, title: 'TB / Sputum Tests', description: 'Advanced TB screening & culture' },
    { icon: Sun, title: 'Vitamin Profile', description: 'Vitamin B12, D3 & others' },
    { icon: Shield, title: 'Cancer Markers', description: 'CA-125, PSA & other markers' },
  ];

  const features = [
    { icon: CheckCircle, title: 'Accurate Reports', description: 'Precise and reliable results' },
    { icon: HeartHandshake, title: 'Trusted Laboratory', description: 'NABL standard reports' },
    { icon: Home, title: 'Home Collection', description: 'Free sample pickup service' },
    { icon: Baby, title: 'Pediatric Expert', description: 'Specialized care for babies' },
    { icon: Zap, title: 'Fast Report Delivery', description: 'Same day reports available' },
  ];

  return (
    <>
      <SEO {...pageSEO.home} url="https://firstcarepathology.com/" />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-blue-900 mb-4">
                  Trusted Diagnostic Services in Hinjawadi
                </h1>
                <p className="text-gray-600 mb-6">
                  Accurate • Fast • Affordable Pathology Tests
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/917875426669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Booking
                  </a>
                  <Link
                    to="/home-collection"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    Home Sample Collection
                  </Link>
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY0NDg0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlighted Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-900 mb-12">Our Popular Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/services"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Tests
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-900 mb-10">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row md:flex-nowrap lg:justify-center gap-6 md:overflow-x-auto pb-6 custom-scrollbar scroll-smooth">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-blue-50 transition-all hover:shadow-md hover:-translate-y-1 w-full md:w-auto md:min-w-[260px] md:flex-shrink-0"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-inner">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 font-bold mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ratings Section */}
        <section className="py-12 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl mb-2">4.8 Rating</div>
            <p className="text-blue-100">Based on 500+ reviews from satisfied customers</p>
          </div>
        </section>

        {/* Short About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Laboratory Scientists"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-gray-900 mb-4">About First Care Pathology Laboratory</h2>
                <p className="text-gray-600 mb-4">
                  With over 3 years of experience in diagnostic services, First Care Pathology Laboratory has been
                  serving Hinjawadi and surrounding areas with accurate, reliable, and affordable pathology tests. Our
                  state-of-the-art facility is equipped with the latest technology and staffed by
                  experienced pathologists and technicians.
                </p>
                <p className="text-gray-600 mb-6">
                  We are committed to providing timely reports and excellent customer service,
                  making healthcare accessible to everyone.
                </p>
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Strip */}
        <section className="py-12 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="mb-2">Need Home Sample Collection?</h3>
                <p className="text-green-100">
                  Book your test online and get free home sample collection service
                </p>
              </div>
              <a
                href="https://wa.me/917875426669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}