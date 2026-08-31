import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { certificates, getCertificateBySlug } from "@/data/certificates";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return certificates.map((cert) => ({ slug: cert.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);
  if (!cert) return { title: "Certificate Not Found" };
  return {
    title: `${cert.title} - Mercy David`,
    description: cert.description,
  };
}

export default async function CertificatePage({ params }: Props) {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);
  if (!cert) notFound();

  return (
    <>
      {/* ── Sticky back navigation ── */}
      <div className="border-b border-border bg-white/88 backdrop-blur-[14px] saturate-180 sticky top-0 z-50">
        <div className="container-main flex items-center h-14">
          <Link
            href="/#certificates"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-[#111827] transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Certifications
          </Link>
        </div>
      </div>

      {/* ── Certificate viewer ── */}
      <main className="py-12 lg:py-20">
        <div className="container-main max-w-[960px]">
          {/* ── Certificate card ── */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-300 shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="relative w-full rounded-[10px] overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  width={900}
                  height={640}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ── Certificate information ── */}
          <div className="mt-8 lg:mt-10">
            <h1 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#111827] mb-2">
              {cert.title}
            </h1>
            {cert.subtitle && (
              <p className="text-lg leading-[28px] text-text-secondary mb-5">
                {cert.subtitle}
              </p>
            )}

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="font-semibold text-[#111827]">
                  Issued by
                </span>
                <span>{cert.provider}</span>
              </div>
              {cert.awarded && (
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="font-semibold text-[#111827]">
                    Awarded
                  </span>
                  <span>{cert.awarded}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="font-semibold text-[#111827]">
                  Credential Type
                </span>
                <span>{cert.credentialType}</span>
              </div>
            </div>

            <p className="text-base leading-[28px] text-text-secondary max-w-[680px]">
              {cert.description}
            </p>
          </div>

          {/* ── Action buttons ── */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 lg:mt-10 pt-8 border-t border-border">
            <a
              href={cert.image}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-[8px] text-[15px] font-semibold hover:bg-primary-dark transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
            >
              <Download size={15} />
              Download Certificate
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-[#111827] border border-border rounded-[8px] text-[15px] font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-[1px]"
            >
              <ArrowLeft size={15} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
