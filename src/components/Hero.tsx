"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

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
  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center overflow-hidden relative pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #E5E7EB 1px, transparent 0)", backgroundSize: "32px 32px", opacity: 0.4 }} />
      <div className="container-main relative w-full">
        <div className="grid lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-6 gap-10 xl:-mr-8">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-4">
              Product Engineer & UI/UX Designer
            </span>
            <h1 className="text-[clamp(28px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4">
              Hi, I&apos;m <span className="text-primary">Mercy David.</span><br />
              I design intuitive user experiences and build digital products powered by AI.
            </h1>
            <p className="text-lg leading-[28px] text-text-secondary mb-7 max-w-[520px]">
              I build products that combine beautiful interfaces, thoughtful user experiences, and AI-powered functionality, taking ideas from research and wireframes through development and deployment.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => { const el = document.querySelector("#projects"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] text-[15px] font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]">
                <ArrowRight size={16} />
                View Projects
              </button>
              <a href="/Mercy-David-Product-Engineer.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#111827] border border-border rounded-[8px] text-[15px] font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-[1px]">
                <Download size={16} />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative w-full lg:mt-[44px]">
              {/* StudyFlow desktop mockup - displayed directly */}
              <Image
                src="/desktop-mockup01-dashboard.png"
                alt="StudyFlow dashboard"
                width={1920}
                height={1440}
                priority
                className="w-full h-auto block lg:-mt-[12.2%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
