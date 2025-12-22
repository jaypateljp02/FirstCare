import { Award, Shield, CheckCircle, Microscope, FlaskConical, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CertificationsPage() {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO Certification',
      credential: 'ISO 9001:2015',
      description:
        'Certified for Quality Management Systems, demonstrating our commitment to consistent delivery of quality diagnostic services and customer satisfaction.',
    },
    {
      icon: Award,
      title: 'CAP Accreditation',
      credential: 'College of American Pathologists',
      description:
        'Recognized by CAP for excellence in pathology and laboratory practices, following international standards for accuracy and reliability.',
    },
  ];

  const equipment = [
    {
      name: 'Automated Hematology Analyzer',
      description: '5-part differential cell counter for complete blood count with high precision',
      manufacturer: 'Sysmex Corporation',
    },
    {
      name: 'Fully Automated Chemistry Analyzer',
      description: 'High-throughput biochemistry analyzer for liver, kidney, lipid, and cardiac panels',
      manufacturer: 'Beckman Coulter',
    },
    {
      name: 'CLIA Analyzer',
      description: 'Chemiluminescence immunoassay system for thyroid, hormones, and tumor markers',
      manufacturer: 'Roche Diagnostics',
    },
    {
      name: 'HbA1c Analyzer',
      description: 'Dedicated analyzer for precise glycated hemoglobin measurement',
      manufacturer: 'Bio-Rad',
    },
    {
      name: 'Automated Urine Analyzer',
      description: 'Complete urine chemistry and microscopy analysis system',
      manufacturer: 'Siemens Healthineers',
    },
    {
      name: 'Coagulation Analyzer',
      description: 'Specialized equipment for blood clotting and hemostasis studies',
      manufacturer: 'Stago Diagnostics',
    },
  ];

  const qualityStandards = [
    {
      icon: CheckCircle,
      title: 'Internal Quality Control',
      description: 'Daily calibration and quality checks on all equipment before testing',
    },
    {
      icon: Microscope,
      title: 'External Quality Assessment',
      description: 'Regular participation in national and international proficiency testing programs',
    },
    {
      icon: Users,
      title: 'Trained Personnel',
      description: 'Qualified pathologists and technicians with continuous training and certification',
    },
    {
      icon: FlaskConical,
      title: 'Standard Operating Procedures',
      description: 'Documented SOPs for all tests ensuring consistency and accuracy',
    },
    {
      icon: Shield,
      title: 'Sample Integrity',
      description: 'Strict protocols for sample collection, handling, and storage',
    },
    {
      icon: Award,
      title: 'Audit & Compliance',
      description: 'Regular internal and external audits to maintain highest standards',
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Certifications & Technology</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Committed to excellence through world-class certifications and state-of-the-art equipment
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Our Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">{cert.title}</h3>
                <div className="text-sm text-blue-600 mb-4">{cert.credential}</div>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-4">World-Class Equipment</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our laboratory is equipped with the latest automated analyzers from leading global manufacturers
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="text-xs text-blue-600">Manufacturer: {item.manufacturer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">Quality Control Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityStandards.map((standard, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <standard.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">{standard.title}</h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quality Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-6">Why Quality Matters</h2>
            <p className="text-gray-600 mb-8">
              Accurate diagnostic results are the foundation of effective medical treatment. Our
              commitment to quality ensures that every test result you receive is reliable,
              precise, and clinically meaningful. We invest continuously in the latest technology,
              rigorous quality control, and staff training to deliver results you can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl text-blue-600 mb-2">99.9%</div>
                <p className="text-sm text-gray-600">Accuracy Rate</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">100%</div>
                <p className="text-sm text-gray-600">Quality Compliance</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-2">24/7</div>
                <p className="text-sm text-gray-600">Quality Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Images */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-8">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <Shield className="w-20 h-20 text-blue-600" />
              </div>
              <div className="text-gray-900">ISO Certificate</div>
              <p className="text-sm text-gray-600 mt-2">Quality Management System</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                <Award className="w-20 h-20 text-blue-600" />
              </div>
              <div className="text-gray-900">CAP Certificate</div>
              <p className="text-sm text-gray-600 mt-2">Laboratory Accreditation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Experience Quality Healthcare</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Trust MediPath Labs for accurate, reliable diagnostic services backed by world-class certifications
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+917875426669"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book Your Test
            </a>
            <a
              href="https://wa.me/917875426669"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}