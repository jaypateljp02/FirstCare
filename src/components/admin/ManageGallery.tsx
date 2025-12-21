import { useState, useRef } from 'react';
import { useData, GalleryImage } from '../../context/DataContext';
import { Plus, Trash2, Edit2, X, Loader2, Upload, Link } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { uploadImage } from '../../lib/supabase';

export function ManageGallery() {
    const { galleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage, loading } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const emptyForm: Omit<GalleryImage, 'id'> = {
        src: '',
        title: '',
        category: 'Facilities'
    };

    const [formData, setFormData] = useState<Omit<GalleryImage, 'id'>>(emptyForm);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create preview URL
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            // Auto-fill title from filename if empty
            if (!formData.title) {
                const nameWithoutExt = file.name.replace(/\.[^/.]+$/, '');
                setFormData({ ...formData, title: nameWithoutExt });
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            let imageUrl = formData.src;

            // If file mode and file selected, upload it
            if (uploadMode === 'file' && selectedFile) {
                setIsUploading(true);
                imageUrl = await uploadImage(selectedFile, 'gallery');
                setIsUploading(false);
            }

            const imageData = { ...formData, src: imageUrl };

            if (editingId) {
                await updateGalleryImage(editingId, imageData);
                setEditingId(null);
            } else {
                await addGalleryImage(imageData);
            }
            setIsAdding(false);
            setFormData(emptyForm);
            setSelectedFile(null);
            setPreviewUrl('');
        } catch (error) {
            console.error('Error saving gallery image:', error);
            alert('Failed to save image. Please try again.');
        } finally {
            setIsSaving(false);
            setIsUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this image?')) return;

        setDeletingId(id);
        try {
            await deleteGalleryImage(id);
        } catch (error) {
            console.error('Error deleting image:', error);
            alert('Failed to delete image.');
        } finally {
            setDeletingId(null);
        }
    };

    const handleEdit = (image: GalleryImage) => {
        setFormData({
            src: image.src,
            title: image.title,
            category: image.category
        });
        setEditingId(image.id);
        setIsAdding(true);
        setUploadMode('url'); // When editing, default to URL mode since image already exists
        setPreviewUrl(image.src);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData(emptyForm);
        setSelectedFile(null);
        setPreviewUrl('');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">Loading gallery...</span>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Manage Gallery</h1>
                <button
                    onClick={() => {
                        setEditingId(null);
                        setFormData(emptyForm);
                        setSelectedFile(null);
                        setPreviewUrl('');
                        setUploadMode('file');
                        setIsAdding(!isAdding);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Image
                </button>
            </div>

            {isAdding && (
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">{editingId ? 'Edit Image' : 'Add New Image'}</h2>
                        <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Upload Mode Toggle */}
                    <div className="flex gap-2 mb-4">
                        <button
                            type="button"
                            onClick={() => setUploadMode('file')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${uploadMode === 'file'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <Upload className="w-4 h-4" />
                            Upload File
                        </button>
                        <button
                            type="button"
                            onClick={() => setUploadMode('url')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${uploadMode === 'url'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <Link className="w-4 h-4" />
                            Use URL
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* File Upload Mode */}
                        {uploadMode === 'file' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
                                >
                                    {previewUrl ? (
                                        <div className="space-y-2">
                                            <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className="max-h-48 mx-auto rounded-lg object-cover"
                                            />
                                            <p className="text-sm text-gray-500">{selectedFile?.name}</p>
                                            <p className="text-xs text-blue-600">Click to change</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <Upload className="w-10 h-10 mx-auto text-gray-400" />
                                            <p className="text-gray-600">Click to upload an image</p>
                                            <p className="text-xs text-gray-400">JPG, PNG, GIF up to 10MB</p>
                                        </div>
                                    )}
                                </div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />
                            </div>
                        )}

                        {/* URL Mode */}
                        {uploadMode === 'url' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="url"
                                    required={uploadMode === 'url'}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.src}
                                    onChange={(e) => {
                                        setFormData({ ...formData, src: e.target.value });
                                        setPreviewUrl(e.target.value);
                                    }}
                                />
                                {previewUrl && uploadMode === 'url' && (
                                    <div className="mt-2">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="max-h-32 rounded-lg object-cover"
                                            onError={() => setPreviewUrl('')}
                                        />
                                    </div>
                                )}
                            </div>
                        )}

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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="Facilities">Facilities</option>
                                    <option value="Equipment">Equipment</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
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
                                disabled={isSaving || (uploadMode === 'file' && !selectedFile && !editingId)}
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                {isUploading ? 'Uploading...' : editingId ? 'Update Image' : 'Add to Gallery'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.map((image) => (
                    <div key={image.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-video">
                            <ImageWithFallback
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="font-medium text-gray-900 truncate">{image.title}</h3>
                            <p className="text-xs text-gray-500">{image.category}</p>
                        </div>
                        <div className="p-3 border-t border-gray-100 flex justify-end gap-2">
                            <button
                                onClick={() => handleEdit(image)}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(image.id)}
                                disabled={deletingId === image.id}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                            >
                                {deletingId === image.id ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Trash2 className="w-4 h-4" />
                                )}
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
