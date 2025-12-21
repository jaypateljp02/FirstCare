import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useData } from '../../context/DataContext';

export function GalleryPage() {
  const { galleryImages } = useData();

  const categories = ['All', 'Facilities', 'Equipment', 'Staff'];

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Lab Photo Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art diagnostic facility
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(galleryImages || []).map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 mb-1">{image.title}</h3>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Visit Our Lab</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            We welcome you to visit our facility and see our world-class infrastructure firsthand
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919049678380"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call to Schedule Visit
            </a>
            <a
              href="https://wa.me/919049678380"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Quality Standards Banner */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-gray-900 mb-4">Quality Standards</h3>
            <p className="text-gray-600 mb-6">
              We maintain the highest standards of quality and safety in all our services
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">NABL Standard Reports</div>
                <p className="text-sm text-gray-600">Through Partner Labs</p>
              </div>
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">Modern Equipment</div>
                <p className="text-sm text-gray-600">State-of-the-Art Technology</p>
              </div>
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">Expert Pathologists</div>
                <p className="text-sm text-gray-600">Experienced Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}