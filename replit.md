# Terra das Minhocas

A full-stack web application about earthworm curiosities ("Curiosidades sobre Minhocas"), built with Vue.js 3 on the frontend and NestJS on the backend.

## Project Structure

```
src/
  frontend/   # Vue.js 3 + Vite + Tailwind CSS 4
  backend/    # NestJS REST API
```

## Tech Stack

- **Frontend**: Vue.js 3 (Composition API), Vite 8, Tailwind CSS 4, Vue Router, Lucide Vue Next
- **Backend**: NestJS 11, TypeScript, Express
- **Package Manager**: npm

## Development

The frontend dev server runs on port 5000 (`0.0.0.0`) with `allowedHosts: true` for Replit proxy compatibility.

The backend runs on port 3000 (localhost).

## Workflow

- **Start application**: Runs the frontend Vite dev server on port 5000

## Deployment

- Target: autoscale
- Build: installs deps and builds both frontend and backend
- Run: serves the backend API and frontend preview
