# Marsak Website — Getting Started Guide

## Prerequisites

Before you begin, install the following:

1. **Node.js** (v18+) — Download from https://nodejs.org/ (choose the LTS version, click through the installer)
2. **Claude Code** — Download from https://claude.ai/claude-code
3. **GitHub account** — Sign up at https://github.com

---

## Option A: Join as a Collaborator (Recommended)

> You work directly on the original project. Every push auto-deploys to the live site. Easiest setup.

### Step 1: Send your GitHub username to Nicole

She will add you as a collaborator. You'll receive an invitation email — click Accept.

### Step 2: Download the project

Open your terminal (Mac: press `Cmd + Space`, search "Terminal") and run:

```bash
git clone https://github.com/nnnnnicole33/marsak-website.git
cd marsak-website
npm install
```

### Step 3: Run locally

```bash
npm run dev
```

Open your browser and go to http://localhost:3000 — you should see the website.

### Step 4: Make changes with Claude Code

Open Claude Code in the project folder. It will automatically read the project documentation and understand the codebase. Just tell it what you want in plain English, for example:

- "Change the hero title to ..."
- "Update the brand color to blue"
- "Add a new Partners section"

### Step 5: Push your changes

Tell Claude Code: "commit and push my changes". Once pushed, Vercel will auto-redeploy and the live site updates in a few minutes.

---

## Option B: Fork to Your Own Account

> You get an independent copy. Changes don't affect the original project, but you need to set up your own Vercel deployment.

### Step 1: Fork the project

Go to https://github.com/nnnnnicole33/marsak-website and click the **Fork** button in the top right corner.

### Step 2: Download your fork

Open your terminal and run (replace `YOUR_USERNAME` with your GitHub username):

```bash
git clone https://github.com/YOUR_USERNAME/marsak-website.git
cd marsak-website
npm install
```

### Step 3: Run locally

```bash
npm run dev
```

Open your browser and go to http://localhost:3000.

### Step 4: Make changes with Claude Code

Same as Option A — open Claude Code and tell it what you want to change.

### Step 5: Deploy to Vercel (free)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **Add New Project**
3. Select your forked `marsak-website` repository
4. Click **Deploy** — your site will be live in about 2 minutes
5. You'll get a URL like `marsak-website-xxxx.vercel.app`

After this, every push to GitHub auto-deploys.

---

## FAQ

**How do I preview my changes?**
If `npm run dev` is running, the browser refreshes automatically when you save a file.

**What if I break something?**
Tell Claude Code: "undo my last changes" — it will revert them for you.

**Where is the website content?**
All text content (headings, descriptions, services, team info, FAQ, etc.) lives in one file: `lib/data.ts`. Claude Code knows this and will edit the right file when you ask.

**Where are the brand colors?**
In `app/globals.css` — the primary color is `#E8192C` (red). Tell Claude Code to change it if needed.
