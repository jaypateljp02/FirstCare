import { Star, Quote } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      location: 'Koregaon Park',
      rating: 5,
      date: 'November 2025',
      text: 'Excellent service! The home sample collection was very convenient and the phlebotomist was professional. Got my reports on time via WhatsApp. Highly recommended!',
    },
    {
      name: 'Priya Mehta',
      location: 'Aundh',
      rating: 5,
      date: 'November 2025',
      text: 'Very satisfied with the service. The staff is courteous and the reports are accurate. I have been using their services for the past 2 years for my family\'s health checkups.',
    },
    {
      name: 'Amit Deshmukh',
      location: 'Kothrud',
      rating: 5,
      date: 'October 2025',
      text: 'Great experience! Booked via WhatsApp and the process was smooth. The collection executive arrived on time and was very gentle. Fast and reliable service.',
    },
    {
      name: 'Sneha Kulkarni',
      location: 'Viman Nagar',
      rating: 5,
      date: 'October 2025',
      text: 'I was worried about my thyroid test results, but the staff explained everything clearly. Professional service and competitive pricing. Will definitely come back.',
    },
    {
      name: 'Rajesh Patil',
      location: 'Hadapsar',
      rating: 5,
      date: 'September 2025',
      text: 'Best diagnostic center in Pune! My father needed urgent tests and they arranged home collection within an hour. The care and attention they provide is commendable.',
    },
    {
      name: 'Anjali Singh',
      location: 'Wakad',
      rating: 4,
      date: 'September 2025',
      text: 'Good service overall. The lab is clean and well-maintained. Reports were delivered on time. Only suggestion would be to improve the parking facility.',
    },
    {
      name: 'Vikram Joshi',
      location: 'Baner',
      rating: 5,
      date: 'August 2025',
      text: 'Highly professional team! I got my full body checkup done and everything was well organized. The doctor\'s consultation was also very helpful in understanding the reports.',
    },
    {
      name: 'Neha Patel',
      location: 'Kharadi',
      rating: 5,
      date: 'August 2025',
      text: 'Impressed with the quick turnaround time. Needed a diabetes panel urgently and got the reports the same evening. Very affordable prices too!',
    },
    {
      name: 'Sandeep Rao',
      location: 'Magarpatta',
      rating: 5,
      date: 'July 2025',
      text: 'Excellent facility with modern equipment. The staff is knowledgeable and friendly. Have recommended to all my friends and colleagues.',
    },
  ];

  const averageRating = 4.8;
  const totalReviews = 500;

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">What Our Patients Say</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-4xl text-gray-900 mb-2">{averageRating} out of 5</div>
            <p className="text-gray-600">
              Based on {totalReviews}+ verified reviews from our customers
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                  <p className="text-gray-600 relative z-10 pl-6">{testimonial.text}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Share Your Experience</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Have you used our services? We'd love to hear from you!
          </p>
          <a
            href="https://wa.me/919049678380"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Share Your Feedback
          </a>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl text-blue-600 mb-2">50,000+</div>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2">500,000+</div>
              <p className="text-gray-600">Tests Conducted</p>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2">2+</div>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2">4.8★</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}