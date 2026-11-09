# GapMate — Vercel-ready prototype

A Next.js student timetable and free-time discovery prototype.

## Run locally
1. Install Node.js 20 or newer.
2. In this folder run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload this folder's contents.
2. In Vercel choose **Add New → Project** and import the repository.
3. Keep the detected framework as Next.js and deploy. No environment variables are required for this demo.

## Demo scope
- Interactive overview, day selector, gap finder, activity filters, people matching sample, timetable editor.
- Sample class and student data are illustrative.
- Timetable changes live in React state and reset on refresh. Authentication, persistence, real student matching and messaging are not connected yet.
