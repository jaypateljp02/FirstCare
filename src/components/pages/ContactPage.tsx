import { Phone, MessageCircle, Mail, Clock, MapPin, Navigation } from 'lucide-react';

export function ContactPage() {
  const branches = [
    {
      name: 'Branch 1 - Ganpati Hospital',
      address: 'Flt No 1 First, Ganpati Hospital, 3, Jai Ganesh Colony, Phase 3, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057',
      mapUrl: 'https://maps.app.goo.gl/fXAcVCvY3LWHNdC58',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8!2d73.7!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM2JzAwLjAiTiA3M8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
      name: 'Branch 2 - Shlok Hospital',
      address: 'S.No: 2523, First Care Pathology Lab, Shlok Hospital - Ground Floor, Laxmi Chowk, beside Diamond Sweets, Marunji Road, Hinjawadi, Maharashtra 411057',
      mapUrl: 'https://maps.app.goo.gl/PMEsYeZ3N9smyUtU6',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.9!2d73.71!3d18.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI0LjAiTiA3M8KwNDInMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567891',
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any queries or to book your test
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Phone Number</h3>
                <a
                  href="tel:+917875426669"
                  className="text-blue-600 hover:text-blue-700"
                >
                  +91 78754 26669
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Call us for immediate assistance
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/917875426669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700"
                >
                  +91 78754 26669
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Quick booking and support
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Email Address</h3>
                <a
                  href="mailto:info@firstcarepathology.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  info@firstcarepathology.com
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  Send us your queries
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 mb-12 max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">Working Hours</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
                <p className="text-blue-600 mt-2">Home Collection: 7:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
            <a
              href="tel:+917875426669"
              className="flex flex-col items-center gap-2 p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span className="text-sm">Call Now</span>
            </a>
            <a
              href="https://wa.me/917875426669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a
              href={branches[0].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Navigation className="w-6 h-6" />
              <span className="text-sm">Directions</span>
            </a>
          </div>

          {/* Both Branches */}
          <h2 className="text-center text-gray-900 mb-8">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6">
                  <h3 className="mb-2">{branch.name}</h3>
                  <div className="flex items-start gap-2 text-sm text-blue-100">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>{branch.address}</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-100">
                  <iframe
                    src={branch.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={branch.name}
                  ></iframe>
                </div>
                <div className="p-4">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-2">Need Urgent Test?</h2>
          <p className="mb-6 text-red-100">
            For emergency test requests and urgent home sample collection
          </p>
          <a
            href="tel:+917875426669"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Emergency Line
          </a>
        </div>
      </section>
    </div>
  );
}
