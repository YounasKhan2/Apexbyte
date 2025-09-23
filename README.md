# ApexByte — Software Agency Website

A unique, modern light-theme software agency site built with Next.js (App Router) and TailwindCSS. Smooth animations with Framer Motion and a typing hero headline.

## Features
- Sticky navbar with underline hover
- Typing hero cycling through Web Apps / Mobile Apps / AI Solutions
- Services with interactive cards
- Portfolio grid with hover overlays and zoom
- About split layout with glassmorphism accent
- Testimonials carousel
- Contact form + social links
- Clean footer

## Tech
- Next.js 15 + TypeScript
- TailwindCSS 3
- Framer Motion 11
- React Icons

## Run locally
```powershell
cd d:\ApexByte
npm install
npm run dev
# open http://localhost:3000
```

## Build
```powershell
npm run build
npm start
```

## Contact form email setup
- Serverless API route at `/api/contact` sends emails using Resend.
- Configure environment variables in a `.env.local` file:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_RECIPIENT_EMAIL=apexbyte63@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```
- The client posts `{ name, email, message, services, budget, timeline }`.
- If email service is not configured or fails, the form falls back to opening a prefilled mail draft.

### Deploy notes (Vercel)
- Add the same env vars in your project settings on Vercel.
- Ensure your sending domain is verified in Resend, or use their onramp domain.
	- Set `CONTACT_FROM_EMAIL` to a verified address on your domain, e.g. `notifications@yourdomain.com`, or leave it as `onboarding@resend.dev` for testing.

## Notes
- Placeholder SVG/PNG assets are in `public/portfolio` and `public/avatars`.
- Tailwind theme and fonts are configured in `tailwind.config.ts` and `app/layout.tsx`.
- Favicon lives at `app/icon.svg`. Replace with your own SVG or add `app/icon.png` (512×512) and Next.js will generate favicons automatically.
