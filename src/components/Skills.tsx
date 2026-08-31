"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, Code, Wrench, Paintbrush } from "lucide-react";

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
  return <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-600 ease-out" style={{ transitionDuration: "0.6s" }}>{children}</div>;
}

const skills = [
  {
    title: "Design",
    icon: Paintbrush,
    gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    items: ["Figma", "Wireframing", "Prototyping", "User Research", "Product Thinking"],
  },
  {
    title: "Development",
    icon: Code,
    gradient: "linear-gradient(135deg,#2563EB,#3B82F6)",
    items: ["HTML / CSS", "JavaScript", "React / Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    gradient: "linear-gradient(135deg,#06B6D4,#14B8A6)",
    items: ["Git / GitHub", "Prisma / PostgreSQL", "Vercel", "Notion", "AI-assisted Development"],
  },
];

export default function Skills() {
  return (
    <section className="bg-section section-padding" id="skills">
      <div className="container-main">
        <div className="text-center mb-8">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
              Expertise
            </span>
            <h2 className="text-[clamp(30px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              Skills & Capabilities
            </h2>
            <p className="text-lg leading-[30px] text-text-secondary max-w-[600px] mx-auto">
              A versatile toolkit spanning design, development and product thinking.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-[16px] border border-border p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px] h-full flex flex-col">
                <div
                  className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-lg text-white mb-5 shrink-0"
                  style={{ background: skill.gradient }}
                >
                  <skill.icon size={18} />
                </div>
                <h4 className="text-xl font-bold mb-4">{skill.title}</h4>
                <ul className="flex flex-col gap-2 flex-1">
                  {skill.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-[15px] text-text-secondary font-medium">
                      <CheckCircle size={12} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
