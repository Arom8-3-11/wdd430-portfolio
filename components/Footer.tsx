import { io } from "next/cache";
import { Suspense } from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          <Suspense fallback="Copyright · WDD 430 Portfolio">
            <CopyrightNotice />
          </Suspense>
        </p>
        <a
          href="https://github.com/Arom8-3-11/wdd430-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
        >
          GitHub repository
        </a>
      </div>
    </footer>
  );
}

async function CopyrightNotice() {
  await io();
  return (
    <>
      Copyright &copy; {new Date().getFullYear()} · WDD 430 Portfolio
    </>
  );
}
