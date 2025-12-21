import { useState, useMemo, useEffect } from 'react';
import { Search, Clock, Droplet, Activity, Heart, FileText, TestTube, FlaskConical, Pill, FileCheck, FolderOpen, ChevronDown, ChevronUp, Grid3x3 } from 'lucide-react';
import { useData } from '../../context/DataContext';

// Icon mapping
const iconComponents: Record<string, any> = {
  Droplet,
  Activity,
  Heart,
  FileText,
  TestTube,
  FlaskConical,
  Pill,
  FileCheck,
};

export function ServicesPage() {
  const { services, serviceCategories } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  // Default to grid (all tests) view
  const [viewMode, setViewMode] = useState<'folder' | 'grid'>('grid');
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group services by category
  const servicesByCategory = useMemo(() => {
    const grouped: Record<string, typeof services> = {};
    filteredServices.forEach((service) => {
      if (!grouped[service.category]) {
        grouped[service.category] = [];
      }
      grouped[service.category].push(service);
    });
    return grouped;
  }, [filteredServices]);

  // Auto-expand categories when searching
  useEffect(() => {
    if (searchQuery && filteredServices.length > 0) {
      const categoriesWithResults = new Set(
        filteredServices.map((service) => service.category)
      );
      setOpenCategories(categoriesWithResults);
    }
  }, [searchQuery, filteredServices]);

  const categories = Object.keys(servicesByCategory).sort();

  const toggleCategory = (category: string) => {
    const newOpen = new Set(openCategories);
    if (newOpen.has(category)) {
      newOpen.delete(category);
    } else {
      newOpen.add(category);
    }
    setOpenCategories(newOpen);
  };

  // Get category icon from serviceCategories
  const getCategoryIcon = (categoryName: string) => {
    const category = serviceCategories.find(c => c.name === categoryName);
    if (category && iconComponents[category.iconName]) {
      return iconComponents[category.iconName];
    }
    return FolderOpen;
  };

  return (
    <div>
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-blue-900 mb-4">Our Diagnostic Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of pathology tests with accurate results and fast delivery
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search First Care Lab tests or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              />
            </div>
          </div>
          {/* View Toggle */}
          <div className="flex justify-center mt-4 gap-2">
            {/* All Tests (Grid) */}
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Grid3x3 className="w-4 h-4" />
              <span>All Tests</span>
            </button>
            {/* By Category (Folder) */}
            <button
              onClick={() => setViewMode('folder')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${viewMode === 'folder'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <FolderOpen className="w-4 h-4" />
              <span>By Category</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'folder' ? (
            /* Folder View */
            <div className="space-y-4">
              {categories.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No services found matching your search.</p>
                </div>
              ) : (
                categories.map((category) => {
                  const CategoryIcon = getCategoryIcon(category);
                  const isOpen = openCategories.has(category);
                  const categoryServices = servicesByCategory[category];

                  return (
                    <div
                      key={category}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
                    >
                      {/* Category Folder Header */}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                            <CategoryIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                            <p className="text-sm text-gray-500">
                              {categoryServices.length} {categoryServices.length === 1 ? 'test' : 'tests'} available
                            </p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {/* Category Content */}
                      {isOpen && (
                        <div className="border-t border-gray-200 bg-gray-50">
                          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categoryServices.map((service) => {
                              const ServiceIcon = iconComponents[service.iconName] || Droplet;
                              return (
                                <div
                                  key={service.id}
                                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <ServiceIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-gray-900 font-medium mb-1 text-sm">{service.title}</h4>
                                      <p className="text-xs text-gray-600 mb-2">{service.description}</p>
                                      <div className="flex items-center gap-2 text-xs">
                                        <div className="flex items-center gap-1 text-blue-600">
                                          <Clock className="w-3 h-3" />
                                          <span>{service.reportTime}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const ServiceIcon = iconComponents[service.iconName] || Droplet;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-blue-600">
                            <Clock className="w-4 h-4" />
                            <span>{service.reportTime}</span>
                          </div>
                          <div className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                            {service.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredServices.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">No services found matching your search.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Need Help Choosing the Right Test?</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Our healthcare experts are available to guide you in selecting the appropriate tests
            based on your health needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919049678380"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call Now
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
    </div>
  );
}