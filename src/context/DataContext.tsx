import React, { createContext, useContext, useState, useEffect } from 'react';

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
    content: string; // Added content field
    date: string;
    readTime: string;
    category: string;
}

// ... (skipping other interfaces as they are unchanged - no, I need to be careful with replace_file_content range. I should probably use multi_replace for safety or just target the interface first then the data) 
// Actually, I can just replace the interface and then the data in separate chunks or one big chunk if contiguous. 
// They are not contiguous. The interface is at the top, data is further down.
// I will use multi_replace_file_content.

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
    addOffer: (offer: Omit<Offer, 'id'>) => void;
    updateOffer: (id: string, offer: Omit<Offer, 'id'>) => void;
    deleteOffer: (id: string) => void;
    addGalleryImage: (image: Omit<GalleryImage, 'id'>) => void;
    updateGalleryImage: (id: string, image: Omit<GalleryImage, 'id'>) => void;
    deleteGalleryImage: (id: string) => void;
    addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
    updateBlogPost: (id: string, post: Omit<BlogPost, 'id'>) => void;
    deleteBlogPost: (id: string) => void;
    addService: (service: Omit<Service, 'id'>) => void;
    updateService: (id: string, service: Omit<Service, 'id'>) => void;
    deleteService: (id: string) => void;
    addServiceCategory: (category: Omit<ServiceCategory, 'id'>) => void;
    updateServiceCategory: (id: string, category: Omit<ServiceCategory, 'id'>) => void;
    deleteServiceCategory: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Default Data
const defaultOffers: Offer[] = [
    {
        id: '1',
        iconName: 'Tag',
        title: 'Full Body Checkup Package',
        originalPrice: '₹2,499',
        offerPrice: '₹999',
        discount: '60% OFF',
        description: 'Comprehensive health screening with 60+ parameters including CBC, Lipid Profile, Liver Function, Kidney Function, Thyroid, Diabetes Panel, and more.',
        features: [
            '60+ Parameters Covered',
            'Free Home Sample Collection',
            'Reports in 24-48 Hours',
            'Valid till December 31, 2025',
        ],
        color: 'blue',
    },
    {
        id: '2',
        iconName: 'Percent',
        title: 'Diabetes Care Panel',
        originalPrice: '₹1,299',
        offerPrice: '₹699',
        discount: '46% OFF',
        description: 'Complete diabetes screening and monitoring package with HbA1c, Fasting Sugar, PP Sugar, and related tests.',
        features: [
            'HbA1c + Fasting + PP Sugar',
            'Lipid Profile Included',
            'Same Day Reports',
            'Valid till December 31, 2025',
        ],
        color: 'green',
    },
    {
        id: '3',
        iconName: 'Gift',
        title: 'Senior Citizen Special',
        originalPrice: 'Regular Price',
        offerPrice: '20% OFF',
        discount: 'SPECIAL DISCOUNT',
        description: 'Exclusive discount for senior citizens (60+ years) on all individual tests and health packages.',
        features: [
            'Applicable on All Tests',
            'Priority Home Collection',
            'Free Doctor Consultation',
            'Lifetime Benefit',
        ],
        color: 'purple',
    },
    {
        id: '4',
        iconName: 'Tag',
        title: 'Thyroid Complete Panel',
        originalPrice: '₹899',
        offerPrice: '₹499',
        discount: '44% OFF',
        description: 'Comprehensive thyroid evaluation including T3, T4, and TSH tests to assess thyroid function.',
        features: [
            'T3, T4, TSH Included',
            'Free Home Collection',
            'Reports in 24 Hours',
            'Valid till December 31, 2025',
        ],
        color: 'blue',
    },
    {
        id: '5',
        iconName: 'Percent',
        title: "Women's Health Package",
        originalPrice: '₹2,999',
        offerPrice: '₹1,499',
        discount: '50% OFF',
        description: "Specially designed for women's health with hormonal tests, vitamin levels, and comprehensive screening.",
        features: [
            '50+ Parameters',
            'Hormonal Assessment',
            'Vitamin D & B12',
            'Valid till December 31, 2025',
        ],
        color: 'pink',
    },
    {
        id: '6',
        iconName: 'Gift',
        title: 'Family Health Package',
        originalPrice: '₹5,999',
        offerPrice: '₹3,499',
        discount: '42% OFF',
        description: 'Perfect for family wellness! Package includes tests for 4 family members with essential health parameters.',
        features: [
            'For 4 Family Members',
            'Essential Health Tests',
            'Free Home Collection',
            'Valid till December 31, 2025',
        ],
        color: 'orange',
    },
];

