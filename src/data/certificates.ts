export interface Certificate {
  slug: string;
  title: string;
  subtitle: string;
  provider: string;
  awarded: string;
  credentialType: string;
  description: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    slug: "uiux-design",
    title: "UI/UX Design",
    subtitle: "AI-assisted MVP Development & Product Thinking",
    provider: "Dev & Design",
    awarded: "May 14, 2026",
    credentialType: "Professional Certificate",
    description:
      "A comprehensive certification covering UI/UX design principles, AI-assisted MVP development workflows, and product thinking methodologies.",
    image: "/certificates/uiux-certificate.jpeg",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "",
    provider: "HubSpot Academy",
    awarded: "",
    credentialType: "Professional Certificate",
    description:
      "HubSpot Academy certification covering inbound marketing, content strategy, and digital marketing fundamentals.",
    image: "/certificates/hubspot-digital-marketing.jpeg",
  },
  {
    slug: "ai-mvp-development",
    title: "AI-assisted MVP Development",
    subtitle: "Product Thinking",
    provider: "Dev & Design",
    awarded: "July 7, 2026",
    credentialType: "Professional Certificate",
    description:
      "Certification in building AI-assisted minimum viable products with a focus on product thinking and rapid prototyping.",
    image: "/certificates/ai-assisted-mvp.jpeg",
  },
];

export function getCertificateBySlug(slug: string): Certificate | undefined {
  return certificates.find((c) => c.slug === slug);
}
