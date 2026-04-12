import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import logo from "../assets/9276aa0b56df4cc5bee08a3e395cee0e361be502.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Offer", path: "/offers" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  const moreNavItems = [
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Certifications", path: "/certifications" },
    { name: "FAQ", path: "/faq" },
    { name: "Home Sample Collection", path: "/home-collection" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const allNavItems = [...navItems, ...moreNavItems];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="First Care Logo" className="h-10" />
            <div>
              <div className="text-blue-900">Pathology Laboratory</div>
              <div className="text-xs text-gray-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${isActive(item.path)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            {/* More Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex items-center gap-1 transition-colors text-gray-700 hover:text-blue-600 focus:outline-none data-[state=open]:text-blue-600">
                  <span>More</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  sideOffset={15}
                  align="center"
                  className="bg-white rounded-lg shadow-xl border border-gray-100 p-2 z-10 w-80 animate-in fade-in-0 zoom-in-95"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {moreNavItems.map((item) => (
                      <DropdownMenu.Item key={item.path} asChild>
                        <Link
                          to={item.path}
                          className="px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:bg-blue-50 focus:text-blue-600 transition-colors text-center"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenu.Item>
                    ))}
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          {/* Quick Action Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917875426669"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/917875426669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 px-4">
              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${isActive(item.path)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="tel:+917875426669"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg flex-1 justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/917875426669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg flex-1 justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}