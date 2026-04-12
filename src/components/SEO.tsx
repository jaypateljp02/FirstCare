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
    description: 'Leading pathology lab in Hinjawadi Phase 1, 2 & 3. 300+ tests, Free Home Sample Collection near me. Best diagnostic centre for blood test, thyroid, diabetes, full body checkup in Pune. Call: +91 7875426669',
    keywords: 'First Care Lab, pathology lab near me, blood test near me, best diagnostic centre Hinjawadi, pathology lab Hinjawadi Phase 3, home sample collection Pune, First Care Pathology Lab',
    image: 'https://firstcarelab.in/og-image.jpg',
    url: 'https://firstcarelab.in',
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
        title: 'Best Pathology Lab in Hinjawadi', // Overrides default to be more specific
        description: 'First Care Pathology Lab - Top rated diagnostic centre in Hinjawadi, Pune. Offering blood tests, full body checkups, thyroid, diabetes testing. Free home sample collection near you.',
        keywords: 'pathology lab near me, diagnostic centre Hinjawadi, blood test near me, full body checkup Pune, First Care Lab Hinjawadi, Dr. Omkar Suresh Nage pathology',
    },
    services: {
        title: 'All Tests & Services',
        description: '300+ Pathology services in Hinjawadi. CBC, Thyroid (T3 T4 TSH), Lipid Profile, Liver Function Test (LFT), Kidney Function Test (KFT), Vitamin D, B12. Accurate reports.',
        keywords: 'blood test list, pathology services Pune, CBC test cost, thyroid test price Hinjawadi, diabetes test near me, vitamin b12 test',
    },
    about: {
        title: 'About First Care Lab',
        description: 'Trusted by 20,000+ patients. First Care Pathology Lab is the most reliable diagnostic centre in Hinjawadi, led by Dr. Omkar Suresh Nage. committed to accuracy and hygiene.',
        keywords: 'about First Care Lab, Dr. Omkar Suresh Nage, best pathologist Hinjawadi, diagnostic lab reviews Pune',
    },
    contact: {
        title: 'Contact Us - Phone Number & Address',
        description: 'Visit First Care Pathology Lab at Ganpati Hospital & Shlok Hospital Hinjawadi. Call +91 7875426669 for home collection. Best lab near Laxmi Chowk and Marunji Road.',
        keywords: 'First Care Lab contact number, lab address Hinjawadi, pathology lab Marunji Road, diagnostic centre Laxmi Chowk',
    },
    homeCollection: {
        title: 'Free Home Sample Collection',
        description: 'Book Free Home Blood Sample Collection in Hinjawadi, Wakad, Baner, Marunji. Safe, hygienic and on-time phlebotomist visit. Call +91 7875426669.',
        keywords: 'home sample collection near me, blood test at home Pune, free sample pickup Hinjawadi, lab test at home',
    },
    offers: {
        title: 'Health Packages & Offers',
        description: 'Best Health Checkup Packages in Hinjawadi. Full Body Checkup, Senior Citizen Package, Diabetes Profile. Up to 50% OFF. Free Report Consultation by Doctor.',
        keywords: 'health checkup offers Pune, full body checkup near me, blood test offers Hinjawadi, senior citizen health package',
    },
    blog: {
        title: 'Health Blog',
        description: 'Read latest health tips, understanding blood test reports, and preventive healthcare advice from expert pathologists at First Care Lab.',
        keywords: 'health blog, pathology articles, blood test information, health tips, preventive care',
    },
    gallery: {
        title: 'Lab Gallery & Facilities',
        description: 'View photos of our modern pathology laboratory, state-of-the-art diagnostic equipment and patient care facilities in Hinjawadi.',
        keywords: 'pathology lab photos, diagnostic center images, lab equipment, clean diagnostic centre',
    },
    faq: {
        title: 'FAQ - Frequently Asked Questions',
        description: 'Answers to your questions about test timings, fasting requirements, report delivery, and home collection booking at First Care Pathology Lab.',
        keywords: 'blood test fasting rules, report delivery time, lab timings Hinjawadi',
    },
};