const defaultGalleryImages: GalleryImage[] = [
    {
        id: '1',
        src: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc2NDM5NjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Reception Area',
        category: 'Facilities',
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMHJvb218ZW58MXx8fHwxNzY0NTA3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Testing Room',
        category: 'Facilities',
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Lab Equipment',
        category: 'Equipment',
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY0NDg0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Microscopy Section',
        category: 'Equipment',
    },
    {
        id: '5',
        src: 'https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Lab Technicians at Work',
        category: 'Staff',
    },
    {
        id: '6',
        src: 'https://images.unsplash.com/photo-1576670158706-8d5b044b61da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbGFifGVufDF8fHx8MTc2NDUwNzYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Healthcare Professional',
        category: 'Staff',
    },
];

const defaultBlogPosts: BlogPost[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1631557675489-a923dfbda67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjQ0MTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Importance of Complete Blood Count (CBC) Test',
        excerpt:
            'Learn why CBC is one of the most common blood tests and what it reveals about your health. Understand the significance of RBC, WBC, and platelet counts.',
        content: `
A Complete Blood Count (CBC) is one of the most common blood tests prescribed by doctors. It provides an overview of your general health and can help screen for a variety of disorders, such as anemia, infection, and leukemia.

### What is a CBC?
A CBC measures several components and features of your blood, including:
*   **Red blood cells (RBCs):** These carry oxygen.
*   **White blood cells (WBCs):** These fight infection.
*   **Hemoglobin:** The oxygen-carrying protein in red blood cells.
*   **Hematocrit:** The proportion of red blood cells to the fluid component, or plasma, in your blood.
*   **Platelets:** These help with blood clotting.

### Why is it done?
A CBC is a common part of a routine medical exam to monitor general health. It is also used to:
1.  **Diagnose a medical condition:** If you're experiencing weakness, fatigue, fever, inflammation, bruising, or bleeding, a CBC can help determine the cause.
2.  **Monitor a medical condition:** If you've been diagnosed with a blood disorder that affects blood cell counts, your doctor may use complete blood counts to monitor your condition.
3.  **Monitor medical treatment:** A CBC may be used to monitor your health if you're taking medications that may affect blood cell counts.

### Interpreting Results
Results are given in ranges that are considered normal for your age and gender. Values outside these ranges may indicate a potential health issue, but they don't always mean you require treatment. Your doctor will interpret the results in the context of your overall health.
        `,
        date: 'November 25, 2025',
        readTime: '5 min read',
        category: 'Health Education',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1738778151587-032287ae9f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY0NDg0OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Signs of Vitamin D Deficiency You Should Not Ignore',
        excerpt:
            'Vitamin D deficiency is common in urban populations. Discover the warning signs, risk factors, and how a simple blood test can help you maintain optimal levels.',
        content: `
Vitamin D is essential for strong bones, as it helps the body use calcium from the diet. Traditionally, Vitamin D deficiency has been associated with rickets, a disease in which the bone tissue doesn't properly mineralize, leading to soft bones and skeletal deformities. But increasingly, research is revealing the importance of vitamin D in protecting against a host of health problems.

### Common Signs of Deficiency
1.  **Fatigue and Tiredness:** Excessive fatigue and tiredness may be a sign of vitamin D deficiency.
2.  **Bone and Back Pain:** Vitamin D helps maintain bone health by improving your body's absorption of calcium. Bone pain and lower back pain may be signs of inadequate vitamin D levels in the blood.
3.  **Depression:** A depressed mood may also be a sign of vitamin D deficiency. In review studies, researchers have linked vitamin D deficiency to depression, particularly in older adults.
4.  **Impaired Wound Healing:** Slow healing of wounds after surgery or injury may be a sign that your vitamin D levels are too low.
5.  **Bone Loss:** Vitamin D plays a crucial role in calcium absorption and bone metabolism.

### Risk Factors
You are more likely to be deficient if you:
*   Have dark skin.
*   Are elderly.
*   Are overweight or obese.
*   Do not eat much fish or dairy.
*   Live far from the equator where there is little sun year-round.
*   Always use sunscreen when going out.
*   Stay indoors.

### Testing and Treatment
The most accurate way to measure how much vitamin D is in your body is the 25-hydroxy vitamin D blood test. Treatment typically involves getting more sun exposure, eating more vitamin D-rich foods, and taking supplements.
        `,
        date: 'November 20, 2025',
        readTime: '6 min read',
        category: 'Preventive Care',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRob2xvZ3klMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NTA1OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'How to Prepare for Fasting Blood Tests',
        excerpt:
            'Proper preparation is key to accurate test results. Learn the dos and don\'ts before fasting blood tests including what you can drink and medication guidelines.',
        content: `
Many blood tests require you to fast beforehand to ensure accuracy. This means you shouldn't eat or drink anything except water for a certain period, usually 8 to 12 hours.

### Why Fasting is Necessary
Nutrients in the food and drinks you consume are absorbed into your bloodstream and can impact factors measured by certain tests. For example:
*   **Blood Glucose Tests:** Food greatly affects blood sugar levels.
*   **Lipid Profile:** Triglyceride levels can remains elevated for several hours after eating.
*   **Iron Tests:** Iron is absorbed rapidly from food.
*   **Vitamin B12 Tests:** Levels can be influenced by recent intake.

### The Dos and Don'ts
*   **DO drink water:** Unless told otherwise, you can drink small amounts of water. dehydration can affect results.
*   **DON'T drink juice, soda, coffee, or tea:** Even black coffee can affect some blood test results.
*   **DON'T chew gum or smoke:** These can stimulate digestion and affect results.
*   **DO continue most medications:** Ask your doctor, but typically you should take your regular medications.
*   **DON'T exercise heavily:** Strenuous exercise can affect certain enzyme levels.

### Post-Test
Bring a snack with you to the lab so you can eat right after your blood is drawn. This is especially important if you feel lightheaded.
        `,
        date: 'November 15, 2025',
        readTime: '4 min read',
        category: 'Test Preparation',
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1576670158706-8d5b044b61da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbGFifGVufDF8fHx8MTc2NDUwNzYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Understanding Your Thyroid Function Test Results',
        excerpt:
            'Thyroid disorders affect millions. Decode your T3, T4, and TSH values and understand what they mean for your metabolism, energy levels, and overall health.',
        content: `
The thyroid is a small, butterfly-shaped gland located at the base of your neck. It produces hormones that regulate your body's metabolism, heart rate, energy levels, and mood. A Thyroid Function Test is a series of blood tests used to measure how well your thyroid gland is working.

### Key Components
1.  **TSH (Thyroid Stimulating Hormone):** Produced by the pituitary gland, TSH tells the thyroid to make hormones. High TSH often means hypothyroidism (underactive thyroid), while low TSH suggests hyperthyroidism (overactive thyroid).
2.  **T4 (Thyroxine):** The main hormone produced by the thyroid. High levels indicate hyperthyroidism; low levels indicate hypothyroidism.
3.  **T3 (Triiodothyronine):** Another major thyroid hormone. It helps confirm hyperthyroidism.

### Common Disorders
*   **Hypothyroidism:** The thyroid doesn't produce enough hormones. Symptoms include fatigue, weight gain, and cold sensitivity.
*   **Hyperthyroidism:** The thyroid produces too much hormone. Symptoms include weight loss, rapid heartbeat, and anxiety.

### When to Test
You should consider a thyroid test if you experience unexplained weight changes, fatigue, hair loss, or mood swings. It is also a standard part of many preventative health checkups, especially for women over 35.
        `,
        date: 'November 10, 2025',
        readTime: '7 min read',
        category: 'Health Education',
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVzdGluZyUyMHJvb218ZW58MXx8fHwxNzY0NTA3NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Diabetes Management: Essential Tests You Need',
        excerpt:
            'Regular monitoring is crucial for diabetes management. Learn about HbA1c, fasting sugar, and post-prandial tests and how often you should get tested.',
        content: `
Diabetes requires constant management to prevent complications like heart disease, kidney failure, and nerve damage. Blood tests are the most effective way to monitor your blood sugar levels and the effectiveness of your treatment plan.

### Essential Tests
1.  **Fasting Plasma Glucose (FPG):** Measures blood sugar after an overnight fast (at least 8 hours). It's a snapshot of your blood sugar at that moment.
2.  **Post-Prandial Blood Sugar:** Measured 2 hours after a meal. It shows how well your body handles sugar after eating.
3.  **HbA1c (Hemoglobin A1c):** This is the most important test for long-term control. It measures your average blood sugar level over the past 2-3 months. An HbA1c below 5.7% is normal, while 6.5% or higher indicates diabetes.

### How Often?
*   **HbA1c:** Typically every 3 to 6 months.
*   **Daily Monitoring:** People taking insulin may need to check their blood sugar multiple times a day using a glucometer.

### Other Important Checks
Diabetes affects the whole body. Regular checkups should also include:
*   **Lipid Profile:** To monitor cholesterol.
*   **Kidney Function Tests:** To check for early signs of kidney damage (nephropathy).
*   **Eye Exams:** To screen for diabetic retinopathy.
        `,
        date: 'November 5, 2025',
        readTime: '6 min read',
        category: 'Chronic Disease',
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwcmVjZXB0aW9ufGVufDF8fHx8MTc2NDM5NjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Annual Health Checkup: Why It Matters',
        excerpt:
            'Prevention is better than cure. Discover why an annual full body checkup is essential for early detection of health issues and maintaining optimal wellness.',
        content: `
In today's fast-paced world, health often takes a backseat until something goes wrong. However, many serious health conditions, such as hypertension, diabetes, and heart disease, are "silent killers" with no early symptoms. An annual health checkup is your first line of defense.

### Benefits of Annual Checkups
1.  **Early Detection:** Catching diseases early often makes them easier to treat and cure.
2.  **Risk Assessment:** Doctors can identify risk factors (like high cholesterol or high blood pressure) before they develop into chronic diseases.
3.  **Vaccination Updates:** Ensuring you are up-to-date with necessary immunizations.
4.  **Health Maintenance:** A chance to discuss lifestyle changes, diet, and stress management with a professional.

### What's Included?
A standard annual checkup typically includes:
*   **Physical Exam:** Checking height, weight, blood pressure, and heart rate.
*   **Blood Tests:** CBC, Lipid Profile, Blood Sugar, Kidney and Liver function tests.
*   **Urine Analysis:** To check for kidney health and infections.
*   **Electrocardiogram (ECG):** To check heart rhythm (usually for those over 40).

### Conclusion
Investing time in a health checkup once a year is investing in your future. It provides peace of mind and enables you to live a healthier, longer life.
        `,
        date: 'October 30, 2025',
        readTime: '5 min read',
        category: 'Preventive Care',
    },
];

