import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    author?: string;
}

const defaultSEO = {
    siteName: 'First Care Pathology Lab',
    title: 'First Care Pathology Lab | Best Diagnostic Centre in Hinjawadi, Pune',
    description: 'Leading diagnostic center in Hinjawadi, Pune offering 300+ tests. Free home sample collection. Same day reports. NABL standard reports. Call: +91 9049678380',
    keywords: 'pathology lab Hinjawadi, blood test Pune, diagnostic centre near me, home sample collection Pune, First Care Lab',
    image: 'https://firstcarepathology.com/og-image.jpg',
    url: 'https://firstcarepathology.com',
};

export function SEO({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    publishedTime,
    author,
}: SEOProps) {
    const seo = {
        title: title ? `${title} | First Care Pathology Lab` : defaultSEO.title,
        description: description || defaultSEO.description,
        keywords: keywords || defaultSEO.keywords,
        image: image || defaultSEO.image,
        url: url || defaultSEO.url,
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content={defaultSEO.siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.url} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image} />

            {/* Article specific */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={seo.url} />
        </Helmet>
    );
}

// Page-specific SEO configurations
export const pageSEO = {
    home: {
        title: undefined, // Uses default
        description: 'First Care Pathology Lab - Leading diagnostic center in Hinjawadi, Pune. Offering 300+ tests including blood tests, thyroid panel, diabetes tests, full body checkup. Free home sample collection. Same day reports.',
        keywords: 'pathology lab Hinjawadi, blood test Pune, diagnostic centre near me, home sample collection Pune, CBC test, thyroid test, diabetes test, full body checkup Hinjawadi',
    },
    services: {
        title: 'All Tests & Services',
        description: 'Complete list of 300+ pathology tests available at First Care Lab Hinjawadi. Blood tests, hormone tests, diabetes screening, liver function, kidney function, thyroid panel, and more.',
        keywords: 'pathology tests Pune, blood tests list, CBC test, lipid profile, LFT test, KFT test, thyroid test, diabetes test, full body checkup price',
    },
    about: {
        title: 'About Us',
        description: 'Learn about First Care Pathology Lab - Your trusted diagnostic partner in Hinjawadi, Pune since 2010. Expert pathologists, modern equipment, and commitment to accuracy.',
        keywords: 'about First Care Lab, pathology lab history, diagnostic center Hinjawadi, expert pathologists Pune',
    },
    contact: {
        title: 'Contact Us',
        description: 'Contact First Care Pathology Lab Hinjawadi. Call +91 7875426669 for appointments, WhatsApp booking, and home sample collection. Visit our lab in Hinjawadi, Pune.',
        keywords: 'First Care Lab contact, pathology lab phone number, home sample collection booking, lab address Hinjawadi',
    },
    homeCollection: {
        title: 'Free Home Sample Collection',
        description: 'Book free home sample collection in Hinjawadi, Pune. Our trained phlebotomists visit your home. Available 7 AM to 7 PM. WhatsApp: +91 7875426669',
        keywords: 'home sample collection Pune, home blood test, phlebotomist home visit, free sample collection Hinjawadi',
    },
    offers: {
        title: 'Special Offers & Health Packages',
        description: 'Check out special offers and discounted health packages at First Care Lab. Full body checkup, cardiac profile, diabetes screening at best prices in Hinjawadi.',
        keywords: 'health checkup offers Pune, discounted blood tests, health package deals, full body checkup price Hinjawadi',
    },
    blog: {
        title: 'Health Blog',
        description: 'Read health articles, tips, and information about pathology tests, preventive care, and wellness from First Care Pathology Lab experts.',
        keywords: 'health blog, pathology articles, blood test information, health tips, preventive care',
    },
    gallery: {
        title: 'Lab Gallery',
        description: 'Take a virtual tour of First Care Pathology Lab. See our modern facilities, state-of-the-art equipment, and professional team in Hinjawadi, Pune.',
        keywords: 'pathology lab photos, diagnostic center images, lab equipment, First Care Lab gallery',
    },
    faq: {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about pathology tests, home collection, report delivery, fasting requirements, and more at First Care Lab.',
        keywords: 'pathology lab FAQ, blood test questions, home collection FAQ, report delivery time, fasting for blood test',
    },
};
