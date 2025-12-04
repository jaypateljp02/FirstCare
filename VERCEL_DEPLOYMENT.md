# Deploy to Vercel - Step by Step Guide 🚀

## Your website is ready to deploy on Vercel!

### Prerequisites
1. ✅ Vite project configured
2. ✅ `vercel.json` configuration file exists
3. ✅ Build command ready (`npm run build`)
4. ✅ React Router configured with rewrites for SPA routing

---

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Pathology Lab Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up or log in with your GitHub account

3. **Import your project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect it's a Vite project

4. **Configure settings** (if needed)
   - **Framework Preset:** Vite (auto-detected)
   - **Root Directory:** `./` (or leave default)
   - **Build Command:** `npm run build` (already set)
   - **Output Directory:** `build` (already set)
   - **Install Command:** `npm install` (already set)

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live! 🎉

---

### Method 2: Deploy via Vercel CLI (Fast)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd "Pathology Lab Website Layout"
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (first time) or **Yes** (if updating)
   - Project name? (Enter a name or press Enter for default)
   - Directory? (Press Enter - current directory)
   - Override settings? **No**

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

---

### Method 3: Deploy via GitHub Integration

1. **Connect GitHub to Vercel**
   - Go to Vercel Dashboard → Settings → Git
   - Connect your GitHub account
   - Select repository

2. **Automatic Deployments**
   - Every push to `main` branch = Production deployment
   - Pull requests = Preview deployments

---

## Current Configuration

Your `vercel.json` is already configured with:

✅ **Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `build`
- Dev Command: `npm run dev`

✅ **SPA Routing:**
- All routes rewrite to `/index.html` (needed for React Router)

✅ **Performance:**
- Static assets cached for 1 year

---

## After Deployment

### Your website will be available at:
- **Production URL:** `https://your-project-name.vercel.app`
- **Custom Domain:** Can be added in Vercel Dashboard → Settings → Domains

### Features:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploy on git push
- ✅ Preview deployments for PRs
- ✅ Analytics (optional)

---

## Troubleshooting

### Build Fails?
1. Check build logs in Vercel dashboard
2. Test build locally: `npm run build`
3. Ensure all dependencies are in `package.json`

### Routes Not Working?
- ✅ Already fixed! The `vercel.json` has rewrites configured
- All routes redirect to `index.html` for React Router

### Assets Not Loading?
- Check `vite.config.ts` output directory matches `vercel.json`
- Current: Both set to `build` ✅

### Environment Variables?
- Add in Vercel Dashboard → Settings → Environment Variables
- Available to all deployments or specific environments

---

## Quick Deploy Command

```bash
# One-time deploy
vercel

# Deploy to production
vercel --prod

# Preview deployment
vercel --prod --yes
```

---

## Important Notes

1. **Build Output:** Currently set to `build` folder (configured in both `vite.config.ts` and `vercel.json`)

2. **React Router:** The rewrites in `vercel.json` ensure all routes work correctly

3. **Dependencies:** Make sure `package.json` has all required dependencies listed

4. **Node Version:** Vercel uses Node.js 18.x by default (compatible with your project)

---

## Next Steps After Deployment

1. ✅ Test all pages work correctly
2. ✅ Set up custom domain (optional)
3. ✅ Enable analytics (optional)
4. ✅ Set up automatic deployments from GitHub

---

**Status:** ✅ Your project is ready to deploy! Just push to GitHub and import to Vercel.
