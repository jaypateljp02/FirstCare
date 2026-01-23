import { Tag, Percent, Gift, MessageCircle, Search, FlaskConical, X } from 'lucide-react';
import { useData, Offer } from '../../context/DataContext';
import { useState, useEffect } from 'react';

const iconMap: Record<string, typeof Tag> = {
  Tag: Tag,
  Percent: Percent,
  Gift: Gift
};

// Generate WhatsApp message with package details
function getWhatsAppLink(offer: Offer) {
  const tests = offer.features.filter(f => !f.toLowerCase().startsWith('sample:'));
  const testList = tests.map((t, i) => `  ${i + 1}. ${t}`).join('\n');

  const message = `Hi! I'm interested in booking the *${offer.title}* package.

📋 *Package Details:*
💰 Price: ${offer.offerPrice} (${offer.discount} off from ${offer.originalPrice})

🧪 *Tests Included (${tests.length}):*
${testList}

Please let me know the next steps for booking.`;

  return `https://wa.me/917875426669?text=${encodeURIComponent(message)}`;
}


// Modal Component for full offer details
function OfferDetailModal({ offer, onClose }: { offer: Offer; onClose: () => void }) {
  const Icon = iconMap[offer.iconName] || Tag;

  // Color classes for the modal
  const colors: Record<string, { badge: string; text: string }> = {
    blue: { badge: 'bg-blue-600', text: 'text-blue-600' },
    green: { badge: 'bg-green-600', text: 'text-green-600' },
    purple: { badge: 'bg-purple-600', text: 'text-purple-600' },
    pink: { badge: 'bg-pink-600', text: 'text-pink-600' },
    orange: { badge: 'bg-orange-600', text: 'text-orange-600' },
  };
  const colorClasses = colors[offer.color] || colors.blue;

  const sampleInfo = offer.features.filter(f => f.toLowerCase().startsWith('sample:'));
  const tests = offer.features.filter(f => !f.toLowerCase().startsWith('sample:'));

  // Lock body scroll when modal is open
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`${colorClasses.badge} p-4 sm:p-5 text-white`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-lg font-bold">{offer.title}</h2>
                <div className="flex flex-wrap items-baseline gap-2 mt-1">
                  <span className="text-lg sm:text-xl font-bold">{offer.offerPrice}</span>
                  <span className="text-white/70 line-through text-xs sm:text-sm">{offer.originalPrice}</span>
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs">{offer.discount}</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div
          className="p-4 sm:p-5 custom-scrollbar"
          style={{
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
          }}
        >
          <p className="text-gray-600 mb-4 text-sm">{offer.description}</p>

          {sampleInfo.length > 0 && (
            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-1.5 flex items-center gap-2 text-sm">
                <FlaskConical className="w-4 h-4" />
                Sample Required
              </h4>
              <ul className="space-y-0.5">
                {sampleInfo.map((sample, idx) => (
                  <li key={idx} className="text-xs text-amber-700">
                    {sample.replace('Sample: ', '• ')}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm border-b pb-2">
              <span className={`inline-flex items-center justify-center w-5 h-5 ${colorClasses.badge} text-white text-xs rounded-full`}>
                {tests.length}
              </span>
              Tests Included
            </h4>
            <div className="space-y-2">
              {tests.map((test, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <svg className={`w-4 h-4 ${colorClasses.text} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-gray-700 leading-tight">{test}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t bg-gray-50">
          <a
            href={getWhatsAppLink(offer)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function getColorClasses(color: string) {
  const colors: Record<string, { bg: string; text: string; badge: string; border: string; light: string }> = {
    blue: { bg: 'from-blue-50 to-white', text: 'text-blue-600', badge: 'bg-blue-600', border: 'border-blue-200', light: 'bg-blue-50' },
    green: { bg: 'from-green-50 to-white', text: 'text-green-600', badge: 'bg-green-600', border: 'border-green-200', light: 'bg-green-50' },
    purple: { bg: 'from-purple-50 to-white', text: 'text-purple-600', badge: 'bg-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
    pink: { bg: 'from-pink-50 to-white', text: 'text-pink-600', badge: 'bg-pink-600', border: 'border-pink-200', light: 'bg-pink-50' },
    orange: { bg: 'from-orange-50 to-white', text: 'text-orange-600', badge: 'bg-orange-600', border: 'border-orange-200', light: 'bg-orange-50' },
  };
  return colors[color] || colors.blue;
}

export function OffersPage() {
  const { offers } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const OFFERS_PER_PAGE = 12;

  const filteredOffers = offers.filter(offer =>
    offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredOffers.length / OFFERS_PER_PAGE);
  const startIndex = (currentPage - 1) * OFFERS_PER_PAGE;
  const paginatedOffers = filteredOffers.slice(startIndex, startIndex + OFFERS_PER_PAGE);

  const getTestCount = (features: string[]) => {
    return features.filter(f => !f.toLowerCase().startsWith('sample:')).length;
  };

  // Get a short summary from description (first 80 chars)
  const getShortDescription = (desc: string) => {
    if (desc.length <= 100) return desc;
    return desc.substring(0, 100).trim() + '...';
  };

  return (
    <div>
      {/* Modal */}
      {selectedOffer && (
        <OfferDetailModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />
      )}

      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Special Offers & Packages</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive health packages at unbeatable prices
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {filteredOffers.length} packages available
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search packages by name, description or tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid - Larger Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredOffers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No packages found matching your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedOffers.map((offer) => {
                  const colorClasses = getColorClasses(offer.color);
                  const Icon = iconMap[offer.iconName] || Tag;
                  const testCount = getTestCount(offer.features);

                  return (
                    <div
                      key={offer.id}
                      className={`bg-gradient-to-br ${colorClasses.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border ${colorClasses.border} cursor-pointer group`}
                      onClick={() => setSelectedOffer(offer)}
                    >
                      <div className="p-6">
                        {/* Top: Icon + Discount */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 ${colorClasses.badge} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`px-3 py-1 ${colorClasses.badge} text-white rounded-full text-sm font-medium`}>
                            {offer.discount}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-900 font-bold text-lg mb-2">
                          {offer.title}
                        </h3>

                        {/* Short Description - NEW! */}
                        <p className="text-sm text-gray-500 mb-4 min-h-[2.5rem]">
                          {getShortDescription(offer.description)}
                        </p>

                        {/* Price */}
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">{offer.offerPrice}</span>
                            <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                          </div>
                        </div>

                        {/* Test Count Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.light} rounded-lg border ${colorClasses.border} ${colorClasses.text} mb-5`}>
                          <FlaskConical className="w-5 h-5" />
                          <span className="font-semibold">{testCount} Tests Included</span>
                        </div>

                        {/* View Details + Book Buttons */}
                        <div className="flex gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedOffer(offer);
                            }}
                            className={`flex-1 px-4 py-3 border-2 ${colorClasses.border} ${colorClasses.text} rounded-xl font-medium hover:bg-gray-50 transition-colors`}
                          >
                            View Details
                          </button>
                          <a
                            href={getWhatsAppLink(offer)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg font-medium ${currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>

                  <span className="ml-4 text-sm text-gray-500">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
              )}
            </>
          )}
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
              href="tel:+917875426669"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/917875426669"
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
          <div className="flex overflow-x-auto pb-6 snap-x md:grid md:grid-cols-3 md:gap-6 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 gap-4">
            <div className="text-center min-w-[280px] snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:bg-transparent md:p-0 md:shadow-none md:border-none flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg md:shadow-none shadow-blue-200">
                <Tag className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold text-lg">Best Value</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Comprehensive tests at up to 60% discount compared to individual test prices
              </p>
            </div>
            <div className="text-center min-w-[280px] snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:bg-transparent md:p-0 md:shadow-none md:border-none flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg md:shadow-none shadow-blue-200">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold text-lg">Complete Screening</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Specially curated packages covering all essential health parameters
              </p>
            </div>
            <div className="text-center min-w-[280px] snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:bg-transparent md:p-0 md:shadow-none md:border-none flex-shrink-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg md:shadow-none shadow-blue-200">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="text-gray-900 mb-2 font-bold text-lg">Expert Guidance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Free consultation to help you choose the right package for your needs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}