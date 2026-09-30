# Vijay Kumar Kamanaboina - Portfolio
React + Vite + Tailwind CSS + Framer Motion + Lucide.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # output in dist/
    npm run preview

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. On vercel.com choose Add New > Project and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click Deploy.
Or with the CLI: `npm i -g vercel && vercel --prod`.

## Update content
All text lives in `src/data/portfolio.js`. To enable a project's GitHub button, set its `github: ''` to the repository URL.
