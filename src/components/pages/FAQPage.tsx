import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a test?',
      answer:
        'You can book a test by calling us at +91 9325000356, messaging us on WhatsApp, or visiting our lab directly. For home sample collection, simply share your address and preferred time slot via WhatsApp, and we\'ll arrange a convenient pickup.',
    },
    {
      question: 'Do you offer home sample collection?',
      answer:
        'Yes, we offer free home sample collection for tests above ₹500. Our trained phlebotomists visit your home at your preferred time between 7 AM to 7 PM. Home collection is available across all major areas in Pune.',
    },
    {
      question: 'When will I get my reports?',
      answer:
        'Report delivery time varies by test type. Most routine tests like CBC, blood sugar, and urine tests are delivered the same day. Specialized tests may take 24-48 hours. You will receive your reports digitally via WhatsApp and email.',
    },
    {
      question: 'Is fasting required for tests?',
      answer:
        'Fasting requirements depend on the specific test. Tests like fasting blood sugar, lipid profile, and liver function tests typically require 10-12 hours of fasting. Our team will inform you about fasting requirements when you book your test.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach our customer support team via phone at +91 98765 43210, WhatsApp at the same number, or email us at info@medipathlabs.com. Our support is available Monday to Saturday from 7 AM to 9 PM and Sunday from 8 AM to 6 PM.',
    },
    {
      question: 'Are your reports accurate and reliable?',
      answer:
        'Yes, we provide NABL standard reports through our network of accredited partner laboratories. Our facility uses state-of-the-art equipment and follows strict protocols. All tests are supervised by experienced pathologists to ensure accuracy.',
    },
    {
      question: 'What are your payment options?',
      answer:
        'We accept all payment methods including cash, credit/debit cards, UPI, digital wallets, and online banking. Payment can be made at the lab or to our collection executive during home sample collection.',
    },
    {
      question: 'Can I get a hard copy of my report?',
      answer:
        'Yes, while we primarily provide digital reports via WhatsApp and email, you can collect a hard copy from our lab. If you need a hard copy delivered to your home, please inform us during booking.',
    },
    {
      question: 'Do you provide doctor consultation?',
      answer:
        'While we focus on diagnostic services, we can help you understand your reports and recommend specialists if needed. For detailed consultation, we can connect you with our network of partner physicians.',
    },
    {
      question: 'What safety measures do you follow?',
      answer:
        'We follow strict hygiene protocols including use of sterile equipment, gloves, and masks. All our collection executives are trained in safe handling practices. Our lab is regularly sanitized and maintains clean room standards.',
    },
    {
      question: 'Can I book tests for my family members?',
      answer:
        'Yes, you can book tests for multiple family members at once. For home collection, all family members can be attended to during a single visit. Group bookings also qualify for special discounts.',
    },
    {
      question: 'Do you accept health insurance?',
      answer:
        'We provide detailed invoices that you can submit to your insurance provider for reimbursement. Please check with your insurance company regarding their cashless facility and reimbursement policies.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our diagnostic services
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-gray-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our customer support team is always ready to help you with any queries
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919049678380"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/919049678380"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:info@firstcarepathology.com"
              className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Quick Tips for Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-700 rounded-xl p-6">
              <h3 className="mb-2">Before Your Test</h3>
              <p className="text-blue-100 text-sm">
                Follow fasting instructions if required. Bring your prescription and previous
                reports if available.
              </p>
            </div>
            <div className="bg-blue-700 rounded-xl p-6">
              <h3 className="mb-2">During Collection</h3>
              <p className="text-blue-100 text-sm">
                Stay relaxed and hydrated. Inform the phlebotomist if you have any allergies or
                concerns.
              </p>
            </div>
            <div className="bg-blue-700 rounded-xl p-6">
              <h3 className="mb-2">After Your Test</h3>
              <p className="text-blue-100 text-sm">
                You'll receive your reports digitally. Consult with your doctor to understand
                the results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}