// Default Services - matches ServicesPage
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
    {
        id: '3',
        iconName: 'Heart',
        title: 'Diabetes Panel (HbA1c, Fasting & PP)',
        description: 'Comprehensive diabetes screening and monitoring package',
        reportTime: 'Same Day',
        category: 'Diabetes Tests',
    },
    {
        id: '4',
        iconName: 'Activity',
        title: 'Lipid Profile',
        description: 'Complete cholesterol and triglycerides analysis',
        reportTime: 'Same Day',
        category: 'Blood Tests',
    },
    {
        id: '5',
        iconName: 'FileText',
        title: 'Liver Function Test (LFT)',
        description: 'Complete liver enzyme and function assessment',
        reportTime: '24 Hours',
        category: 'Organ Function',
    },
    {
        id: '6',
        iconName: 'FileCheck',
        title: 'Kidney Function Test (KFT)',
        description: 'Comprehensive kidney function evaluation',
        reportTime: '24 Hours',
        category: 'Organ Function',
    },
    {
        id: '7',
        iconName: 'Pill',
        title: 'Vitamin D Test',
        description: 'Vitamin D3 (25-OH) level measurement',
        reportTime: '48 Hours',
        category: 'Vitamin Tests',
    },
    {
        id: '8',
        iconName: 'Pill',
        title: 'Vitamin B12 Test',
        description: 'Serum B12 level measurement',
        reportTime: '48 Hours',
        category: 'Vitamin Tests',
    },
    {
        id: '9',
        iconName: 'FlaskConical',
        title: 'Urine Routine & Microscopy',
        description: 'Complete urine analysis and microscopic examination',
        reportTime: 'Same Day',
        category: 'Urine Tests',
    },
    {
        id: '10',
        iconName: 'TestTube',
        title: 'Full Body Checkup',
        description: 'Comprehensive health screening with 60+ parameters',
        reportTime: '48 Hours',
        category: 'Health Packages',
    },
    {
        id: '11',
        iconName: 'Heart',
        title: 'Cardiac Risk Assessment',
        description: 'Complete heart health evaluation package',
        reportTime: '24 Hours',
        category: 'Health Packages',
    },
    {
        id: '12',
        iconName: 'FileText',
        title: 'Dengue Test (NS1, IgG, IgM)',
        description: 'Complete dengue fever screening panel',
        reportTime: '4-6 Hours',
        category: 'Infection Tests',
    },
];

