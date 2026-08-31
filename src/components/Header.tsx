"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href === "/certificates") {
      router.push("/certificates");
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/88 backdrop-blur-[14px] saturate-180 border-b border-border transition-shadow duration-300">
      <div className="container-main flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 font-extrabold text-xl text-[#111827]">
          <span className="w-[34px] h-[34px] bg-primary rounded-[8px] flex items-center justify-center text-white text-[14px] font-extrabold">
            MD
          </span>
          Mercy David
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-text-secondary hover:text-[#111827] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 after:rounded-[2px] hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Mercy-David-Product-Engineer.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-[18px] py-[8px] bg-primary text-white rounded-[8px] text-sm font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
          >
            <Download size={14} />
            Download CV
          </a>
          <button
            className="md:hidden p-1 text-[#111827]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/98 border-b border-border px-6 pb-5 pt-3 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-text-secondary hover:text-[#111827] transition-colors text-left py-1"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Mercy-David-Product-Engineer.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-[18px] py-[10px] bg-primary text-white rounded-[8px] text-sm font-semibold hover:bg-primary-dark transition-all mt-2"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
