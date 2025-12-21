import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useData } from '../../context/DataContext';

export function BlogPage() {
  const { blogPosts } = useData();

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Health & Wellness Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights and tips for better health and understanding your test results
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(blogPosts || []).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors w-fit"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Stay Updated</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest health tips and updates
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-8">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Blood Tests',
              'Diabetes Care',
              'Thyroid Health',
              'Vitamin Deficiency',
              'Heart Health',
              'Preventive Care',
              'Test Preparation',
              'Women\'s Health',
              'Senior Care',
            ].map((topic, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
