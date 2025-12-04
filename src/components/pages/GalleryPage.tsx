import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc2NDM5NjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Reception Area',
      category: 'Facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMHJvb218ZW58MXx8fHwxNzY0NTA3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Testing Room',
      category: 'Facilities',
    },
    {
      src: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Lab Equipment',
      category: 'Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY0NDg0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Microscopy Section',
      category: 'Equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Lab Technicians at Work',
      category: 'Staff',
    },
    {
      src: 'https://images.unsplash.com/photo-1576670158706-8d5b044b61da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbGFifGVufDF8fHx8MTc2NDUwNzYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Healthcare Professional',
      category: 'Staff',
    },
  ];

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
            {galleryImages.map((image, index) => (
              <div
                key={index}
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

      {/* Certifications Banner */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-gray-900 mb-4">Certified & Accredited</h3>
            <p className="text-gray-600 mb-6">
              Our laboratory meets the highest standards of quality and safety
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">NABL Certified</div>
                <p className="text-sm text-gray-600">ISO 15189:2012</p>
              </div>
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">ISO Certified</div>
                <p className="text-sm text-gray-600">Quality Management</p>
              </div>
              <div className="px-8 py-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-900">CAP Accredited</div>
                <p className="text-sm text-gray-600">Excellence in Pathology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}