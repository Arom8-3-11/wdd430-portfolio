import SkillCard from "@/components/SkillCard";

const skillAreas = [
  {
    title: "Frontend foundations",
    description:
      "Building clear, responsive interfaces with reusable React components.",
    skills: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Modern web tools",
    description:
      "Practicing file-based routing, server rendering, and utility-first styling.",
    skills: ["Next.js", "App Router", "Tailwind CSS"],
  },
  {
    title: "Learning mindset",
    description:
      "Growing through hands-on projects, feedback, and steady iteration.",
    skills: ["Accessibility", "Git", "Problem solving"],
  },
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
      <section aria-labelledby="about-title" className="max-w-3xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
          A little about me
        </p>
        <h1
          id="about-title"
          className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl"
        >
          Curious by nature.
          <span className="block text-emerald-800">Learning by building.</span>
        </h1>
        <p className="mt-7 text-lg leading-8 text-slate-700">
          I&apos;m a web development student exploring how thoughtful design
          and solid engineering work together. This portfolio is a place to
          practice the Next.js App Router, create reusable server components,
          and share what I&apos;m learning along the way.
        </p>
      </section>

      <section
        aria-labelledby="skills-title"
        className="mt-16 border-t border-slate-300 pt-10 sm:mt-20"
      >
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
          What I&apos;m exploring
        </p>
        <h2
          id="skills-title"
          className="mb-7 mt-2 text-3xl font-bold tracking-tight text-slate-950"
        >
          Skills &amp; interests
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillAreas.map((area) => (
            <SkillCard key={area.title} {...area} />
          ))}
        </div>
      </section>
    </main>
  );
}