// Default Service Categories
const defaultServiceCategories: ServiceCategory[] = [
    { id: '1', name: 'Blood Tests', iconName: 'Droplet' },
    { id: '2', name: 'Hormone Tests', iconName: 'Activity' },
    { id: '3', name: 'Diabetes Tests', iconName: 'Heart' },
    { id: '4', name: 'Organ Function', iconName: 'FileCheck' },
    { id: '5', name: 'Vitamin Tests', iconName: 'Pill' },
    { id: '6', name: 'Urine Tests', iconName: 'FlaskConical' },
    { id: '7', name: 'Health Packages', iconName: 'TestTube' },
    { id: '8', name: 'Infection Tests', iconName: 'FileText' },
];

// Safe localStorage loader with error handling
function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Validate that parsed data is an array if default is array
            if (Array.isArray(defaultValue) && !Array.isArray(parsed)) {
                return defaultValue;
            }
            return parsed;
        }
        return defaultValue;
    } catch (error) {
        console.error(`Failed to load ${key} from localStorage:`, error);
        return defaultValue;
    }
}

export function DataProvider({ children }: { children: React.ReactNode }) {
    const [offers, setOffers] = useState<Offer[]>(() =>
        loadFromLocalStorage('offers', defaultOffers)
    );

    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() =>
        loadFromLocalStorage('galleryImages', defaultGalleryImages)
    );

    const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() =>
        loadFromLocalStorage('blogPosts', defaultBlogPosts)
    );

    const [services, setServices] = useState<Service[]>(() =>
        loadFromLocalStorage('services', defaultServices)
    );

    const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(() =>
        loadFromLocalStorage('serviceCategories', defaultServiceCategories)
    );

    // Listen for localStorage changes from other tabs
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'blogPosts' && e.newValue) {
                try {
                    setBlogPosts(JSON.parse(e.newValue));
                } catch (error) {
                    console.error('Failed to parse blogPosts from storage event:', error);
                }
            }
            if (e.key === 'galleryImages' && e.newValue) {
                try {
                    setGalleryImages(JSON.parse(e.newValue));
                } catch (error) {
                    console.error('Failed to parse galleryImages from storage event:', error);
                }
            }
            if (e.key === 'offers' && e.newValue) {
                try {
                    setOffers(JSON.parse(e.newValue));
                } catch (error) {
                    console.error('Failed to parse offers from storage event:', error);
                }
            }
            if (e.key === 'services' && e.newValue) {
                try {
                    setServices(JSON.parse(e.newValue));
                } catch (error) {
                    console.error('Failed to parse services from storage event:', error);
                }
            }
            if (e.key === 'serviceCategories' && e.newValue) {
                try {
                    setServiceCategories(JSON.parse(e.newValue));
                } catch (error) {
                    console.error('Failed to parse serviceCategories from storage event:', error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Single debounced effect for localStorage persistence
    // This prevents race conditions and excessive writes during rapid edits
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            try {
                localStorage.setItem('offers', JSON.stringify(offers));
                localStorage.setItem('galleryImages', JSON.stringify(galleryImages));
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                localStorage.setItem('services', JSON.stringify(services));
                localStorage.setItem('serviceCategories', JSON.stringify(serviceCategories));
                console.log('Data saved to localStorage');
            } catch (error) {
                console.error('Failed to save data to localStorage:', error);
            }
        }, 100); // Debounce for 100ms

        return () => clearTimeout(timeoutId);
    }, [offers, galleryImages, blogPosts, services, serviceCategories]);

    // Offer CRUD
    const addOffer = (offer: Omit<Offer, 'id'>) => {
        const newOffer = { ...offer, id: crypto.randomUUID() };
        setOffers(prev => [...prev, newOffer]);
    };

    const updateOffer = (id: string, offer: Omit<Offer, 'id'>) => {
        setOffers(prev => prev.map(item => item.id === id ? { ...offer, id } : item));
    };

    const deleteOffer = (id: string) => {
        setOffers(prev => prev.filter(item => item.id !== id));
    };

    // Gallery CRUD
    const addGalleryImage = (image: Omit<GalleryImage, 'id'>) => {
        const newImage = { ...image, id: crypto.randomUUID() };
        console.log('Adding new gallery image:', newImage);
        setGalleryImages(prev => {
            const updated = [...prev, newImage];
            console.log('Gallery images after add:', updated.length);
            return updated;
        });
    };

    const updateGalleryImage = (id: string, image: Omit<GalleryImage, 'id'>) => {
        setGalleryImages(prev => prev.map(item => item.id === id ? { ...image, id } : item));
    };

    const deleteGalleryImage = (id: string) => {
        setGalleryImages(prev => prev.filter(item => item.id !== id));
    };

    // Blog CRUD
    const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
        const newPost = { ...post, id: crypto.randomUUID() };
        console.log('Adding new blog post:', newPost);
        setBlogPosts(prev => {
            const updated = [...prev, newPost];
            console.log('Blog posts after add:', updated.length);
            return updated;
        });
    };

    const updateBlogPost = (id: string, post: Omit<BlogPost, 'id'>) => {
        setBlogPosts(prev => prev.map(item => item.id === id ? { ...post, id } : item));
    };

    const deleteBlogPost = (id: string) => {
        setBlogPosts(prev => prev.filter(item => item.id !== id));
    };

    // Service CRUD
    const addService = (service: Omit<Service, 'id'>) => {
        const newService = { ...service, id: crypto.randomUUID() };
        setServices(prev => [...prev, newService]);
    };

    const updateService = (id: string, service: Omit<Service, 'id'>) => {
        setServices(prev => prev.map(item => item.id === id ? { ...service, id } : item));
    };

    const deleteService = (id: string) => {
        setServices(prev => prev.filter(item => item.id !== id));
    };

    // Service Category CRUD
    const addServiceCategory = (category: Omit<ServiceCategory, 'id'>) => {
        const newCategory = { ...category, id: crypto.randomUUID() };
        setServiceCategories(prev => [...prev, newCategory]);
    };

    const updateServiceCategory = (id: string, category: Omit<ServiceCategory, 'id'>) => {
        setServiceCategories(prev => prev.map(item => item.id === id ? { ...category, id } : item));
    };

    const deleteServiceCategory = (id: string) => {
        setServiceCategories(prev => prev.filter(item => item.id !== id));
    };

    return (
        <DataContext.Provider value={{
            offers,
            galleryImages,
            blogPosts,
            services,
            serviceCategories,
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
