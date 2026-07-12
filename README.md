Readme · MDRanjith Kumar S — Portfolio

Personal portfolio website of Ranjith Kumar S — Salesforce Developer, Python Engineer, and AI/ML Engineer.

Live site: add your live URL here once deployed

Show Image
Show Image
Show Image


✨ Features


Dark theme with blue/purple gradient accents and glassmorphism cards
Animated hero section with a typing effect cycling through roles
Skills, Experience timeline, Projects, Research & Publications, Certifications
Fully responsive — mobile, tablet, desktop
SEO metadata (Open Graph, Twitter cards) and accessible markup
Zero external UI libraries — built with plain React + CSS-in-JS for full control over the design


🛠️ Tech Stack


Next.js 14 — App Router
React 18
Vanilla CSS-in-JS (no Tailwind/UI kit dependency)



🚀 Getting started

Prerequisites


Node.js v18 or later
npm (comes with Node.js)


Installation

bashgit clone https://github.com/RANJITHKUMAR6/my-portfolio-1.git
cd my-portfolio-1
npm install
npm run dev

Open http://localhost:3000 — the site hot-reloads as you edit.

Build for production

bashnpm run build
npm run start


✏️ Editing content

All personal details (email, links, resume URL, etc.) live in one place — the ME object near the top of app/PortfolioBody.jsx:

jsconst ME = {
  name:       "Ranjith Kumar S",
  email:      "your.email@gmail.com",
  phone:      null,
  location:   "Bhavani, Tamil Nadu, India",
  github:     "https://github.com/RANJITHKUMAR6",
  linkedin:   "https://www.linkedin.com/in/ranjith-kumar-s-019a29291",
  resumeUrl:  "#",
  chatbotUrl: "#",
  ieeeUrl:    "#",
  faceRecogGithub: "#",
};

Skills, experience, projects, and certifications are each defined as arrays near the top of the same file — add or edit entries there.
