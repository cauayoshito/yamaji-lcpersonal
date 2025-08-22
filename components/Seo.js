// components/Seo.jsx
import Head from "next/head";

export default function Seo({
  title = "RL TEAM | Consultoria Esportiva",
  description = "Protocolo individualizado, treinos progressivos e suporte diário 6h–22h. Resultados reais sem extremismos.",
  image = "/images/logo.png", // Pode ser uma URL completa ou um caminho relativo
  url,
  faq = [], // [{ q, a }]
  org = {
    name: "RL TEAM Consultoria Esportiva",
    instagram: "https://instagram.com/treinador_lucascosta",
  },
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://rlteam.com.br";
  const canonical = url || baseUrl;
  const ogImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  // JSON-LD: Organization
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: baseUrl,
    logo: `${baseUrl}/images/logonav.png`,
    sameAs: org.instagram ? [org.instagram] : [],
  };

  // JSON-LD: FAQ (se houver perguntas)
  const faqJson =
    faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="RL TEAM | Consultoria Esportiva" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicons básicos (ajuste se já tiver) */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
      />
      {faqJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      )}
    </Head>
  );
}
