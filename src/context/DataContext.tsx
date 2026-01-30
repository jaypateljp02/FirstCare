import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

// Define Types
export interface Offer {
    id: string;
    iconName: 'Tag' | 'Percent' | 'Gift';
    title: string;
    originalPrice: string;
    offerPrice: string;
    discount: string;
    description: string;
    features: string[];
    color: 'blue' | 'green' | 'purple' | 'pink' | 'orange';
}

export interface GalleryImage {
    id: string;
    src: string;
    title: string;
    category: string;
}

export interface BlogPost {
    id: string;
    image: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
}

export interface Service {
    id: string;
    iconName: 'Droplet' | 'Activity' | 'Heart' | 'FileText' | 'TestTube' | 'FlaskConical' | 'Pill' | 'FileCheck';
    title: string;
    description: string;
    reportTime: string;
    category: string;
}

export interface ServiceCategory {
    id: string;
    name: string;
    iconName: 'Droplet' | 'Activity' | 'Heart' | 'FileText' | 'TestTube' | 'FlaskConical' | 'Pill' | 'FileCheck';
}

interface DataContextType {
    offers: Offer[];
    galleryImages: GalleryImage[];
    blogPosts: BlogPost[];
    services: Service[];
    serviceCategories: ServiceCategory[];
    loading: boolean;
    error: string | null;
    addOffer: (offer: Omit<Offer, 'id'>) => Promise<void>;
    updateOffer: (id: string, offer: Omit<Offer, 'id'>) => Promise<void>;
    deleteOffer: (id: string) => Promise<void>;
    addGalleryImage: (image: Omit<GalleryImage, 'id'>) => Promise<void>;
    updateGalleryImage: (id: string, image: Omit<GalleryImage, 'id'>) => Promise<void>;
    deleteGalleryImage: (id: string) => Promise<void>;
    addBlogPost: (post: Omit<BlogPost, 'id'>) => Promise<void>;
    updateBlogPost: (id: string, post: Omit<BlogPost, 'id'>) => Promise<void>;
    deleteBlogPost: (id: string) => Promise<void>;
    addService: (service: Omit<Service, 'id'>) => Promise<void>;
    updateService: (id: string, service: Omit<Service, 'id'>) => Promise<void>;
    deleteService: (id: string) => Promise<void>;
    addServiceCategory: (category: Omit<ServiceCategory, 'id'>) => Promise<void>;
    updateServiceCategory: (id: string, category: Omit<ServiceCategory, 'id'>) => Promise<void>;
    deleteServiceCategory: (id: string) => Promise<void>;
    refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

import { defaultOffers } from './defaultOffersData';

const defaultGalleryImages: GalleryImage[] = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc2NDM5NjUxMHww&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Reception Area',
        category: 'Facilities',
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMHJvb218ZW58MXx8fHwxNzY0NTA3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Testing Room',
        category: 'Facilities',
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Lab Equipment',
        category: 'Equipment',
    },
];

const defaultBlogPosts: BlogPost[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        title: 'Importance of Complete Blood Count (CBC) Test',
        excerpt: 'Learn why CBC is one of the most common blood tests and what it reveals about your health.',
        content: 'A Complete Blood Count (CBC) is one of the most common blood tests prescribed by doctors...',
        date: 'November 25, 2025',
        readTime: '5 min read',
        category: 'Health Education',
    },
];

const defaultServices: Service[] = [
    {
        id: '1',
        iconName: 'Droplet',
        title: 'Complete Blood Count (CBC)',
        description: 'Comprehensive analysis of blood cells including RBC, WBC, and platelets',
        reportTime: 'Same Day',
        category: 'Blood Tests',
    },
    {
        id: '2',
        iconName: 'Activity',
        title: 'Thyroid Profile (T3, T4, TSH)',
        description: 'Complete thyroid function evaluation including all hormones',
        reportTime: '24 Hours',
        category: 'Hormone Tests',
    },
];

