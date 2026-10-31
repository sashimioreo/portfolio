# Kane Tan · personal site

A plain static site: no build step, no framework. Vercel serves it as is.

## Files
- `index.html`: the whole page
- `styles.css`: all styling (cream and black, Poppins)
- `favicon.svg`: the "KT" tab icon
- `images/`: your three photos from the deck (resized for the web) and `og.jpg`, the preview image for WhatsApp and Instagram links

## Before it goes live
1. **Compliance approval.** Send the live preview link to your leader or compliance first.
2. **Company name and rep number.** In the footer of `index.html`, search for `[to be added]`. Add your MAS representative number and confirm the company name (it's set to Great Eastern Financial Advisers Private Limited, based on your email domain).
3. **"Alongside my studies".** In the My Story section, check this line is accurate (the deck said "full time").
4. **Your domain.** After the first deploy, replace `YOUR-DOMAIN` (2 places near the top of `index.html`) with your Vercel URL, so link previews show `og.jpg`.

## Deploy on Vercel
**Option A, drag and drop:** go to vercel.com/new, choose to deploy without Git, and drop this whole folder in.

**Option B, CLI:**
```
npm i -g vercel
cd Website
vercel        # first time: follow the prompts, framework = Other
vercel --prod # publish
```

**Option C, GitHub:** push this folder to a repo, then import it in Vercel (framework preset: Other, no build command, output directory = root).

Every change after that: edit, then `vercel --prod` (or push to GitHub).
