# Deployment Guide

## Development

To run the application locally:

```bash
npm run dev
```

Visit `http://localhost:3000` - it will automatically redirect to `/en`

## Building for Production

```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure everything
5. Deploy!

Your site will be live with:
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push
- Free SSL certificate

### Option 2: Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

### Option 3: Self-hosted (VPS/Docker)

Build the production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Use a process manager like PM2 to keep it running:

```bash
npm install -g pm2
pm2 start npm --name "bernardo-assistant" -- start
```

## Environment Variables

Currently, the app doesn't require environment variables. When you set up form submission, you may need:

- `FORM_ENDPOINT` - API endpoint for form submissions
- `EMAIL_SERVICE_KEY` - If using email service integration

## Form Submission Setup

The form is currently set up to log data to the console. To integrate with a real backend:

1. **Option A: Formspree** (Easy, free tier available)
   - Sign up at [formspree.io](https://formspree.io)
   - Create a form and get the endpoint URL
   - Update `components/InvitationForm.tsx` with the endpoint

2. **Option B: SendGrid/Mailgun**
   - Set up API routes in `app/api/submit/route.ts`
   - Configure email service
   - Update form to POST to `/api/submit`

3. **Option C: Database Integration**
   - Set up a database (PostgreSQL, MongoDB, etc.)
   - Create API route to save submissions
   - Update form handler

## Custom Domain

### On Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### On Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

## Testing Before Launch

1. Test both language versions: `/en` and `/es`
2. Test form submission
3. Verify all links work
4. Test on mobile devices
5. Run accessibility audit (Lighthouse in Chrome DevTools)
6. Test with screen readers if possible

## Performance Optimization

The site is already optimized with:
- Static generation for fast loading
- Tailwind CSS for minimal bundle size
- Semantic HTML for SEO

## Monitoring

Consider adding:
- Google Analytics for traffic tracking
- Vercel Analytics (if using Vercel)
- Error tracking (Sentry, LogRocket)

## Backup

Always keep your source code in version control (Git/GitHub) before deploying.
