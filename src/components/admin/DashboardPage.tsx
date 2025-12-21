import { Link } from 'react-router-dom';
import { Tag, Image, FileText, TestTube } from 'lucide-react';
import { useData } from '../../context/DataContext';

export function DashboardPage() {
    const { offers, galleryImages, blogPosts, services } = useData();

    const stats = [
        { name: 'Active Offers', value: offers.length, icon: Tag, color: 'bg-blue-500', href: '/admin/offers' },
        { name: 'Services', value: services.length, icon: TestTube, color: 'bg-cyan-500', href: '/admin/services' },
        { name: 'Gallery Images', value: galleryImages.length, icon: Image, color: 'bg-green-500', href: '/admin/gallery' },
        { name: 'Blog Posts', value: blogPosts.length, icon: FileText, color: 'bg-purple-500', href: '/admin/blog' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Link
                            key={stat.name}
                            to={stat.href}
                            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
