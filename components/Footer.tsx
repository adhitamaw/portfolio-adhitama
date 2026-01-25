import Link from "next/link";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/adhitama-wichaksono-15b56b199/" },
  { name: "Email", url: "mailto:adhit1312@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
        <p className="text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Adhitama Wichaksono — All Rights
          Reserved
        </p>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-xs tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
