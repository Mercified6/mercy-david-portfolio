"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, FileText, Star } from "lucide-react";

function SectionReveal({ children }: { children: React.ReactNode }) {
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

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const studyFlow = {
  name: "StudyFlow",
  desc: "An AI-powered student operating system that helps students organize deadlines, generate quizzes, chat with AI, create flashcards and manage assignments from one intelligent dashboard.",
  badge: "Featured Project",
  image: "/desktop-mockup02-screen.png",
  links: [
    { label: "View Case Study", href: "https://www.behance.net/gallery/254917853/StudyFlow-An-AI-Powered-Study-Companion?platform=direct", icon: FileText, primary: true },
    { label: "Live Demo", href: "https://studyflow-v2-navy.vercel.app", icon: ExternalLink, primary: false },
    { label: "GitHub", href: "#", icon: GithubIcon, primary: false },
  ],
  stats: [
    { num: "10K+", lbl: "Active Students" },
    { num: "50K+", lbl: "AI Conversations" },
    { num: "15K+", lbl: "Quizzes" },
    { num: "8K+", lbl: "Study Plans" },
  ],
  tags: ["AI Tutor", "Quiz Generator", "Study Planner", "Flashcards", "Library"],
  accent: "#818CF8",
};

const mailMint = {
  name: "MailMint",
  desc: "An AI-powered email marketing platform designed to simplify campaign creation, audience management, and performance tracking, making professional email marketing accessible to everyone.",
  links: [
    { label: "Live Demo", href: "https://mailmintai.vercel.app", icon: ExternalLink, primary: true },
    { label: "GitHub", href: "#", icon: GithubIcon, primary: false },
  ],
  stats: [
    { num: "12", lbl: "Active Campaigns" },
    { num: "24.5K", lbl: "Subscribers" },
    { num: "46.2%", lbl: "Avg. Open Rate" },
    { num: "12.8%", lbl: "Click Rate" },
  ],
  tags: ["Campaign Builder", "Audience Segments", "AI Copywriting", "Analytics", "A/B Testing", "Automation"],
  accent: "#22D3EE",
};

function ProjectPreview({ project }: { project: typeof studyFlow | typeof mailMint }) {
  const image = "image" in project ? project.image : undefined;
  if (image) {
    return (
      <div className="relative">
        <Image
          src={image}
          alt={`${project.name} interface`}
          width={1920}
          height={1440}
          className="w-full h-auto block"
        />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="bg-[#1a1a1a] rounded-[14px] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
        <div className="bg-[#1a1a1a] rounded-[10px] overflow-hidden">
          <div className="bg-white p-5">
            <div className="flex items-center gap-[6px] pb-[10px] mb-[10px] border-b border-[#E5E7EB]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FF5F56]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#27C93F]" />
              <span className="text-[8px] text-[#6B7280] ml-1">{project.name.toLowerCase()}.ai</span>
            </div>
            <div className="flex justify-between items-center mb-[14px]">
              <h4 className="text-[13px] font-bold text-[#111827]">{project.name}</h4>
              <span className="text-[8px] font-semibold" style={{ color: project.accent }}>v2.0</span>
            </div>
            <div className="grid grid-cols-2 gap-[6px]">
              {project.stats.map((s, i) => (
                <div key={i} className="bg-[#F8FAFC] rounded-[6px] p-[7px] border border-[#E5E7EB]">
                  <div className="text-[12px] font-bold" style={{ color: project.accent }}>{s.num}</div>
                  <div className="text-[7px] text-[#6B7280] mt-px">{s.lbl}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 mt-[10px]">
              {project.tags.map((t, i) => (
                <span key={i} className="text-[6px] px-[6px] py-[2px] rounded-[4px] font-medium" style={{ background: `${project.accent}14`, color: project.accent }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] h-2 rounded-b-[10px] w-[98%] -mt-px mx-auto" />
    </div>
  );
}

export default function Projects() {
  return (
    <section className="bg-section section-padding" id="projects">
      <div className="container-main">
        <div className="text-center mb-8">
          <SectionReveal>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
              <Star size={12} />
              Featured Work
            </span>
            <h2 className="text-[clamp(30px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              Projects I&apos;ve Built
            </h2>
            <p className="text-lg leading-[30px] text-text-secondary max-w-[600px] mx-auto">
              Real products I designed and developed, from concept to deployment.
            </p>
          </SectionReveal>
        </div>

        <SectionReveal>
          <div className="bg-white rounded-[16px] border border-border p-8 lg:p-10 mb-6 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px] grid lg:grid-cols-2 gap-6 lg:gap-10 items-center shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/[0.07] px-[12px] py-[4px] rounded-full mb-[14px]">
                <Star size={11} />
                {studyFlow.badge}
              </span>
              <h3 className="text-2xl font-bold mb-3">{studyFlow.name}</h3>
              <p className="text-base leading-[28px] text-text-secondary mb-6">{studyFlow.desc}</p>
              <div className="flex gap-2.5 flex-wrap">
                {studyFlow.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener" : undefined}
                    className={`inline-flex items-center gap-2 px-[18px] py-[8px] rounded-[8px] text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px] ${
                      link.primary
                        ? "bg-primary text-white hover:bg-primary-dark hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                        : "bg-transparent text-[#111827] border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    <link.icon size={13} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <ProjectPreview project={studyFlow} />
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="bg-white rounded-[16px] border border-border p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px] grid lg:grid-cols-2 gap-6 lg:gap-10 items-center shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <div>
              <h3 className="text-2xl font-bold mb-3">{mailMint.name}</h3>
              <p className="text-base leading-[28px] text-text-secondary mb-6">{mailMint.desc}</p>
              <div className="flex gap-2.5 flex-wrap">
                {mailMint.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener" : undefined}
                    className={`inline-flex items-center gap-2 px-[18px] py-[8px] rounded-[8px] text-sm font-semibold transition-all duration-300 hover:-translate-y-[1px] ${
                      link.primary
                        ? "bg-primary text-white hover:bg-primary-dark hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                        : "bg-transparent text-[#111827] border border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    <link.icon size={13} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <ProjectPreview project={mailMint} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
