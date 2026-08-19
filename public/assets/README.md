Drop personal assets here — they map directly to the paths used in the data files:

- `profile.jpg` -> used automatically by the Hero section (src/data/siteConfig.js -> profileImage)
- `projects/your-image.jpg` -> reference it in src/data/projects.js as `image: "/assets/projects/your-image.jpg"`
- `certificates/your-file.pdf` -> reference it in src/data/certificates.js as `file: "/assets/certificates/your-file.pdf"`

Also add a resume PDF directly at `public/resume.pdf` to activate the "Download Resume" button in the Hero section.
