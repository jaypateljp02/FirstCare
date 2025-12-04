import { Shield, Users, Clock, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

export function HomeSampleCollectionPage() {
  const highlights = [
    {
      icon: Shield,
      title: 'Hygienic Collection',
      description: 'Sterile equipment and strict hygiene protocols followed',
    },
    {
      icon: Users,
      title: 'Trained Phlebotomists',
      description: 'Experienced professionals with gentle handling',
    },
    {
      icon: Clock,
      title: 'Quick Reporting',
      description: 'Fast turnaround time with digital report delivery',
    },
    {
      icon: MapPin,
      title: 'Available in Your Area',
      description: 'Serving all major localities in Pune',
    },
  ];

  const locations = [
    'Koregaon Park',
    'Kalyani Nagar',
    'Viman Nagar',
    'Kharadi',
    'Hadapsar',
    'Kothrud',
    'Aundh',
    'Baner',
    'Wakad',
    'Hinjewadi',
    'Shivajinagar',
    'Camp Area',
    'Deccan',
    'Sadashiv Peth',
    'Swargate',
    'Katraj',
    'Kondhwa',
    'Wanowrie',
    'Magarpatta',
    'Undri',
  ];

  const features = [
    'Free home sample Blood collection for tests',
    'Convenient time slot booking (7 AM - 7 PM)',
    'Contactless payment options available',
    'Reports delivered via WhatsApp and Email',
    'Same day collection for morning bookings',
    'Trained and certified phlebotomists',
  ];

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Home Sample Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get your tests done from the comfort of your home with our professional sample
            collection service
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Service Features</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-gray-900 mb-2">Book Your Test</h3>
              <p className="text-sm text-gray-600">
                Contact us via WhatsApp or call to book your test and preferred time slot
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-gray-900 mb-2">Sample Collection</h3>
              <p className="text-sm text-gray-600">
                Our trained phlebotomist will visit your home at the scheduled time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-gray-900 mb-2">Get Your Reports</h3>
              <p className="text-sm text-gray-600">
                Receive your digital reports via WhatsApp and email within the promised time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Book Your Home Collection Now</h2>
          <p className="mb-6 text-green-100 max-w-2xl mx-auto">
            Available 7 days a week. Book your convenient time slot now!
          </p>
          <a
            href="https://wa.me/919049678380"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Booking
          </a>
        </div>
      </section>

      {/* Locations Covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-4">Areas We Cover in Pune</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide home sample collection services across all major areas in Pune
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
              >
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{location}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            Don't see your area? Contact us - we may still be able to serve you!
          </p>
        </div>
      </section>
    </div>
  );
}