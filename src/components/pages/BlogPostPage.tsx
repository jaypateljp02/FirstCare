import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

export function BlogPostPage() {
    const { id } = useParams<{ id: string }>();
    const { blogPosts } = useData();
    const navigate = useNavigate();

    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </button>
            </div>
        );
    }

    // Simple Markdown-like parser
    const renderContent = (content: string) => {
        if (!content) return null;

        return content.split('\n').map((line, index) => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                        {trimmedLine.replace('### ', '')}
                    </h3>
                );
            }

            if (trimmedLine.startsWith('1. ')) {
                // Simple ordered list handling (assuming single lines for now or manual handling)
                // Actually better to just render as text with spacing if not fully parsing lists
                return (
                    <div key={index} className="flex gap-2 ml-4 mb-2">
                        <span className="font-bold min-w-[20px]">{trimmedLine.split(' ')[0]}</span>
                        <span>{trimmedLine.substring(3)}</span>
                    </div>
                );
            }

            if (trimmedLine.startsWith('* ')) {
                return (
                    <div key={index} className="flex gap-2 items-start ml-4 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span className="text-gray-700">{trimmedLine.replace('* ', '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .split(/<strong>(.*?)<\/strong>/g)
                            .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))
                        }</span>
                    </div>
                );
            }

            if (trimmedLine === '') {
                return <div key={index} className="h-4" />;
            }

            // Paragraph with bold support
            return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {trimmedLine
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .split(/<strong>(.*?)<\/strong>/g)
                        .map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-gray-900">{part}</strong> : part))
                    }
                </p>
            );
        });
    };

    return (
        <article className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="w-full h-[400px] relative">
                <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-3xl mx-auto">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </button>

                    <div className="prose prose-blue max-w-none">
                        {renderContent(post.content || post.excerpt)}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-gray-500 italic">
                            Disclaimer: This content is for educational purposes only and does not constitute medical advice.
                        </p>
                        <button
                            onClick={async () => {
                                const shareData = {
                                    title: post.title,
                                    text: post.excerpt,
                                    url: window.location.href,
                                };

                                try {
                                    if (navigator.share) {
                                        await navigator.share(shareData);
                                    } else {
                                        // Fallback: copy to clipboard
                                        await navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    }
                                } catch (err) {
                                    // User cancelled or error
                                    console.log('Share cancelled or failed:', err);
                                }
                            }}
                            className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                        >
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
