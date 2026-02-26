# Portfolio Website Spec

## Overview
A single-page portfolio website with smooth scroll navigation. Clean, minimal design. Fully mobile-responsive.

---

## Structure

Each section is its own React component, imported and composed in `App.jsx`. Sections are stacked vertically on a single page.

### App.jsx
- Renders all section components in order: Navbar, Hero, About, Skills, Projects, Contact
- Applies global layout styles via `App.css`

### 1. Hero Section (`Hero.jsx`)
- Full-width section at the top of the page
- Large heading with your name
- One-line tagline (e.g. "Full-stack developer based in Nairobi")
- Two CTA buttons: "View My Work" (scrolls to Projects) and "Contact Me" (scrolls to Contact)
- Optional: professional photo or subtle background gradient

### 2. About Section (`About.jsx`)
- Short paragraph (3–5 sentences) about who you are and what you do
- Optional: a portrait photo floated to one side
- Tone: personal and human, not a resume summary

### 3. Skills Section (`Skills.jsx`)
- Display key tools and technologies as icon tags or badges
- Group into categories if needed, e.g.:
  - Frontend: HTML, CSS, JavaScript, React
  - Backend: Node.js, Python, Express
  - Tools: Git, Docker, Figma
- Only include skills you are confident in

### 4. Projects Section (`Projects.jsx`)
- Define project data as an array of objects at the top of the file:
  ```js
  const projects = [
    { title: '', description: '', image: '', live: '', repo: '' },
  ]
  ```
- Map over the array to render a `ProjectCard` sub-component for each
- Each card contains:
  - Screenshot or mockup image
  - Project title
  - 1–2 sentence description
  - Links: Live Site and/or GitHub repo
- Cards displayed in a responsive CSS grid
- Highlight your best and most recent work

### 5. Contact Section (`Contact.jsx`)
- Simple contact form with fields: Name, Email, Message, and a Submit button
- Manage form state with `useState`
- Alternatively, display your email address as a mailto link
- Social links: GitHub, LinkedIn, and any other relevant profiles

---

## Navigation
- `Navbar.jsx` component — sticky top navbar
- Links: About, Skills, Projects, Contact
- Use `document.getElementById('section-id').scrollIntoView({ behavior: 'smooth' })` for scroll on click
- Collapses to a hamburger menu on mobile (toggle with `useState`)

---

## Design Guidelines
- Fonts: 2 fonts only — one for headings (e.g. Inter, Poppins), one for body (e.g. Inter, Lato)
- Colors: 2–3 colors — a primary accent, a dark background or light base, and a neutral
- Spacing: generous white space between sections
- Responsive: mobile-first layout, works on all screen sizes

---

## Tech Stack
- React + Vite
- Plain CSS modules or a utility library like Tailwind CSS
- React Router is NOT needed — single page with scroll navigation
- Use CSS variables for theming

---

## File Structure (suggested)
```
/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── assets/
│       ├── profile.jpg
│       └── projects/
│           ├── project1.png
│           ├── project2.png
│           └── project3.png
└── public/
```

---

## Sections Checklist
- [ ] Hero with name, tagline, and CTA buttons
- [ ] About with bio text
- [ ] Skills with grouped tags
- [ ] Projects grid with cards
- [ ] Contact form or email link with social icons
- [ ] Sticky responsive navbar
- [ ] Smooth scroll behavior
- [ ] Mobile-responsive layout