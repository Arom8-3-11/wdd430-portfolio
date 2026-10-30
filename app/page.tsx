import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio built with the Next.js App Router, reusable server components, and a dedicated About page.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Arom8-3-11/wdd430-portfolio",
  },
  {
    title: "Hello API Endpoint",
    description:
      "A small Next.js route handler that returns a JSON greeting from the app's API layer.",
    technologies: ["Next.js", "TypeScript", "Route Handlers"],
    link: "https://github.com/Arom8-3-11/wdd430-portfolio/tree/main/app/api/hello",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
      <section
        aria-labelledby="intro-title"
        className="mb-20 max-w-3xl sm:mb-24"
      >
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
          WDD 430 · Web development
        </p>
        <h1
          id="intro-title"
          className="text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-7xl"
        >
          Building for the
          <span className="block text-emerald-800">web, one idea at a time.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
          I&apos;m a web development student learning to create accessible,
          thoughtful experiences with React and Next.js. Here are a couple of
          pieces from this portfolio project.
        </p>
        <a
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
          href="https://github.com/Arom8-3-11/wdd430-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the GitHub repository
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </a>
      </section>

      <section aria-labelledby="projects-title">
        <div className="mb-8 flex flex-col gap-2 border-b border-slate-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Selected work
            </p>
            <h2
              id="projects-title"
              className="mt-2 text-3xl font-bold tracking-tight text-slate-950"
            >
              Projects &amp; practice
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Small, focused builds that put modern web fundamentals into
            practice.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
