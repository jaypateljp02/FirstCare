import { useState } from 'react';
import { useData, Offer } from '../../context/DataContext';
import { Plus, Trash2, Tag, Percent, Gift, Edit2, X } from 'lucide-react';

const icons = { Tag, Percent, Gift };

export function ManageOffers() {
    const { offers, addOffer, updateOffer, deleteOffer } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const emptyForm: Omit<Offer, 'id'> = {
        title: '',
        iconName: 'Tag',
        originalPrice: '',
        offerPrice: '',
        discount: '',
        description: '',
        features: [],
        color: 'blue'
    };

    const [formData, setFormData] = useState<Omit<Offer, 'id'>>(emptyForm);
    const [featuresInput, setFeaturesInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const offerData = {
            ...formData,
            features: featuresInput.split('\n').filter(f => f.trim() !== '')
        };

        if (editingId) {
            updateOffer(editingId, offerData);
            setEditingId(null);
        } else {
            addOffer(offerData);
        }

        setIsAdding(false);
        setFormData(emptyForm);
        setFeaturesInput('');
    };

    const handleEdit = (offer: Offer) => {
        setFormData({
            title: offer.title,
            iconName: offer.iconName,
            originalPrice: offer.originalPrice,
            offerPrice: offer.offerPrice,
            discount: offer.discount,
            description: offer.description,
            features: offer.features,
            color: offer.color
        });
        setFeaturesInput(offer.features.join('\n'));
        setEditingId(offer.id);
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData(emptyForm);
        setFeaturesInput('');
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Manage Offers</h1>
                <button
                    onClick={() => {
                        setEditingId(null);
                        setFormData(emptyForm);
                        setFeaturesInput('');
                        setIsAdding(!isAdding);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Offer
                </button>
            </div>

            {isAdding && (
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">{editingId ? 'Edit Offer' : 'Add New Offer'}</h2>
                        <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Color Theme</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.color}
                                    onChange={(e) => setFormData({ ...formData, color: e.target.value as any })}
                                >
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="purple">Purple</option>
                                    <option value="pink">Pink</option>
                                    <option value="orange">Orange</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.iconName}
                                    onChange={(e) => setFormData({ ...formData, iconName: e.target.value as any })}
                                >
                                    <option value="Tag">Tag</option>
                                    <option value="Percent">Percent</option>
                                    <option value="Gift">Gift</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. ₹2,499"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.originalPrice}
                                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Offer Price</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. ₹999"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.offerPrice}
                                    onChange={(e) => setFormData({ ...formData, offerPrice: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Discount Label</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. 60% OFF"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.discount}
                                    onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows={2}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Features (One per line)</label>
                            <textarea
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows={4}
                                value={featuresInput}
                                onChange={(e) => setFeaturesInput(e.target.value)}
                                placeholder="60+ Parameters Covered&#10;Free Home Sample Collection&#10;Reports in 24-48 Hours"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                                {editingId ? 'Update Offer' : 'Save Offer'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 gap-4">
                {offers.map((offer) => {
                    const Icon = icons[offer.iconName] || Tag;
                    return (
                        <div key={offer.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${offer.color}-100 text-${offer.color}-600`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{offer.title}</h3>
                                    <p className="text-sm text-gray-500">{offer.offerPrice} <span className="line-through text-xs ml-1">{offer.originalPrice}</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleEdit(offer)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Edit Offer"
                                >
                                    <Edit2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => deleteOffer(offer.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Delete Offer"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
