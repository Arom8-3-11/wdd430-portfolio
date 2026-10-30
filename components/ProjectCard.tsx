interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-slate-700">{description}</p>
      <p className="mt-5 text-sm leading-6 text-slate-700">
        <strong className="font-semibold text-slate-950">Built with:</strong>{" "}
        {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950 hover:decoration-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            View on GitHub
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </a>
        </p>
      )}
    </article>
  );
}
