"use client";

import { useEffect, useRef } from "react";

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("opacity-100", "translate-y-0"); el.style.transform = "none"; } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="opacity-0 translate-y-6 transition-all duration-700 ease-out">{children}</div>;
}

const stats = [
  { num: "2", lbl: "Products Built" },
  { num: "3", lbl: "Professional Certifications" },
  { num: "AI-first", lbl: "Development Workflow" },
];

export default function About() {
  return (
    <section className="section-padding" id="about">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
              About Me
            </span>
            <h2 className="text-[clamp(30px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              Building products at the intersection of design and AI.
            </h2>
            <p className="text-lg leading-[30px] text-text-secondary max-w-[560px]">
              I&apos;m a Product Engineer and UI/UX Designer passionate about solving meaningful problems through thoughtful design and modern engineering. I combine research, UI/UX design and AI-assisted development to build products people genuinely enjoy using.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <Reveal key={i}>
                <div className="text-center p-6 bg-white rounded-[16px] border border-border shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px]">
                  <div className="text-[clamp(24px,2.5vw,32px)] font-extrabold text-primary leading-none mb-1.5">{s.num}</div>
                  <div className="text-sm text-text-secondary font-medium">{s.lbl}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
