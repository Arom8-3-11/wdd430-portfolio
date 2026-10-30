import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Link
          href="/"
          className="w-fit text-lg font-bold tracking-tight text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
        >
          WDD 430 <span className="text-emerald-800">/ Portfolio</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-2">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center rounded-full px-4 font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center rounded-full px-4 font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
