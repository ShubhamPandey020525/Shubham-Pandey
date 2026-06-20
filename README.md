# Shubham Pandey - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful UI**: Modern design with a clean, professional look
- ⚡ **Fast Performance**: Built with Vite for lightning-fast speed
- ✨ **Smooth Animations**: Powered by Framer Motion
- 🎯 **Single Page Application**: All sections in one page for easy navigation
- 🌙 **Light Theme**: Clean light mode with navy accent colors

## Tech Stack

- **React 19** - UI library
- **Vite 6** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Sections

1. **Home** - Hero section with introduction and contact links
2. **About** - Professional summary and key highlights
3. **Experience** - Work experience and certifications
4. **Skills** - Technical skills categorized by domain
5. **Projects** - Featured projects with GitHub links
6. **Education** - Academic background
7. **Achievements** - Awards and recognitions
8. **Certifications** - Verified courses and credentials
9. **Footer** - Contact links and copyright info

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShubhamPandey020525/my_portfolio.git
cd my_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Deployment

### Deploying to Vercel

Vercel is perfect for deploying this Vite/React project!

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Import your `my_portfolio` repository
5. Click "Deploy"

That's it! Your portfolio will be live in seconds.

## Customization

### Updating Personal Information

All personal information (name, contact, experience, projects, etc.) is stored in `src/data.ts`. Edit this file to update your details.

### Adding Your Resume

Replace the `public/Resume_AIML.pdf` file with your own resume.

### Adding Your Profile Picture

Replace the `public/profile.jpeg` file with your own photo.

### Changing Colors

The primary color is Royal Navy (#143464). You can update this in:
- `src/index.css` - Background gradient and grid
- Component files - Tailwind classes like `text-navy`, `bg-navy`, etc.

## Project Structure

```
my_portfolio/
├── public/
│   ├── profile.jpeg    # Your profile picture
│   └── Resume_AIML.pdf # Your resume
├── src/
│   ├── components/
│   │   ├── Nav.tsx            # Navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Summary.tsx        # About section
│   │   ├── Experience.tsx     # Experience section
│   │   ├── Skills.tsx         # Skills section
│   │   ├── Projects.tsx       # Projects section
│   │   ├── Education.tsx      # Education section
│   │   ├── Achievements.tsx   # Achievements section
│   │   ├── Certifications.tsx # Certifications section
│   │   ├── Footer.tsx         # Footer
│   │   ├── SectionHeading.tsx # Shared section header
│   │   └── data.ts            # All portfolio data
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Author

**Shubham Pandey**

- LinkedIn: [linkedin.com/in/shubham-pandey-068469358](https://linkedin.com/in/shubham-pandey-068469358)
- GitHub: [github.com/ShubhamPandey020525](https://github.com/ShubhamPandey020525)
- Email: contact.shub.aidev@gmail.com

## License

MIT © 2026 Shubham Pandey