const defaultServiceCategories: ServiceCategory[] = [
    { id: '1', name: 'Blood Tests', iconName: 'Droplet' },
    { id: '2', name: 'Hormone Tests', iconName: 'Activity' },
    { id: '3', name: 'Health Packages', iconName: 'TestTube' },
];

// Helper to convert snake_case DB rows to camelCase
function dbToOffer(row: any): Offer {
    return {
        id: row.id,
        iconName: row.icon_name,
        title: row.title,
        originalPrice: row.original_price,
        offerPrice: row.offer_price,
        discount: row.discount,
        description: row.description,
        features: row.features || [],
        color: row.color,
    };
}

function dbToGalleryImage(row: any): GalleryImage {
    return {
        id: row.id,
        src: row.src,
        title: row.title,
        category: row.category,
    };
}

function dbToBlogPost(row: any): BlogPost {
    return {
        id: row.id,
        image: row.image,
        title: row.title,
        excerpt: row.excerpt,
        content: row.content,
        date: row.date,
        readTime: row.read_time,
        category: row.category,
    };
}

function dbToService(row: any): Service {
    return {
        id: row.id,
        iconName: row.icon_name,
        title: row.title,
        description: row.description,
        reportTime: row.report_time,
        category: row.category,
    };
}

function dbToServiceCategory(row: any): ServiceCategory {
    return {
        id: row.id,
        name: row.name,
        iconName: row.icon_name,
    };
}

