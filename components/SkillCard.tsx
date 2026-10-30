interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  title,
  description,
  skills,
}: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 leading-7 text-slate-700">{description}</p>
      <ul
        aria-label={`${title} skills`}
        className="mt-5 flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-950"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
