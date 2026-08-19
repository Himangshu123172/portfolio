# Himangshu Mondal — Portfolio Website

A dark, glassmorphism-styled, recruiter-friendly developer portfolio built with React, Vite, React Router and Tailwind CSS v4.

## Run it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Adding your content later

Everything editable lives in `src/data/` — no need to touch component code:

| File | Controls |
|---|---|
| `src/data/siteConfig.js` | Name, tagline, about text, email, phone, location, resume path, social URLs |
| `src/data/education.js` | Education timeline |
| `src/data/experience.js` | Internships and workshops |
| `src/data/skills.js` | Skill categories and badges |
| `src/data/projects.js` | Project cards — add a new object to the array to add a project |
| `src/data/certificates.js` | Certificates/documents shown on the Documents page |

### Adding images/files

Drop files directly into `public/assets/`:
- `public/assets/profile.jpg` → hero photo (picked up automatically)
- `public/assets/projects/your-image.jpg` → reference as `image: "/assets/projects/your-image.jpg"` in `projects.js`
- `public/assets/certificates/your-file.pdf` → reference as `file: "/assets/certificates/your-file.pdf"` in `certificates.js`
- `public/resume.pdf` → activates the "Download Resume" button

### Placeholders

Anything not provided in the original brief (graduation year, internship dates, LinkedIn/GitHub URLs, third workshop name) is marked with `[Add ...]` placeholders in the data files — search for `[Add` to find them all.

## Tech stack

React 19 · Vite · React Router · Tailwind CSS v4 · lucide-react
