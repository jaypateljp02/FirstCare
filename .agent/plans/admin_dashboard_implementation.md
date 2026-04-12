# Implementation Plan - Admin Dashboard

## Problem
The website owner needs a way to manage dynamic content (Offers, Gallery, Blog) without editing code.

## Solution
Implement a client-side admin dashboard protected by a login. Use React Context + LocalStorage to manage data, allowing updates to persist across browser sessions.

## Proposed Changes

### 1. Data & Auth Context
- **Create `src/context/DataContext.tsx`**:
    - Define interfaces for `Offer`, `GalleryImage`, `BlogPost`.
    - Create default data arrays (moved from current pages).
    - `DataProvider` component:
        - `useState` for each data type, initialized from `localStorage` OR default data.
        - `useEffect` to save to `localStorage` on change.
        - Export methods: `addOffer`, `deleteOffer`, `addGalleryImage`, `deleteGalleryImage`, `addBlogPost`, `deleteBlogPost`.
- **Create `src/context/AuthContext.tsx`**:
    - `AuthProvider`:
        - `login(password)`: Checks against hardcoded password (e.g., "admin123"). Sets `isAdmin` true.
        - `logout()`: Sets `isAdmin` false.
        - Persist login state.

### 2. Update Public Pages
- Refactor `src/components/pages/OffersPage.tsx`, `GalleryPage.tsx`, `BlogPage.tsx` to use `useData()` hook.
- Remove hardcoded data from these files.

### 3. Admin Components
- **`src/components/admin/AdminLayout.tsx`**:
    - Sidebar navigation.
    - Logout button.
    - Outlet for child routes.
- **`src/components/admin/LoginPage.tsx`**:
    - Simple password input form.
- **`src/components/admin/DashboardPage.tsx`**:
    - Overview links.
- **`src/components/admin/ManageOffers.tsx`**:
    - List current offers.
    - Form to add new offer (inputs for title, price, etc.).
- **`src/components/admin/ManageGallery.tsx`**:
    - List images.
    - Form to add new image (URL input).
- **`src/components/admin/ManageBlog.tsx`**:
    - List posts.
    - Form to add new post.
- **`src/components/ProtectedRoute.tsx`**:
    - Redirect to `/admin/login` if not authenticated.

### 4. Routing Updates (`src/App.tsx`)
- Wrap the app in `AuthProvider` and `DataProvider`.
- Add routes:
    - `/admin/login`
    - `/admin` (protected) -> `AdminLayout`
        - `/admin/offers`
        - `/admin/gallery`
        - `/admin/blog`

## Verification Plan
### Automated Tests
- None (manual verification).

### Manual Verification
1.  **Public View**: Verify Home, Offers, Gallery, Blog pages still load default data correctly.
2.  **Login**: Access `/admin`, should redirect to login. Login with correct password.
3.  **Admin Actions**:
    - Add a new Offer in admin. Go to public Offers page and verify it appears.
    - Delete a photo in admin. Verify it's gone from Gallery page.
    - Refresh page. Admin session should persist, and data changes should persist.
