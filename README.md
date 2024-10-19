# Denisa Svach Portfolio

A Next.js-based portfolio website for visual artist Denisa Svach.

## Key Features

- Responsive design using Tailwind CSS
- Dynamic project showcase
- Detailed project pages
- Artist biography with collapsible sections
- Contact page

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Project Structure

- `app/`: Next.js app router pages and components
- `app/components/`: Reusable React components
- `app/data/`: Project and biography data
- `public/`: Static assets (images)

## Development

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## Deployment

- Currently deployed on GitHub Pages
- Future deployment planned for custom domain (denisasvach.com)

## Image Handling

- Uses custom `getImagePath` utility for flexible image path management
- Supports local development, GitHub Pages, and future custom domain

## Notes

- Update `next.config.js` when switching to custom domain
- Ensure all images are in the correct `public/` subdirectories