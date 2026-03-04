# Web Based Learning Platform

A React + Vite web application for student learning workflows, including dashboard views, progress tracking, assignments, achievements, bookmarks, scheduling, and profile management.

## Tech Stack
- React
- Vite
- React Router
- Recharts
- React Icons
- Firebase (project config files included)

## Prerequisites
- Node.js 18 or later (Node.js 20 LTS recommended)
- npm 9 or later
- Git

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/Mohanapriya-Vadivel/WebBasedLearningPlatform.git
   cd WebBasedLearningPlatform
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts
- `npm run dev` - Run the app in development mode
- `npm run build` - Build production files
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Build for Production
```bash
npm run build
```
Output is generated in the `dist/` folder.

## Project Structure
- `src/` - Main React components and styles
- `public/` - Static assets (images, icons)
- `build/`, `dist/` - Build outputs
- `firebase.json`, `.firebaserc` - Firebase configuration

## Notes
- This project uses npm and `package-lock.json` for dependency locking.
- If Firebase deployment is needed, authenticate and configure Firebase CLI for your account.

## Repository
GitHub: https://github.com/Mohanapriya-Vadivel/WebBasedLearningPlatform
