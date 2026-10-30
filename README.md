# WDD 430 Portfolio

A responsive portfolio built with the Next.js App Router, TypeScript, and Tailwind CSS. All page and shared UI components are Server Components.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The greeting endpoint is available at [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

## Assignment components

- `Header`, `ProjectCard`, `ProjectList`, and `Footer` compose the shared portfolio layout.
- `SkillCard.tsx` displays a skill area, its description, and related technologies on the About page.

## Deployment

Deploy this repository through Vercel, disable Deployment Protection so graders can access it, then replace the placeholder below with the public deployment URL.

**Vercel URL:** Add your public deployment URL after deploying.

## App Router questions

**What is the purpose of `app/layout.tsx`?**  
It defines the shared root UI for routes in the App Router, including the HTML document, metadata, global styles, and components such as the site header and footer. Its `children` render the active page inside that shared structure.

**Why use Server Components for these components?**  
Server Components are a good fit because the pages display content without browser-only state or interaction. They can render on the server, keep client-side JavaScript smaller, and still compose together as reusable React components.
