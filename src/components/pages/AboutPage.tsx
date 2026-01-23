import {
  Target,
  Eye,
  Shield,
  Heart,
  Users,
  Award,
  FileCheck,
  Microscope,
  Home,
  Clock,
  Smartphone,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import afrojImage from "../../assets/afroj.jpg";
import omkarImage from "../../assets/omkar.jpg";


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
  ];

  const benefits = [
    {
      icon: FileCheck,
      title: "NABL Standards",
      description: "Reports processed as per NABL guidelines for highest accuracy"
    },
    {
      icon: Microscope,
      title: "Latest Technology",
      description: "Fully automated analyzers from world-leading manufacturers"
    },
    {
      icon: Home,
      title: "Home Collection",
      description: "Free sample pickup from the comfort of your home"
    },
    {
      icon: Clock,
      title: "Fast Reports",
      description: "Same day report delivery for most routine investigations"
    },
    {
      icon: Smartphone,
      title: "Smart Reports",
      description: "Get your reports delivered instantly via WhatsApp & Email"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified pathologists and technicians with years of experience"
    }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
          <div className="flex overflow-x-auto pb-6 snap-x md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group min-w-[280px] snap-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-2 flex-shrink-0 md:flex-shrink relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}