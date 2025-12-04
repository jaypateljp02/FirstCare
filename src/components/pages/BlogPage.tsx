import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function BlogPage() {
  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Importance of Complete Blood Count (CBC) Test',
      excerpt:
        'Learn why CBC is one of the most common blood tests and what it reveals about your health. Understand the significance of RBC, WBC, and platelet counts.',
      date: 'November 25, 2025',
      readTime: '5 min read',
      category: 'Health Education',
    },
    {
      image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY0NDg0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Signs of Vitamin D Deficiency You Should Not Ignore',
      excerpt:
        'Vitamin D deficiency is common in urban populations. Discover the warning signs, risk factors, and how a simple blood test can help you maintain optimal levels.',
      date: 'November 20, 2025',
      readTime: '6 min read',
      category: 'Preventive Care',
    },
    {
      image: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'How to Prepare for Fasting Blood Tests',
      excerpt:
        'Proper preparation is key to accurate test results. Learn the dos and don\'ts before fasting blood tests including what you can drink and medication guidelines.',
      date: 'November 15, 2025',
      readTime: '4 min read',
      category: 'Test Preparation',
    },
    {
      image: 'https://images.unsplash.com/photo-1576670158706-8d5b044b61da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbGFifGVufDF8fHx8MTc2NDUwNzYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Understanding Your Thyroid Function Test Results',
      excerpt:
        'Thyroid disorders affect millions. Decode your T3, T4, and TSH values and understand what they mean for your metabolism, energy levels, and overall health.',
      date: 'November 10, 2025',
      readTime: '7 min read',
      category: 'Health Education',
    },
    {
      image: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMHJvb218ZW58MXx8fHwxNzY0NTA3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Diabetes Management: Essential Tests You Need',
      excerpt:
        'Regular monitoring is crucial for diabetes management. Learn about HbA1c, fasting sugar, and post-prandial tests and how often you should get tested.',
      date: 'November 5, 2025',
      readTime: '6 min read',
      category: 'Chronic Disease',
    },
    {
      image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc2NDM5NjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Annual Health Checkup: Why It Matters',
      excerpt:
        'Prevention is better than cure. Discover why an annual full body checkup is essential for early detection of health issues and maintaining optimal wellness.',
      date: 'October 30, 2025',
      readTime: '5 min read',
      category: 'Preventive Care',
    },
  ];

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
            {blogPosts.map((post, index) => (
              <article
                key={index}
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
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
