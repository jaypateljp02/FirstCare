import { useState } from 'react';
import { useData, BlogPost } from '../../context/DataContext';
import { Plus, Trash2, Edit2, X, Loader2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ManageBlog() {
    const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost, loading } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const emptyForm: Omit<BlogPost, 'id'> = {
        image: '',
        title: '',
        excerpt: '',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: '5 min read',
        category: 'Health Education',
        content: ''
    };

    const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>(emptyForm);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            if (editingId) {
                await updateBlogPost(editingId, formData);
                setEditingId(null);
            } else {
                await addBlogPost(formData);
            }
            setIsAdding(false);
            setFormData(emptyForm);
        } catch (error) {
            console.error('Error saving blog post:', error);
            alert('Failed to save blog post. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog post?')) return;

        setDeletingId(id);
        try {
            await deleteBlogPost(id);
        } catch (error) {
            console.error('Error deleting blog post:', error);
            alert('Failed to delete blog post.');
        } finally {
            setDeletingId(null);
        }
    };

    const handleEdit = (post: BlogPost) => {
        setFormData({
            image: post.image,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            readTime: post.readTime,
            category: post.category,
            content: post.content || ''
        });
        setEditingId(post.id);
        setIsAdding(true);
    };

    const handleCancel = () => {
        setIsAdding(false);
        setEditingId(null);
        setFormData(emptyForm);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">Loading blog posts...</span>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Manage Blog</h1>
                <button
                    onClick={() => {
                        setEditingId(null);
                        setFormData(emptyForm);
                        setIsAdding(!isAdding);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Post
                </button>
            </div>

            {isAdding && (
                <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">{editingId ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
                        <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="url"
                                required
                                placeholder="https://example.com/image.jpg"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                        </div>

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
                                    <option value="Health Education">Health Education</option>
                                    <option value="Preventive Care">Preventive Care</option>
                                    <option value="Test Preparation">Test Preparation</option>
                                    <option value="Chronic Disease">Chronic Disease</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (Optional)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 5 min read"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    value={formData.readTime}
                                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                            <textarea
                                required
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Content (Markdown supported, Optional)</label>
                            <textarea
                                rows={10}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
                                disabled={isSaving}
                                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                                {editingId ? 'Update Post' : 'Publish Post'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <div className="aspect-[16/10]">
                            <ImageWithFallback
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{post.category}</span>
                                <span className="text-xs text-gray-500">{post.date}</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                        </div>
                        <div className="p-4 border-t border-gray-100 flex justify-end gap-2">
                            <button
                                onClick={() => handleEdit(post)}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                                <Edit2 className="w-4 h-4" />
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(post.id)}
                                disabled={deletingId === post.id}
                                className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                            >
                                {deletingId === post.id ? (
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
