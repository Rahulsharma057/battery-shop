# Chauhan Battery House

Next.js 14 (App Router) storefront + admin panel for a battery shop, backed by an Express/MongoDB API with Cloudinary image uploads.

## Project layout

- `src/app` — pages (home, batteries, blog, about, contact, admin)
- `src/components` — UI components, grouped by feature
- `src/context/CartContext.jsx` — client-side cart (persisted to localStorage), checkout happens via a WhatsApp message since there's no payment gateway
- `src/lib/api.js` — single source of truth for the backend base URL and admin auth headers
- `backend/` — Express API (auth, battery CRUD, Cloudinary upload)

## Frontend setup

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_API_URL` in `.env.local` to point at your backend (defaults to the deployed Render URL if unset).

## Backend setup

```bash
cd backend
npm install
npm run dev   # nodemon
```

Required environment variables in `backend/.env` (see `backend/.env` for the current values, **not committed to git**):

| Variable | Purpose |
|---|---|
| `PORT` | Port the API listens on |
| `MONGO_URI` | MongoDB Atlas connection string |
| `CLOUD_NAME`, `API_KEY`, `API_SECRET` | Cloudinary credentials for image upload |
| `JWT_SECRET` | Signs admin auth tokens — the server **will not start** without this |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Admin login credentials |

The server throws on boot if `JWT_SECRET`, `ADMIN_EMAIL`, or `ADMIN_PASSWORD` are missing — **when deploying (e.g. Render), these must be added to that platform's environment variables**, not just the local `.env` file.

### Auth

`POST /api/admin/login` issues a JWT. `POST/PUT/DELETE /api/batteries*` require `Authorization: Bearer <token>`; `GET` endpoints stay public.

## Known follow-ups

- Rotate `MONGO_URI` and `API_SECRET` — these were previously committed to git history in older commits.
- Cloudinary `API_SECRET` is currently a placeholder value; uploads will fail until it's set to a real secret.
