"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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
  return <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">{children}</div>;
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "dmercy180@gmail.com",
    href: "mailto:dmercy180@gmail.com",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+234 812 056 1867",
    href: "https://wa.me/2348120561867",
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    value: "linkedin.com/in/mercy-david-8a6a39378",
    href: "https://www.linkedin.com/in/mercy-david-8a6a39378/",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    value: "github.com/Mercified6",
    href: "https://github.com/Mercified6",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
  },
];

export default function Contact() {
  return (
    <section className="bg-section section-padding" id="contact">
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-primary px-3 py-1.5 border border-primary/12 rounded-full bg-primary/[0.04] mb-5">
              Contact
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              Get in touch
            </h2>
            <p className="text-lg leading-[30px] text-text-secondary max-w-[560px] mx-auto">
              Whether you have an opportunity, collaboration or simply want to connect, I&apos;d love to hear from you.
            </p>
          </div>
          <div className="max-w-[700px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") && !item.href.startsWith("mailto") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") && !item.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-[16px] border border-border p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[1px]"
                >
                  <div className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-primary/[0.07] text-primary mb-4">
                    <item.icon size={18} />
                  </div>
                  <h4 className="text-sm font-semibold text-[#111827] mb-1">{item.title}</h4>
                  <span className="text-sm text-text-secondary break-all">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
