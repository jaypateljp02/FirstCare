import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehvrcyllauhuqbldbdsm.supabase.co';
const supabaseAnonKey = 'sb_publishable_LmHyqojttKmlLekNvlKn4Q_2KdtNh4Z';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket name
const STORAGE_BUCKET = 'images';

// Upload image to Supabase Storage
export async function uploadImage(file: File, folder: string = 'gallery'): Promise<string> {
    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        });

    if (error) {
        console.error('Upload error:', error);
        throw new Error(`Failed to upload image: ${error.message}`);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(data.path);

    return urlData.publicUrl;
}

// Delete image from Supabase Storage
export async function deleteImage(imageUrl: string): Promise<void> {
    // Extract path from URL
    const urlParts = imageUrl.split(`${STORAGE_BUCKET}/`);
    if (urlParts.length < 2) return; // Not a storage URL

    const path = urlParts[1];

    const { error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .remove([path]);

    if (error) {
        console.error('Delete error:', error);
    }
}

// Database types
export interface DbOffer {
    id: string;
    icon_name: 'Tag' | 'Percent' | 'Gift';
    title: string;
    original_price: string;
    offer_price: string;
    discount: string;
    description: string;
    features: string[];
    color: 'blue' | 'green' | 'purple' | 'pink' | 'orange';
    created_at?: string;
}

export interface DbGalleryImage {
    id: string;
    src: string;
    title: string;
    category: string;
    created_at?: string;
}

export interface DbBlogPost {
    id: string;
    image: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    read_time: string;
    category: string;
    created_at?: string;
}

export interface DbService {
    id: string;
    icon_name: 'Droplet' | 'Activity' | 'Heart' | 'FileText' | 'TestTube' | 'FlaskConical' | 'Pill' | 'FileCheck';
    title: string;
    description: string;
    report_time: string;
    category: string;
    created_at?: string;
}

export interface DbServiceCategory {
    id: string;
    name: string;
    icon_name: 'Droplet' | 'Activity' | 'Heart' | 'FileText' | 'TestTube' | 'FlaskConical' | 'Pill' | 'FileCheck';
    created_at?: string;
}
