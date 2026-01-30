import {
  Target,
  Eye,
  Shield,
  Heart,
  Users,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import afrojImage from "../../assets/afroj.jpg";
import omkarImage from "../../assets/omkar.jpg";
import dromkarImage from "../../assets/dromkar.png";


export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Accuracy",
      description: "Precision in every test we conduct",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building relationships through reliability",
    },
    {
      icon: Users,
      title: "Care",
      description: "Patient-centric approach in everything",
    },
    {
      icon: Award,
      title: "Hygiene",
      description: "Maintaining highest cleanliness standards",
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Highly qualified professionals",
    },
  ];

  const team = [
    {
      name: "Afroj Mujawar",
      role: "Founder",
      qualification: "PGDMLT",
      src: afrojImage,
    },
    {
      name: "Omkar Bhand",
      role: "Founder",
      qualification: "PGDMLT",
      src: omkarImage,
    },
    {
      name: "Dr. Omkar Suresh Nage",
      role: "Consultant doctor",
      qualification: "MBBS, FCM, Fellowship In Internal Medicine & Diabetes (UK)",
      src: dromkarImage,
    },
  ];

  const benefits = [
    "NABL Standard Reports",
    "State-of-the-art Equipment",
    "Free Home Sample Collection",
    "Same Day Reports Available",
    "Digital Report Delivery",
    "Experienced Team of Pathologists",
  ];

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">
            About First Care Labs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in diagnostic healthcare
            services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Laboratory Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Established in 2023, First Care Labs began with a
                simple mission: to provide accurate and
                affordable diagnostic services to the people of
                Pune. What started as a small laboratory has now
                grown into one of the most trusted diagnostic
                centers in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have served more than 20,000
                patients, conducting over 200,000 tests with
                unwavering commitment to quality and accuracy.
                Our journey has been marked by continuous
                investment in cutting-edge technology and the
                development of our skilled team.
              </p>
              <p className="text-gray-600">
                Today, we stand proud as a trusted diagnostic
                center, providing NABL standard reports through our
                network of accredited partner laboratories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide world-class diagnostic services that
                are accurate, affordable, and accessible to all.
                We strive to be the first choice for pathology
                services by maintaining the highest standards of
                quality and delivering exceptional patient care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as the leading diagnostic
                center in Maharashtra, known for our innovation,
                reliability, and commitment to improving
                healthcare outcomes. We envision a future where
                quality healthcare is within everyone's reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team of experienced pathologists and technicians
            are dedicated to providing you with accurate results
            and exceptional care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="h-72 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    // @ts-ignore
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {member.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12">
            Why Choose First Care Labs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
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
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}