# Implementation Plan - RapidBlood

## Goal
Build a functional, high-fidelity emergency blood coordination platform with role-based access, local data persistence, and "medical" aesthetics.

## Technology Stack
- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (CSS Modules or Global) + CSS Variables for theming.
- **State/Data**: React Context + Custom Hooks + LocalStorage.
- **Auth**: Firebase Auth Integration (with Mock Mode for dev/demo).
- **Animations**: CSS Transitions + Framer Motion (for smooth scroll/page transitions).
- **3D**: React Three Fiber (for Home page illustrations).

## Architecture

### Directory Structure
```
/src
  /assets        # Images, icons
  /components    # Reusable UI components (Button, Card, Modal, Inputs)
  /contexts      # AuthContext, DataContext (BloodBanks, Donors, etc.)
  /pages         # Public and Private pages
  /services      # api.js (Mock/LocalStorage adapter), auth.js
  /styles        # global.css, variables.css, animations.css
  /utils         # helpers, validators, seedData.js
  App.jsx        # Routing & Provider setup
  main.jsx       # Entry point
```

## Detailed Steps

### 1. Project Initialization
- Initialize Vite React project.
- Install dependencies: `react-router-dom`, `framer-motion`, `lucide-react`, `clsx`.
- Optional: `three`, `@react-three/fiber`, `@react-three/drei` for 3D illustrations.

### 2. Design System
- Define color palette:
  - Primary: Deep Red / Medical Red (#E63946)
  - Secondary: Sterile White / Light Gray (#F1FAEE)
  - Accent: Blue/Green for specialized statuses (#457B9D, #2A9D8F)
  - Dark Mode support ready.
- Create base CSS variables in `index.css`.
- Build generic layout components (Navbar, Footer, Sidebar for dashboards).

### 3. Data Service (LocaStorage)
- Create `seedData.js` with instructions from Prompt (20 items, specific locations).
- Implement `storageService.js` to handle CRUD for Banks, Donors, Inventory.
- Ensure data persists on reload.

### 4. Authentication & Roles
- Implement `AuthContext`.
- Logic: Check `localStorage` for current session user.
- Mock Login: Allow login as 'admin', 'donor', 'seeker', 'bloodBank' for demo purposes.
- Route Guards (`RequireAuth` component) to protect dashboard routes.

### 5. Public Pages
- **Home**: Hero section with 3D blood cell/heart abstract animation. Scroll sections for "About", "How it works".
- **BloodBanks**: Grid/List view. Filters for Location (Dropdown) and Blood Group.

### 6. Dashboards
- **Admin**: Tables for managing entities. Logs view.
- **BloodBank**: Update inventory tables (add/remove stock). Manage donor list.
- **Seeker**: Search form. Request history status.
- **Donor**: Profile editor. Donation history timeline.

### 7. UX/UI Polish
- Add page transition wrappers.
- Ensure responsive design on mobile.
- Micro-interactions (hover states, toast notifications for actions).

## Quality Assurance
- Functional testing of all roles.
- Verify "No Placeholders" rule (use seeded data).
- Valid HTML structure and SEO tags.
