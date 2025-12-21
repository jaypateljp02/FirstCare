# Admin Dashboard Implementation Task

## Objective
Implement a client-side admin dashboard to allow the website owner to manage Offers, Gallery photos, and Blog posts.

## Architecture
- **State Management**: React Context API + LocalStorage for persistence.
- **Authentication**: Simple client-side check (username/password) with persistence.
- **Routing**: Protected routes for the admin section.

## Features
1.  **Authentication**:
    - Login Page (`/login`).
    - Protected Route wrapper.
2.  **Data Management (Context)**:
    - `DataProvider` to hold state for Offers, Gallery, and Blogs.
    - Initialize with default data, persist changes to `localStorage`.
3.  **Admin UI**:
    - Dashboard Layout (Navigation sidebar).
    - **Manage Offers**: List, Add, Delete.
    - **Manage Gallery**: List, Add (URL input), Delete.
    - **Manage Blog**: List, Add, Delete.
4.  **Public Pages Update**:
    - Update `OffersPage`, `GalleryPage`, `BlogPage` to fetch data from `DataProvider` context.

## Steps
1.  **Setup Data Context**: Extract hardcoded data and create a Context.
2.  **Setup Auth Context**: Create simple auth logic.
3.  **Update Public Pages**: Refactor to use Context data.
4.  **Create Login Page**: Basic form.
5.  **Create Admin Layout**: Sidebar and main content area.
6.  **Create Admin Management Pages**: Forms for each section.
7.  **Update Routing**: Add routes to `App.tsx`.