export function DataProvider({ children }: { children: React.ReactNode }) {
    // Initialize with default data for instant loading
    const [offers, setOffers] = useState<Offer[]>(defaultOffers.map(offer => ({
        ...offer,
        features: [...offer.features, "Free Report Consultancy by Doctor"]
    })));
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(defaultGalleryImages);
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);
    const [services, setServices] = useState<Service[]>(defaultServices);
    const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(defaultServiceCategories);
    const [loading, setLoading] = useState(false); // Start as false since we have default data
    const [error, setError] = useState<string | null>(null);

    // Fetch all data from Supabase
    const refreshData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            // Fetch all tables in parallel
            const [offersRes, galleryRes, blogRes, servicesRes, categoriesRes] = await Promise.all([
                supabase.from('offers').select('*').order('created_at', { ascending: false }),
                supabase.from('gallery_images').select('*').order('created_at', { ascending: false }),
                supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
                supabase.from('services').select('*').order('created_at', { ascending: false }),
                supabase.from('service_categories').select('*').order('created_at', { ascending: false }),
            ]);

            // Check for errors and set data
            if (offersRes.error) throw offersRes.error;
            if (galleryRes.error) throw galleryRes.error;
            if (blogRes.error) throw blogRes.error;
            if (servicesRes.error) throw servicesRes.error;
            if (categoriesRes.error) throw categoriesRes.error;

            // Use fetched data or defaults if empty
            if (offersRes.data?.length) {
                setOffers(offersRes.data.map(dbToOffer).map(offer => ({
                    ...offer,
                    features: [...offer.features, "Free Report Consultancy by Doctor"]
                })));
            } else {
                setOffers(defaultOffers.map(offer => ({
                    ...offer,
                    features: [...offer.features, "Free Report Consultancy by Doctor"]
                })));
            }
            setGalleryImages(galleryRes.data?.length ? galleryRes.data.map(dbToGalleryImage) : defaultGalleryImages);
            setBlogPosts(blogRes.data?.length ? blogRes.data.map(dbToBlogPost) : defaultBlogPosts);
            setServices(servicesRes.data?.length ? servicesRes.data.map(dbToService) : defaultServices);
            setServiceCategories(categoriesRes.data?.length ? categoriesRes.data.map(dbToServiceCategory) : defaultServiceCategories);

            console.log('Data loaded from Supabase successfully');
        } catch (err: any) {
            console.error('Supabase error, using defaults:', err);
            setError(err.message || 'Failed to load data');
            // Fallback to defaults on error
            setOffers(defaultOffers.map(offer => ({
                ...offer,
                features: [...offer.features, "Free Report Consultancy by Doctor"]
            })));
            setGalleryImages(defaultGalleryImages);
            setBlogPosts(defaultBlogPosts);
            setServices(defaultServices);
            setServiceCategories(defaultServiceCategories);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial data fetch
    useEffect(() => {
        refreshData();
    }, [refreshData]);

    // Supabase Realtime subscription for live updates
    useEffect(() => {
        // Subscribe to all changes on the offers table
        const offersSubscription = supabase
            .channel('offers-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'offers' }, () => {
                console.log('Offers table changed, refreshing data...');
                refreshData();
            })
            .subscribe();

        // Subscribe to gallery_images changes
        const gallerySubscription = supabase
            .channel('gallery-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'gallery_images' }, () => {
                console.log('Gallery table changed, refreshing data...');
                refreshData();
            })
            .subscribe();

        // Subscribe to blog_posts changes
        const blogSubscription = supabase
            .channel('blog-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, () => {
                console.log('Blog table changed, refreshing data...');
                refreshData();
            })
            .subscribe();

        // Subscribe to services changes
        const servicesSubscription = supabase
            .channel('services-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, () => {
                console.log('Services table changed, refreshing data...');
                refreshData();
            })
            .subscribe();

        // Subscribe to service_categories changes
        const categoriesSubscription = supabase
            .channel('categories-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'service_categories' }, () => {
                console.log('Categories table changed, refreshing data...');
                refreshData();
            })
            .subscribe();

        // Cleanup subscriptions on unmount
        return () => {
            supabase.removeChannel(offersSubscription);
            supabase.removeChannel(gallerySubscription);
            supabase.removeChannel(blogSubscription);
            supabase.removeChannel(servicesSubscription);
            supabase.removeChannel(categoriesSubscription);
        };
    }, [refreshData]);


    // CRUD Operations for Offers
    const addOffer = async (offer: Omit<Offer, 'id'>) => {
        const { data, error } = await supabase
            .from('offers')
            .insert({
                icon_name: offer.iconName,
                title: offer.title,
                original_price: offer.originalPrice,
                offer_price: offer.offerPrice,
                discount: offer.discount,
                description: offer.description,
                features: offer.features,
                color: offer.color,
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding offer:', error);
            throw error;
        }
        setOffers(prev => [dbToOffer(data), ...prev]);
    };

    const updateOffer = async (id: string, offer: Omit<Offer, 'id'>) => {
        const { error } = await supabase
            .from('offers')
            .update({
                icon_name: offer.iconName,
                title: offer.title,
                original_price: offer.originalPrice,
                offer_price: offer.offerPrice,
                discount: offer.discount,
                description: offer.description,
                features: offer.features,
                color: offer.color,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating offer:', error);
            throw error;
        }
        setOffers(prev => prev.map(item => item.id === id ? { ...offer, id } : item));
    };

    const deleteOffer = async (id: string) => {
        const { error } = await supabase.from('offers').delete().eq('id', id);
        if (error) {
            console.error('Error deleting offer:', error);
            throw error;
        }
        setOffers(prev => prev.filter(item => item.id !== id));
    };

    // CRUD Operations for Gallery Images
    const addGalleryImage = async (image: Omit<GalleryImage, 'id'>) => {
        const { data, error } = await supabase
            .from('gallery_images')
            .insert({
                src: image.src,
                title: image.title,
                category: image.category,
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding gallery image:', error);
            throw error;
        }
        setGalleryImages(prev => [dbToGalleryImage(data), ...prev]);
    };

    const updateGalleryImage = async (id: string, image: Omit<GalleryImage, 'id'>) => {
        const { error } = await supabase
            .from('gallery_images')
            .update({
                src: image.src,
                title: image.title,
                category: image.category,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating gallery image:', error);
            throw error;
        }
        setGalleryImages(prev => prev.map(item => item.id === id ? { ...image, id } : item));
    };

    const deleteGalleryImage = async (id: string) => {
        const { error } = await supabase.from('gallery_images').delete().eq('id', id);
        if (error) {
            console.error('Error deleting gallery image:', error);
            throw error;
        }
        setGalleryImages(prev => prev.filter(item => item.id !== id));
    };

    // CRUD Operations for Blog Posts
    const addBlogPost = async (post: Omit<BlogPost, 'id'>) => {
        const { data, error } = await supabase
            .from('blog_posts')
            .insert({
                image: post.image,
                title: post.title,
                excerpt: post.excerpt,
                content: post.content,
                date: post.date,
                read_time: post.readTime,
                category: post.category,
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding blog post:', error);
            throw error;
        }
        setBlogPosts(prev => [dbToBlogPost(data), ...prev]);
    };

    const updateBlogPost = async (id: string, post: Omit<BlogPost, 'id'>) => {
        const { error } = await supabase
            .from('blog_posts')
            .update({
                image: post.image,
                title: post.title,
                excerpt: post.excerpt,
                content: post.content,
                date: post.date,
                read_time: post.readTime,
                category: post.category,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating blog post:', error);
            throw error;
        }
        setBlogPosts(prev => prev.map(item => item.id === id ? { ...post, id } : item));
    };

    const deleteBlogPost = async (id: string) => {
        const { error } = await supabase.from('blog_posts').delete().eq('id', id);
        if (error) {
            console.error('Error deleting blog post:', error);
            throw error;
        }
        setBlogPosts(prev => prev.filter(item => item.id !== id));
    };

    // CRUD Operations for Services
    const addService = async (service: Omit<Service, 'id'>) => {
        const { data, error } = await supabase
            .from('services')
            .insert({
                icon_name: service.iconName,
                title: service.title,
                description: service.description,
                report_time: service.reportTime,
                category: service.category,
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding service:', error);
            throw error;
        }
        setServices(prev => [dbToService(data), ...prev]);
    };

    const updateService = async (id: string, service: Omit<Service, 'id'>) => {
        const { error } = await supabase
            .from('services')
            .update({
                icon_name: service.iconName,
                title: service.title,
                description: service.description,
                report_time: service.reportTime,
                category: service.category,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating service:', error);
            throw error;
        }
        setServices(prev => prev.map(item => item.id === id ? { ...service, id } : item));
    };

    const deleteService = async (id: string) => {
        const { error } = await supabase.from('services').delete().eq('id', id);
        if (error) {
            console.error('Error deleting service:', error);
            throw error;
        }
        setServices(prev => prev.filter(item => item.id !== id));
    };

    // CRUD Operations for Service Categories
    const addServiceCategory = async (category: Omit<ServiceCategory, 'id'>) => {
        const { data, error } = await supabase
            .from('service_categories')
            .insert({
                name: category.name,
                icon_name: category.iconName,
            })
            .select()
            .single();

        if (error) {
            console.error('Error adding service category:', error);
            throw error;
        }
        setServiceCategories(prev => [dbToServiceCategory(data), ...prev]);
    };

    const updateServiceCategory = async (id: string, category: Omit<ServiceCategory, 'id'>) => {
        const { error } = await supabase
            .from('service_categories')
            .update({
                name: category.name,
                icon_name: category.iconName,
            })
            .eq('id', id);

        if (error) {
            console.error('Error updating service category:', error);
            throw error;
        }
        setServiceCategories(prev => prev.map(item => item.id === id ? { ...category, id } : item));
    };

    const deleteServiceCategory = async (id: string) => {
        const { error } = await supabase.from('service_categories').delete().eq('id', id);
        if (error) {
            console.error('Error deleting service category:', error);
            throw error;
        }
        setServiceCategories(prev => prev.filter(item => item.id !== id));
    };

    return (
        <DataContext.Provider value={{
            offers,
            galleryImages,
            blogPosts,
            services,
            serviceCategories,
            loading,
            error,
            addOffer,
            updateOffer,
            deleteOffer,
            addGalleryImage,
            updateGalleryImage,
            deleteGalleryImage,
            addBlogPost,
            updateBlogPost,
            deleteBlogPost,
            addService,
            updateService,
            deleteService,
            addServiceCategory,
            updateServiceCategory,
            deleteServiceCategory,
            refreshData,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}
