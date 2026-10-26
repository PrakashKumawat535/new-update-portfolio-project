# Prakash Kumawat — Full-Stack Portfolio & Freelance Services

A full-stack upgrade of the original portfolio. The existing React/Vite visual style and original sections are retained, while a MongoDB-backed API, private admin dashboard, editable projects/services, inquiry management, freelance services page, optional Cloudinary image upload, optional Google Sheets inquiry mirror, and optional Gemini assistant are added.

## Architecture

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion.
- **API:** Express, MongoDB/Mongoose, bcrypt password hashes, signed JWT session in an HttpOnly cookie, Helmet, strict CORS allow-list, request limits, input bounds, and origin checks for admin mutations.
- **Media:** Cloudinary image upload is optional. Paste a public HTTPS image URL if it is not configured.
- **Contact:** MongoDB is the primary record store. Google Sheets mirroring is optional and never replaces MongoDB storage.
- **AI chat:** Disabled by default. Gemini calls happen only on the API server; the key is never sent to the browser.

## What is included

- `/` — existing home page with database-driven projects and services.
- `/about` — existing About page.
- `/services` — responsive freelance service page.
- `/admin` — private login and dashboard for projects, services, inquiries, site settings/SEO/chatbot settings, and password change.
- Projects support title, category, description, image, tech stack, live URL, GitHub URL, order, featured and visibility fields.
- Services support title, description, skill tags, order and visibility.
- Contact form validates and stores inquiries in MongoDB, has a honeypot and rate limiting, and shows success only after API acceptance.
- Admin registration is not public. The first admin is created from server environment variables only.

## Local setup (Windows PowerShell)

Use Node.js 20 or newer and npm.

1. Extract the ZIP and open the project folder in VS Code.
2. Install packages:

   ```powershell
   npm install
   ```

3. Create a server environment file by copying `.env.example` to `.env`. Do not commit `.env`.
4. Create a MongoDB database (MongoDB Atlas free tier is sufficient for development), create a database user, and allow access only from the IPs required by your hosting setup. Put the connection string in `MONGODB_URI`.
5. Generate a strong JWT secret:

   ```powershell
   node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"
   ```

6. Set `JWT_SECRET`, `ADMIN_EMAIL`, and a unique `ADMIN_PASSWORD` with at least 14 characters including uppercase, lowercase, a number and a symbol. The initial password is used only when the admin account is first created. Changing the environment variable later does not reset an existing account; use `/admin` → Security.
7. Start the API in one terminal:

   ```powershell
   npm run dev:api
   ```

8. In a second terminal, start the frontend:

   ```powershell
   npm run dev
   ```

9. Open `http://localhost:3000` and `http://localhost:3000/admin`. The API health check is `http://localhost:5000/api/health`.

