import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehvrcyllauhuqbldbdsm.supabase.co';
const supabaseAnonKey = 'sb_publishable_LmHyqojttKmlLekNvlKn4Q_2KdtNh4Z';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
