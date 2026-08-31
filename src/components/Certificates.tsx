"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PaintBucket, BarChart3, Bot, ArrowRight } from "lucide-react";

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

const certs = [
  {
    title: "UI/UX Design",
    subtitle: "AI-assisted MVP Development & Product Thinking",
    provider: "Dev & Design",
    icon: PaintBucket,
    awarded: undefined as string | undefined,
    href: "/certificates/uiux-design",
  },
  {
    title: "Digital Marketing",
    subtitle: "" as string | undefined,
    provider: "HubSpot Academy",
    icon: BarChart3,
    awarded: undefined as string | undefined,
    href: "/certificates/digital-marketing",
  },
  {
    title: "AI-assisted MVP Development",
    subtitle: "Product Thinking",
    provider: "Dev & Design",
    icon: Bot,
    awarded: undefined,
    href: "/certificates/ai-mvp-development",
  },
];

export default function Certificates() {
  return (
    <section className="section-padding" id="certificates">
      <div className="container-main">
        <div className="text-center mb-8">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
              Credentials
            </span>
            <h2 className="text-[clamp(30px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              Certifications
            </h2>
            <p className="text-lg leading-[30px] text-text-secondary max-w-[600px] mx-auto">
              Professional certifications that validate my expertise.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-[16px] border border-border p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px] flex flex-col h-full">
                <div className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center text-lg bg-primary/[0.07] text-primary mb-5 shrink-0">
                  <cert.icon size={18} />
                </div>
                <h4 className="text-lg font-bold mb-1.5">{cert.title}</h4>
                {cert.subtitle && (
                  <p className="text-sm leading-[24px] text-text-secondary mb-2">{cert.subtitle}</p>
                )}
                <div className="flex-1 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-text-tertiary mb-4 tracking-[0.02em]">{cert.provider}</span>
                  {cert.awarded && (
                    <span className="text-xs text-text-tertiary mb-4">{cert.awarded}</span>
                  )}
                </div>
                {cert.href ? (
                  <Link
                    href={cert.href}
                    className="inline-flex items-center gap-2 px-[18px] py-[8px] rounded-[8px] text-sm font-semibold border border-border text-[#111827] hover:border-primary hover:text-primary transition-all duration-300 w-fit"
                  >
                    View Credential <ArrowRight size={13} />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 px-[18px] py-[8px] rounded-[8px] text-sm font-semibold border border-border text-text-tertiary opacity-40 cursor-not-allowed w-fit">
                    View Credential <ArrowRight size={13} />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
