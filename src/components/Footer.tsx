import { Mail } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)" }}>
      <div className="flex flex-col items-center gap-4 px-6">
        <div className="text-center">
          <p className="text-lg font-bold text-white">Mercy David</p>
          <p className="text-sm text-white/70 mt-0.5">Product Engineer &bull; UI/UX Designer</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Mercified6" target="_blank" rel="noopener" aria-label="GitHub" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300">
            <GithubIcon size={16} />
          </a>
          <a href="https://www.linkedin.com/in/mercy-david-8a6a39378/" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300">
            <LinkedinIcon size={16} />
          </a>
          <a href="mailto:dmercy180@gmail.com" aria-label="Email" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300">
            <Mail size={16} />
          </a>
          <a href="https://wa.me/2348120561867" target="_blank" rel="noopener" aria-label="WhatsApp" className="w-[38px] h-[38px] rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300">
            <WhatsAppIcon size={16} />
          </a>
        </div>
        <p className="text-xs text-white/60 mt-1">&copy; 2026 Mercy David</p>
      </div>
    </footer>
  );
}
