"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.style.transform = "none";
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
      {children}
    </h2>
  );
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base lg:text-lg leading-[28px] lg:leading-[30px] text-text-secondary max-w-[680px]">
      {children}
    </p>
  );
}

function MockupImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1440}
      className={`w-full h-auto block ${className ?? ""}`}
    />
  );
}

const LIVE_URL = "https://studyflow-v2-navy.vercel.app";
const BEHANCE_URL =
  "https://www.behance.net/gallery/254917853/StudyFlow-An-AI-Powered-Study-Companion?platform=direct";

export default function StudyFlowProject() {
  return (
    <>
      {/* Back navigation */}
      <div className="border-b border-border bg-white/88 backdrop-blur-[14px] saturate-180 sticky top-0 z-50">
        <div className="container-main flex items-center h-14">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-[#111827] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* 1. Hero — text + real desktop mockup */}
      <section className="pt-5 pb-7 lg:pt-7 lg:pb-10 overflow-hidden relative">
        <div className="container-main relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <SectionLabel>Project</SectionLabel>
              <h1 className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827] mb-4 max-w-[720px]">
                StudyFlow
              </h1>
              <p className="text-lg leading-[28px] text-text-secondary max-w-[600px]">
                AI-powered Learning Companion for Students
              </p>
              <SectionBody>
                StudyFlow is an AI-powered web application designed to help
                students plan, organize and improve their learning experience.
                It combines intelligent study planning, AI-assisted tutoring,
                quizzes and productivity tools into one simple platform.
              </SectionBody>
              <div className="flex items-center gap-4 mt-8 flex-wrap">
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] text-[15px] font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                >
                  View Live Project
                  <ArrowRight size={16} />
                </a>
                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[#111827] border border-border rounded-[8px] text-[15px] font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-[1px]"
                >
                  <ExternalLink size={15} />
                  View Case Study
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative flex justify-center items-center py-4">
                <div className="w-full max-w-[560px]">
                  <MockupImage
                    src="/desktop-mockup01-dashboard.png"
                    alt="StudyFlow desktop dashboard"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <Reveal>
              <div className="bg-white rounded-[12px] border border-border p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="text-xs font-medium text-text-tertiary uppercase tracking-[0.04em] mb-1">Role</div>
                <div className="text-sm font-semibold text-[#111827]">Product Engineer &bull; UI/UX Designer</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white rounded-[12px] border border-border p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="text-xs font-medium text-text-tertiary uppercase tracking-[0.04em] mb-1">Project Type</div>
                <div className="text-sm font-semibold text-[#111827]">Personal Product</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white rounded-[12px] border border-border p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="text-xs font-medium text-text-tertiary uppercase tracking-[0.04em] mb-1">Status</div>
                <div className="text-sm font-semibold text-[#111827]">Live</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white rounded-[12px] border border-border p-5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="text-xs font-medium text-text-tertiary uppercase tracking-[0.04em] mb-1">Tech Stack</div>
                <div className="text-sm font-semibold text-[#111827]">Next.js &bull; React &bull; Tailwind</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Product Preview — real mockups */}
      <section className="py-16 lg:py-24 bg-section border-t border-border/40">
        <div className="container-main">
          <Reveal>
            <SectionLabel>Showcase</SectionLabel>
            <SectionHeading>Product Preview</SectionHeading>
            <SectionBody>
              Real screenshots of the StudyFlow interface on mobile and desktop.
              The full design story is covered in the case study on Behance.
            </SectionBody>
          </Reveal>

          <Reveal>
            <div className="grid sm:grid-cols-2 gap-8 mt-10 max-w-[960px] mx-auto">
              <MockupImage
                src="/phone-mockup01-ai chat.png"
                alt="StudyFlow AI chat on mobile"
              />
              <MockupImage
                src="/phone-mockup02-library.png"
                alt="StudyFlow library on mobile"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 max-w-[960px] mx-auto">
              <MockupImage
                src="/desktop-mockup02-screen.png"
                alt="StudyFlow desktop screen"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}