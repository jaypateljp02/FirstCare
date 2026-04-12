# First Care Pathology Laboratory Website

A modern, responsive website for First Care Pathology Laboratory built with React, TypeScript, and Vite. This website provides comprehensive information about diagnostic services, online booking, and patient resources.

![First Care Lab](https://img.shields.io/badge/First%20Care-Pathology%20Lab-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)

## 🏥 About

First Care Pathology Laboratory has been providing quality diagnostic services for over 15 years. Our website offers:

- **Comprehensive Test Information** - Browse our extensive catalog of diagnostic tests
- **Online Booking** - Schedule appointments and home sample collection
- **Patient Resources** - Access test results, health tips, and educational content
- **Contact & Support** - Easy ways to reach our team

**Location:**  
S.No: 2523, First Care Pathology Lab  
Shlok Hospital - Ground Floor, Laxmi Chowk  
Beside Diamond Sweets, Marunji Road  
Hinjawadi, Maharashtra 411057


## ✨ Features

### 🏠 Pages
- **Home** - Welcome page with quick access to services
- **About** - Laboratory information and history
- **Services** - Complete list of diagnostic tests and packages
- **Gallery** - Visual showcase of facilities and equipment
- **Contact** - Contact form and location information
- **Blog** - Health tips and medical news
- **Certifications** - Accreditations and quality certifications
- **FAQ** - Frequently asked questions
- **Home Sample Collection** - Information about at-home services
- **Offers** - Current promotions and packages
- **Testimonials** - Patient reviews and feedback

### 🎨 Design Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface with Radix UI components
- **Fast Performance** - Built with Vite for lightning-fast load times
- **Accessible** - WCAG compliant with keyboard navigation support
- **SEO Optimized** - Proper meta tags and semantic HTML

### 🛠️ Technical Features
- **React 18** - Latest React with hooks and concurrent features
- **TypeScript** - Type-safe code for better development experience
- **React Router** - Client-side routing for smooth navigation
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide Icons** - Beautiful, consistent iconography
- **Tailwind CSS** - Utility-first CSS framework
- **Form Validation** - React Hook Form for robust form handling

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaypateljp02/FirstCare.git
   cd "Pathology Lab Website Layout"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

## 📁 Project Structure

```
Pathology Lab Website Layout/
├── src/
│   ├── assets/          # Images, logos, and static files
│   ├── components/      # React components
│   │   ├── pages/       # Page components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Site footer
│   │   └── ...          # Other reusable components
│   ├── main.tsx         # Application entry point
│   └── App.tsx          # Root component with routing
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=contact@firstcarelab.com
```

### Vite Configuration

The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.ts`.

## 📦 Dependencies

### Core Dependencies
- **React** - UI library
- **React Router DOM** - Routing
- **TypeScript** - Type safety
- **Lucide React** - Icons

### UI Components
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Styling
- **Class Variance Authority** - Component variants
- **Embla Carousel** - Image carousels

### Form Handling
- **React Hook Form** - Form validation and management

### Development Tools
- **Vite** - Build tool and dev server
- **@vitejs/plugin-react-swc** - Fast refresh with SWC

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy!

For detailed Vercel deployment instructions, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Other Platforms

The built static files in the `dist` folder can be deployed to:
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- Any static hosting service

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, Vite will automatically use the next available port.

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Check your TypeScript configuration in `tsconfig.json` and ensure all types are properly defined.

## 📄 License

This project is proprietary and confidential. All rights reserved by First Care Pathology Laboratory.



## 🙏 Acknowledgments

- Built with ❤️ by the First Care Lab development team
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**First Care Pathology Laboratory** - Your Health, Our Priority 🏥
