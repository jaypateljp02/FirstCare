import { Tag, Percent, Gift, MessageCircle } from 'lucide-react';

export function OffersPage() {
  const offers = [
    {
      icon: Tag,
      title: 'Full Body Checkup Package',
      originalPrice: '₹2,499',
      offerPrice: '₹999',
      discount: '60% OFF',
      description: 'Comprehensive health screening with 60+ parameters including CBC, Lipid Profile, Liver Function, Kidney Function, Thyroid, Diabetes Panel, and more.',
      features: [
        '60+ Parameters Covered',
        'Free Home Sample Collection',
        'Reports in 24-48 Hours',
        'Valid till December 31, 2025',
      ],
      color: 'blue',
    },
    {
      icon: Percent,
      title: 'Diabetes Care Panel',
      originalPrice: '₹1,299',
      offerPrice: '₹699',
      discount: '46% OFF',
      description: 'Complete diabetes screening and monitoring package with HbA1c, Fasting Sugar, PP Sugar, and related tests.',
      features: [
        'HbA1c + Fasting + PP Sugar',
        'Lipid Profile Included',
        'Same Day Reports',
        'Valid till December 31, 2025',
      ],
      color: 'green',
    },
    {
      icon: Gift,
      title: 'Senior Citizen Special',
      originalPrice: 'Regular Price',
      offerPrice: '20% OFF',
      discount: 'SPECIAL DISCOUNT',
      description: 'Exclusive discount for senior citizens (60+ years) on all individual tests and health packages.',
      features: [
        'Applicable on All Tests',
        'Priority Home Collection',
        'Free Doctor Consultation',
        'Lifetime Benefit',
      ],
      color: 'purple',
    },
    {
      icon: Tag,
      title: 'Thyroid Complete Panel',
      originalPrice: '₹899',
      offerPrice: '₹499',
      discount: '44% OFF',
      description: 'Comprehensive thyroid evaluation including T3, T4, and TSH tests to assess thyroid function.',
      features: [
        'T3, T4, TSH Included',
        'Free Home Collection',
        'Reports in 24 Hours',
        'Valid till December 31, 2025',
      ],
      color: 'blue',
    },
    {
      icon: Percent,
      title: 'Women\'s Health Package',
      originalPrice: '₹2,999',
      offerPrice: '₹1,499',
      discount: '50% OFF',
      description: 'Specially designed for women\'s health with hormonal tests, vitamin levels, and comprehensive screening.',
      features: [
        '50+ Parameters',
        'Hormonal Assessment',
        'Vitamin D & B12',
        'Valid till December 31, 2025',
      ],
      color: 'pink',
    },
    {
      icon: Gift,
      title: 'Family Health Package',
      originalPrice: '₹5,999',
      offerPrice: '₹3,499',
      discount: '42% OFF',
      description: 'Perfect for family wellness! Package includes tests for 4 family members with essential health parameters.',
      features: [
        'For 4 Family Members',
        'Essential Health Tests',
        'Free Home Collection',
        'Valid till December 31, 2025',
      ],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string }> = {
      blue: { bg: 'from-blue-50 to-white', text: 'text-blue-600', badge: 'bg-blue-600' },
      green: { bg: 'from-green-50 to-white', text: 'text-green-600', badge: 'bg-green-600' },
      purple: { bg: 'from-purple-50 to-white', text: 'text-purple-600', badge: 'bg-purple-600' },
      pink: { bg: 'from-pink-50 to-white', text: 'text-pink-600', badge: 'bg-pink-600' },
      orange: { bg: 'from-orange-50 to-white', text: 'text-orange-600', badge: 'bg-orange-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Special Offers & Packages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive health packages at unbeatable prices
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const colorClasses = getColorClasses(offer.color);
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100`}
                >
                  <div className="p-6">
                    {/* Icon and Discount Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${colorClasses.badge} rounded-lg flex items-center justify-center`}>
                        <offer.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 ${colorClasses.badge} text-white rounded-full text-sm`}>
                        {offer.discount}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-gray-900 mb-3">{offer.title}</h3>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl text-gray-900">{offer.offerPrice}</span>
                        <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">{offer.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="https://wa.me/919049678380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${colorClasses.badge} text-white rounded-lg hover:opacity-90 transition-opacity`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-8">Terms & Conditions</h2>
          <div className="max-w-3xl mx-auto space-y-3 text-sm text-gray-600">
            <p>• All package prices are inclusive of home sample collection charges (where applicable)</p>
            <p>• Package validity and offer period are mentioned with each package</p>
            <p>• Senior citizen discount is applicable on showing valid age proof</p>
            <p>• Offers cannot be combined with other promotions or discounts</p>
            <p>• Final package selection should be made in consultation with healthcare provider</p>
            <p>• Report delivery time may vary based on test complexity</p>
            <p>• Packages are non-refundable once sample collection is completed</p>
            <p>• MediPath Labs reserves the right to modify or discontinue offers without prior notice</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Book Your Package?</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Contact us now to book your health package and take the first step towards better health
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919049678380"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919049678380"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-8">Why Choose Our Packages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Best Value</h3>
              <p className="text-sm text-gray-600">
                Comprehensive tests at up to 60% discount compared to individual test prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Complete Screening</h3>
              <p className="text-sm text-gray-600">
                Specially curated packages covering all essential health parameters
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-sm text-gray-600">
                Free consultation to help you choose the right package for your needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}