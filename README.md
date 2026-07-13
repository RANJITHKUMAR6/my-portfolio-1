# Ranjith Kumar S — Portfolio (Next.js)

## 🖥️ Run on localhost

You need [Node.js](https://nodejs.org) installed (v18+). Then:

```bash
cd portfolio-next
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. That's it — hot reload works, so any edits to `app/PortfolioBody.jsx` show up instantly.

---

## ✏️ Edit your details

Open `app/PortfolioBody.jsx` and edit the `ME` block near the top:

```js
const ME = {
  name:       "Ranjith Kumar S",
  email:      "your.email@gmail.com",
  phone:      null,
  location:   "Bhavani, Tamil Nadu, India",
  github:     "https://github.com/YOUR-USERNAME",
  linkedin:   "https://www.linkedin.com/in/ranjith-kumar-s-019a29291",
  resumeUrl:  "#",
  chatbotUrl: "#",
  ieeeUrl:    "#",
  faceRecogGithub: "#",
};
```

---

## 🚀 Deploy for free

### Option A — Vercel (built by the Next.js team, easiest)
```bash
npm install -g vercel
vercel
```
Follow the prompts — you'll get a live URL in under a minute.

### Option B — Netlify
Push this folder to a GitHub repo, then connect it at netlify.com → New site from Git.

### Option C — GitHub Pages (needs static export)
GitHub Pages doesn't run Node servers, so you'd need `next export` — Vercel is the natural home for Next.js apps and is just as free.

---

## 📁 Project structure

```
portfolio-next/
├── app/
│   ├── layout.jsx        ← SEO metadata, fonts
│   ├── page.jsx           ← entry point
│   ├── PortfolioBody.jsx  ← all your content & sections (edit ME block here)
│   └── globals.css        ← base styles
├── next.config.js
└── package.json
```

---

## 📝 Adding your resume PDF

1. Drop your resume PDF into the `public/` folder as `resume.pdf`
2. In `PortfolioBody.jsx`, change `resumeUrl: "#"` to `resumeUrl: "/resume.pdf"`

---

Made with ❤️ by Ranjith Kumar S
