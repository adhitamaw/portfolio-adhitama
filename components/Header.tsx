"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between glass-card rounded-full px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="size-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight">Web Profile Adhitama</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="#education"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </Link>
        </div>

        {/* CTA Button */}
        <button className="btn-primary">Connect</button>
      </nav>
    </header>
  );
}
