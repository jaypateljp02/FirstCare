import { useState } from 'react';
import { useData, Service, ServiceCategory } from '../../context/DataContext';
import { Plus, Trash2, Edit2, X, Droplet, Activity, Heart, FileText, TestTube, FlaskConical, Pill, FileCheck, FolderOpen, Loader2 } from 'lucide-react';

const iconComponents = {
    Droplet,
    Activity,
    Heart,
    FileText,
    TestTube,
    FlaskConical,
    Pill,
    FileCheck
};

type IconName = keyof typeof iconComponents;

export function ManageServices() {
    const {
        services,
        serviceCategories,
        addService,
        updateService,
        deleteService,
        addServiceCategory,
        updateServiceCategory,
        deleteServiceCategory,
        loading
    } = useData();

    const [activeTab, setActiveTab] = useState<'services' | 'categories'>('services');
    const [isAddingService, setIsAddingService] = useState(false);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    // Service Form
    const emptyServiceForm: Omit<Service, 'id'> = {
        iconName: 'Droplet',
        title: '',
        description: '',
        reportTime: 'Same Day',
        category: serviceCategories[0]?.name || 'Blood Tests'
    };
    const [serviceForm, setServiceForm] = useState<Omit<Service, 'id'>>(emptyServiceForm);

    // Category Form
    const emptyCategoryForm: Omit<ServiceCategory, 'id'> = {
        name: '',
        iconName: 'Droplet'
    };
    const [categoryForm, setCategoryForm] = useState<Omit<ServiceCategory, 'id'>>(emptyCategoryForm);

    // Service handlers
    const handleServiceSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            if (editingServiceId) {
                await updateService(editingServiceId, serviceForm);
                setEditingServiceId(null);
            } else {
                await addService(serviceForm);
            }
            setIsAddingService(false);
            setServiceForm(emptyServiceForm);
        } catch (error) {
            console.error('Error saving service:', error);
            alert('Failed to save service. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteService = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) return;

        setDeletingId(id);
        try {
            await deleteService(id);
        } catch (error) {
            console.error('Error deleting service:', error);
            alert('Failed to delete service.');
        } finally {
            setDeletingId(null);
        }
    };

    const handleEditService = (service: Service) => {
        setServiceForm({
            iconName: service.iconName,
            title: service.title,
            description: service.description,
            reportTime: service.reportTime,
            category: service.category
        });
        setEditingServiceId(service.id);
        setIsAddingService(true);
    };

    const handleCancelService = () => {
        setIsAddingService(false);
        setEditingServiceId(null);
        setServiceForm(emptyServiceForm);
    };

    // Category handlers
    const handleCategorySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            if (editingCategoryId) {
                await updateServiceCategory(editingCategoryId, categoryForm);
                setEditingCategoryId(null);
            } else {
                await addServiceCategory(categoryForm);
            }
            setIsAddingCategory(false);
            setCategoryForm(emptyCategoryForm);
        } catch (error) {
            console.error('Error saving category:', error);
            alert('Failed to save category. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteCategory = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return;

        setDeletingId(id);
        try {
            await deleteServiceCategory(id);
        } catch (error) {
            console.error('Error deleting category:', error);
            alert('Failed to delete category.');
        } finally {
            setDeletingId(null);
        }
    };

    const handleEditCategory = (category: ServiceCategory) => {
        setCategoryForm({
            name: category.name,
            iconName: category.iconName
        });
        setEditingCategoryId(category.id);
        setIsAddingCategory(true);
    };

    const handleCancelCategory = () => {
        setIsAddingCategory(false);
        setEditingCategoryId(null);
        setCategoryForm(emptyCategoryForm);
    };

    // Group services by category for display
    const servicesByCategory: Record<string, Service[]> = {};
    services.forEach(service => {
        if (!servicesByCategory[service.category]) {
            servicesByCategory[service.category] = [];
        }
        servicesByCategory[service.category].push(service);
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">Loading services...</span>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Manage Services</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setActiveTab('services')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'services'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Services ({services.length})
                </button>
                <button
                    onClick={() => setActiveTab('categories')}
                    className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'categories'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    Categories ({serviceCategories.length})
                </button>
            </div>

            {/* Services Tab */}
            {activeTab === 'services' && (
                <div>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => {
                                setEditingServiceId(null);
                                setServiceForm(emptyServiceForm);
                                setIsAddingService(!isAddingService);
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Service
                        </button>
                    </div>

                    {/* Add/Edit Service Form */}
                    {isAddingService && (
                        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">{editingServiceId ? 'Edit Service' : 'Add New Service'}</h2>
                                <button onClick={handleCancelService} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <form onSubmit={handleServiceSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Complete Blood Count (CBC)"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={serviceForm.title}
                                            onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={serviceForm.category}
                                            onChange={(e) => setServiceForm({ ...serviceForm, category: e.target.value })}
                                        >
                                            {serviceCategories.map(cat => (
                                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={serviceForm.iconName}
                                            onChange={(e) => setServiceForm({ ...serviceForm, iconName: e.target.value as IconName })}
                                        >
                                            <option value="Droplet">Droplet (Blood)</option>
                                            <option value="Activity">Activity (Hormones)</option>
                                            <option value="Heart">Heart (Cardiac)</option>
                                            <option value="FileText">FileText (Reports)</option>
                                            <option value="TestTube">TestTube (General)</option>
                                            <option value="FlaskConical">Flask (Lab)</option>
                                            <option value="Pill">Pill (Vitamins)</option>
                                            <option value="FileCheck">FileCheck (Organ Function)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Report Time</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={serviceForm.reportTime}
                                            onChange={(e) => setServiceForm({ ...serviceForm, reportTime: e.target.value })}
                                        >
                                            <option value="Same Day">Same Day</option>
                                            <option value="4-6 Hours">4-6 Hours</option>
                                            <option value="24 Hours">24 Hours</option>
                                            <option value="48 Hours">48 Hours</option>
                                            <option value="3-5 Days">3-5 Days</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea
                                        required
                                        rows={2}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        value={serviceForm.description}
                                        onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                                    />
                                </div>

                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={handleCancelService}
                                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                        {editingServiceId ? 'Update Service' : 'Add Service'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Services List grouped by category */}
                    <div className="space-y-6">
                        {Object.entries(servicesByCategory).map(([category, categoryServices]) => {
                            const categoryData = serviceCategories.find(c => c.name === category);
                            const CategoryIcon = categoryData ? iconComponents[categoryData.iconName] : FolderOpen;

                            return (
                                <div key={category} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <CategoryIcon className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900">{category}</h3>
                                        <span className="text-sm text-gray-500">({categoryServices.length} tests)</span>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {categoryServices.map(service => {
                                            const ServiceIcon = iconComponents[service.iconName] || Droplet;
                                            return (
                                                <div key={service.id} className="flex items-center justify-between p-4 hover:bg-gray-50">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                            <ServiceIcon className="w-5 h-5 text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">{service.title}</h4>
                                                            <p className="text-sm text-gray-500">{service.description}</p>
                                                            <p className="text-xs text-blue-600 mt-1">Report: {service.reportTime}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleEditService(service)}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                            title="Edit Service"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteService(service.id)}
                                                            disabled={deletingId === service.id}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                                            title="Delete Service"
                                                        >
                                                            {deletingId === service.id ? (
                                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                            ) : (
                                                                <Trash2 className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Categories Tab */}
            {activeTab === 'categories' && (
                <div>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => {
                                setEditingCategoryId(null);
                                setCategoryForm(emptyCategoryForm);
                                setIsAddingCategory(!isAddingCategory);
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Category
                        </button>
                    </div>

                    {/* Add/Edit Category Form */}
                    {isAddingCategory && (
                        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">{editingCategoryId ? 'Edit Category' : 'Add New Category'}</h2>
                                <button onClick={handleCancelCategory} className="text-gray-400 hover:text-gray-600">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <form onSubmit={handleCategorySubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Blood Tests"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={categoryForm.name}
                                            onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                                        <select
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            value={categoryForm.iconName}
                                            onChange={(e) => setCategoryForm({ ...categoryForm, iconName: e.target.value as IconName })}
                                        >
                                            <option value="Droplet">Droplet (Blood)</option>
                                            <option value="Activity">Activity (Hormones)</option>
                                            <option value="Heart">Heart (Cardiac)</option>
                                            <option value="FileText">FileText (Reports)</option>
                                            <option value="TestTube">TestTube (General)</option>
                                            <option value="FlaskConical">Flask (Lab)</option>
                                            <option value="Pill">Pill (Vitamins)</option>
                                            <option value="FileCheck">FileCheck (Organ Function)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={handleCancelCategory}
                                        className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSaving}
                                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                        {editingCategoryId ? 'Update Category' : 'Add Category'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Categories List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {serviceCategories.map(category => {
                            const CategoryIcon = iconComponents[category.iconName] || FolderOpen;
                            const servicesCount = services.filter(s => s.category === category.name).length;

                            return (
                                <div key={category.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <CategoryIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{category.name}</h3>
                                            <p className="text-sm text-gray-500">{servicesCount} services</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleEditCategory(category)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            title="Edit Category"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCategory(category.id)}
                                            disabled={deletingId === category.id || servicesCount > 0}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                            title={servicesCount > 0 ? "Cannot delete - has services" : "Delete Category"}
                                        >
                                            {deletingId === category.id ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