The project does not contain a hardcoded admin password or preconfigured production database. You must configure your own secrets before the API will start.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `MONGODB_URI` | Yes | MongoDB connection string for projects, services, content, admin and inquiries. |
| `JWT_SECRET` | Yes | Random secret, at least 32 characters. Use a long random value. |
| `ADMIN_EMAIL` | Yes for initial bootstrap | Initial administrator email. |
| `ADMIN_PASSWORD` | Yes for initial bootstrap | Initial password; use a strong unique value. |
| `CLIENT_URL` | Yes in production | Exact frontend origin(s), comma-separated only if necessary. Example: `https://your-portfolio.vercel.app`. |
| `VITE_API_BASE_URL` | Production frontend | API origin, e.g. `https://your-portfolio-api.onrender.com`; empty string for same-origin deployments. |
| `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Optional | Enables image uploads in admin. Keep credentials on the API server only. |
| `GEMINI_API_KEY` | Optional | Enables AI chatbot answers when `chatbot.enabled` is set to `true` in Site content. |
| `GOOGLE_SHEETS_WEBHOOK_URL`, `GOOGLE_SHEETS_WEBHOOK_SECRET` | Optional | Mirrors new inquiries to Google Sheets. MongoDB remains primary. |

Never add private keys, MongoDB credentials, JWT secrets or Cloudinary API secrets to `VITE_*` variables, frontend code, or the Site content editor.

## Google Sheets inquiry mirror (optional)

1. Create a private Google Sheet.
2. Open **Extensions → Apps Script** and paste the contents of `server/google-apps-script.gs`.
3. In Apps Script **Project Settings → Script Properties**, add `SPREADSHEET_ID` and `WEBHOOK_SECRET`. Use a long random secret.
4. Deploy the script as a Web App executing as your account. The endpoint needs to accept the API server's POST request; Google Apps Script Web Apps generally require public endpoint access for server-to-server use, so treat the random webhook secret as mandatory and do not put the URL/secret in the frontend.
5. Set the deployed Web App URL in the API's `GOOGLE_SHEETS_WEBHOOK_URL` and the same secret in `GOOGLE_SHEETS_WEBHOOK_SECRET`.
6. Submit a test inquiry and verify it appears in MongoDB and the `Inquiries` sheet. If Sheets is temporarily unavailable, the MongoDB inquiry is still stored.

The sheet contains contact details. Restrict sharing to only people who need access. The webhook secret is a shared-secret control, not a substitute for Google account security.

## Optional Cloudinary uploads

Create a Cloudinary account and set the three `CLOUDINARY_*` variables on the API service. Admin → Projects → Upload image accepts PNG, JPG, WEBP or GIF up to 5 MB. If Cloudinary is not configured, image URL editing still works.

## Optional Gemini chatbot

1. Set `GEMINI_API_KEY` in the API host environment.
2. Sign in to `/admin` → Site content, set `chatbot.enabled` to `true`, and save.
3. Edit `chatbot.systemPrompt` if needed. The assistant is instructed to use public portfolio context only.
4. Test that the chat answers questions and that disabling the toggle hides the widget.

The chatbot is optional and disabled by default. It can incur usage costs according to the API provider's current terms/limits.

## Deploy (recommended split deployment)

### API — Render or another Node host

- Create a Node web service from this repository.
- Build command: `npm install` (or `npm ci` after a lockfile is generated).
- Start command: `npm run start:api`.
- Set all required environment variables in the host dashboard. `NODE_ENV=production`, `CLIENT_URL=https://YOUR-FRONTEND-DOMAIN`, `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` are required for first-time bootstrap.
- Configure optional Cloudinary/Gemini/Sheets variables only if you use those features.
- Verify `/api/health` returns `ok: true` and `database: connected`.

### Frontend — Vercel or another static host

- Build command: `npm run build`.
- Output directory: `dist`.
- Set `VITE_API_BASE_URL` to the HTTPS API origin (no trailing slash), e.g. `https://YOUR-API.onrender.com`.
- Update API `CLIENT_URL` to the exact deployed frontend origin and redeploy both services after changing environment variables.
- HTTPS is required for production cross-site cookies. If the browser blocks third-party cookies in your deployment setup, use a custom domain with same-site subdomains or configure the frontend/API behind a same-origin reverse proxy.
- Configure SPA fallback/rewrite rules so `/about`, `/services`, and `/admin` serve `index.html`.

## Security and operations

- Admin password hashes use bcrypt; the session cookie is HttpOnly, signed, expires after 8 hours, and is `Secure` in production. The admin can change their password; the current session is invalidated afterward.
- Login/contact/API requests are rate limited; API responses avoid exposing database errors; the API checks allowed origins and applies Helmet headers.
- Admin endpoints require an authenticated session. There is no public admin signup endpoint.
- Use a unique MongoDB database user with least privilege and restrict network access. Do not reuse passwords.
- Enable MongoDB backups/snapshots and periodically test a restore. Keep secrets in the hosting provider's environment settings.
- Review and rotate any secret that may have been shared accidentally. Do not store confidential client data in public project descriptions.
- No system can promise absolute security. Keep Node dependencies updated, monitor logs, and test the deployed configuration.

## Important notes / known boundaries

- External sites may block iframe embedding via `X-Frame-Options` or CSP. This portfolio therefore uses a normal live-demo link rather than forcing an embedded preview. You can open the live project separately.
- The existing About, awards, testimonials and articles components retain their original content/design. The Site content editor controls the profile/SEO/service-page/chatbot settings; projects and services are fully database-managed. Some legacy copy inside the original design components remains code-defined and can be further moved into editable fields if you want every line of the old layout to be CMS-driven.
- The repository cannot deploy itself or create third-party accounts. Configure your own MongoDB, API host, frontend host and optional integrations.

## Scripts

- `npm run dev` — frontend development server.
- `npm run dev:api` — API server with Node watch mode.
- `npm run build` — TypeScript check and frontend production build.
- `npm run start:api` — start API server.
